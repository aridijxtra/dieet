// js/renderer.js
// Renders the results screen: bars + diagnostic text

function colorClass(level) {
  if (level === 'H') return 'green';
  if (level === 'M') return 'orange';
  if (level === 'L') return 'red';
  return 'grey';
}

function renderBars(scores, pct, answeredV0) {
  const container = document.getElementById('bars-container');
  container.innerHTML = '';

  BAR_CONFIG.forEach(cfg => {
    const level   = scores[cfg.key];
    const pctVal  = pct[cfg.key];
    const cls     = colorClass(level);
    const tooltip = level ? cfg.tooltips[level] : (cfg.tooltips['null'] || '—');

    // Hide gedrag bar if V0 = 2 (not started)
    if (cfg.key === 'gedrag' && answeredV0 === 2) {
      return;
    }

    const item = document.createElement('div');
    item.className = 'bar-item-wrap';
    item.innerHTML = `
      <div class="bar-item">
        <div class="bar-label">${cfg.label}</div>
        <div class="bar-track">
          <div class="bar-fill ${cls}" data-pct="${pctVal}"></div>
        </div>
        <div class="bar-badge ${cls}">${level === 'H' ? 'Hoog' : level === 'M' ? 'Matig' : level === 'L' ? 'Laag' : '—'}</div>
      </div>
      <div class="bar-tooltip-text">${tooltip}</div>
    `;
    container.appendChild(item);
  });

  // Animate bars after a short delay
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);
}

function renderDiagText(text) {
  const el = document.getElementById('diag-text');
  el.textContent = text;
}

function renderSubtitle(naam, geslacht) {
  const el = document.getElementById('results-subtitle');
  const title = geslacht === 'man' ? 'De heer' : 'Mevrouw';
  el.textContent = `Diagnose voor ${title} ${naam}`;
}

function renderResults(answers, scoreData, geslacht, naam) {
  const { scores, pct } = scoreData;
  const diagText = assembleDiagText(answers, scores, geslacht, naam);

  renderSubtitle(naam, geslacht);
  renderBars(scores, pct, answers.V0);
  renderDiagText(diagText);

  // Also populate PDF layout
  preparePdfLayout(answers, scores, pct, diagText, naam, geslacht);
}
