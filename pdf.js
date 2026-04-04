// js/pdf.js
// Prepares and triggers PDF download

function preparePdfLayout(answers, scores, pct, diagText, naam, geslacht) {
  const title = geslacht === 'man' ? 'De heer' : 'Mevrouw';

  document.getElementById('pdf-naam').textContent = `${title} ${naam}`;
  document.getElementById('pdf-datum').textContent = new Date().toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  document.getElementById('pdf-year').textContent = new Date().getFullYear();

  // Build PDF bars
  const pdfBars = document.getElementById('pdf-bars');
  pdfBars.innerHTML = '';

  BAR_CONFIG.forEach(cfg => {
    if (cfg.key === 'gedrag' && answers.V0 === 2) return;

    const level   = scores[cfg.key];
    const tooltip = level ? cfg.tooltips[level] : (cfg.tooltips['null'] || '—');
    const dotColor = level === 'H' ? '#2e7d52' : level === 'M' ? '#c46a00' : level === 'L' ? '#b0292a' : '#ccc';

    const row = document.createElement('div');
    row.className = 'pdf-bar-item';
    row.innerHTML = `
      <div class="pdf-bar-label">${cfg.label}</div>
      <div class="pdf-bar-dot" style="background:${dotColor}"></div>
      <div class="pdf-bar-tooltip">${tooltip}</div>
    `;
    pdfBars.appendChild(row);
  });

  // PDF diagnostic text
  const pdfText = document.getElementById('pdf-text');
  pdfText.className = 'pdf-diag-text';
  pdfText.textContent = diagText;
}

function downloadPdf(naam) {
  const layout = document.getElementById('pdf-layout');
  layout.style.display = 'block';
  layout.style.position = 'fixed';
  layout.style.left = '-9999px';

  const filename = `Vodimind_Diagnose_${naam.replace(/\s+/g, '_')}.pdf`;

  const opt = {
    margin:       [15, 15, 15, 15],
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.97 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(layout).save().then(() => {
    layout.style.display = 'none';
  });
}
