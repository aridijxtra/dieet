// js/app.js
// Main application controller

(function () {
  // ── STATE ─────────────────────────────────────────────────
  let userName    = '';
  let userGeslacht = '';
  let answers     = {};
  let activeQuestions = []; // filtered question list (skips applied)
  let currentIndex = 0;

  // ── HELPERS ───────────────────────────────────────────────
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
  }

  function buildActiveQuestions() {
    activeQuestions = QUESTIONS.filter(q => {
      if (typeof q.skipIf === 'function') {
        return !q.skipIf(answers);
      }
      return true;
    });
  }

  // ── INTRO SCREEN ──────────────────────────────────────────
  const inputNaam   = document.getElementById('input-naam');
  const btnStart    = document.getElementById('btn-start');
  const introError  = document.getElementById('intro-error');
  const genderBtns  = document.querySelectorAll('.gender-btn');

  function checkIntroReady() {
    btnStart.disabled = !(inputNaam.value.trim() && userGeslacht);
  }

  inputNaam.addEventListener('input', checkIntroReady);

  genderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      genderBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      userGeslacht = btn.dataset.value;
      checkIntroReady();
    });
  });

  btnStart.addEventListener('click', () => {
    userName = inputNaam.value.trim();
    if (!userName || !userGeslacht) {
      introError.classList.remove('hidden');
      return;
    }
    introError.classList.add('hidden');
    answers = {};
    currentIndex = 0;
    buildActiveQuestions();
    showScreen('screen-questions');
    renderQuestion();
  });

  // ── QUESTION SCREEN ───────────────────────────────────────
  const questionCard = document.getElementById('question-card');
  const btnPrev      = document.getElementById('btn-prev');
  const btnNext      = document.getElementById('btn-next');
  const progressFill = document.getElementById('progress-fill');
  const progressLabel= document.getElementById('progress-label');

  function updateProgress() {
    const pct = Math.round(((currentIndex + 1) / activeQuestions.length) * 100);
    progressFill.style.width = pct + '%';
    progressLabel.textContent = `Vraag ${currentIndex + 1} van ${activeQuestions.length}`;
  }

  function renderQuestion() {
    const q = activeQuestions[currentIndex];
    updateProgress();

    btnPrev.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    btnNext.textContent = currentIndex === activeQuestions.length - 1 ? 'Bekijk resultaten →' : 'Volgende →';

    // Check if already answered
    const currentAnswer = answers[q.id];
    const hasAnswer = q.type === 'checkbox'
      ? (currentAnswer && currentAnswer.length > 0) || q.optional
      : currentAnswer !== undefined;

    btnNext.disabled = !hasAnswer;

    // Build question HTML
    let html = `
      <div class="question-number">Vraag ${currentIndex + 1}</div>
      <div class="question-text">${q.text}</div>
    `;
    if (q.sub) html += `<div class="question-sub">${q.sub}</div>`;

    if (q.type === 'radio') {
      html += `<div class="options-list">`;
      q.options.forEach((opt, i) => {
        const checked = currentAnswer === opt.score ? 'checked' : '';
        const selected = currentAnswer === opt.score ? 'selected' : '';
        html += `
          <label class="option-item ${selected}" data-score="${opt.score}">
            <input type="radio" name="q_${q.id}" value="${opt.score}" ${checked} />
            <span class="option-label">${opt.label}</span>
          </label>
        `;
      });
      html += `</div>`;
    } else if (q.type === 'checkbox') {
      const selected = currentAnswer || [];
      html += `<div class="checkbox-note">U kunt meer dan één reden aanvinken.</div>`;
      html += `<div class="options-list">`;
      q.options.forEach((opt, i) => {
        const checked = selected.includes(opt.value) ? 'checked' : '';
        const cls = selected.includes(opt.value) ? 'selected' : '';
        html += `
          <label class="option-item ${cls}" data-value="${opt.value}">
            <input type="checkbox" name="q_${q.id}" value="${opt.value}" ${checked} />
            <span class="option-label">${opt.label}</span>
          </label>
        `;
      });
      html += `</div>`;
    }

    questionCard.innerHTML = html;
    questionCard.style.animation = 'none';
    questionCard.offsetHeight; // reflow
    questionCard.style.animation = 'fadeUp 0.3s ease both';

    // Attach listeners
    if (q.type === 'radio') {
      questionCard.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', () => {
          const score = parseInt(item.dataset.score);
          answers[q.id] = score;

          // If V0 is answered, rebuild active questions for skip logic
          if (q.id === 'V0') {
            buildActiveQuestions();
          }

          questionCard.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
          item.classList.add('selected');
          item.querySelector('input').checked = true;
          btnNext.disabled = false;
        });
      });
    } else if (q.type === 'checkbox') {
      if (!answers[q.id]) answers[q.id] = [];

      questionCard.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', () => {
          const val = item.dataset.value;
          const cb  = item.querySelector('input');
          cb.checked = !cb.checked;

          if (cb.checked) {
            item.classList.add('selected');
            if (!answers[q.id].includes(val)) answers[q.id].push(val);
          } else {
            item.classList.remove('selected');
            answers[q.id] = answers[q.id].filter(v => v !== val);
          }

          // Checkbox is optional — always enable next
          btnNext.disabled = false;
        });
      });

      // Optional: always enable next on checkboxes
      btnNext.disabled = false;
    }
  }

  btnNext.addEventListener('click', () => {
    if (currentIndex < activeQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
    } else {
      finishAssessment();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  // ── FINISH & RESULTS ──────────────────────────────────────
  function finishAssessment() {
    const scoreData = calculateScores(answers);
    showScreen('screen-results');
    renderResults(answers, scoreData, userGeslacht, userName);
  }

  // ── PDF DOWNLOAD ──────────────────────────────────────────
  document.getElementById('btn-download').addEventListener('click', () => {
    downloadPdf(userName);
  });

})();
