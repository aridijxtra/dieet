// js/app.js — Main application controller

// ── GLOBAL STATE ─────────────────────────────────────────────
var APP = {
  userName:        '',
  userGeslacht:    '',
  answers:         {},
  activeQuestions: [],
  currentIndex:    0
};

// ── GENDER SELECTION (called via onclick in HTML) ─────────────
function selectGender(value) {
  APP.userGeslacht = value;
  document.getElementById('btn-man').classList.toggle('selected',   value === 'man');
  document.getElementById('btn-vrouw').classList.toggle('selected', value === 'vrouw');
  checkIntroReady();
}

function checkIntroReady() {
  var naam = document.getElementById('input-naam').value.trim();
  document.getElementById('btn-start').disabled = !(naam && APP.userGeslacht);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) { s.classList.remove('active'); });
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function buildActiveQuestions() {
  APP.activeQuestions = QUESTIONS.filter(function(q) {
    if (typeof q.skipIf === 'function') return !q.skipIf(APP.answers);
    return true;
  });
}

function renderQuestion() {
  var q     = APP.activeQuestions[APP.currentIndex];
  var total = APP.activeQuestions.length;

  var pct = Math.round(((APP.currentIndex + 1) / total) * 100);
  document.getElementById('progress-fill').style.width  = pct + '%';
  document.getElementById('progress-label').textContent = 'Vraag ' + (APP.currentIndex + 1) + ' van ' + total;

  var btnPrev = document.getElementById('btn-prev');
  var btnNext = document.getElementById('btn-next');
  btnPrev.style.visibility = APP.currentIndex === 0 ? 'hidden' : 'visible';
  btnNext.textContent = APP.currentIndex === total - 1 ? 'Bekijk resultaten →' : 'Volgende →';

  var currentAnswer = APP.answers[q.id];
  var hasAnswer = q.type === 'checkbox'
    ? (q.optional || (currentAnswer && currentAnswer.length > 0))
    : (currentAnswer !== undefined && currentAnswer !== null);
  btnNext.disabled = !hasAnswer;

  var html = '<div class="question-number">Vraag ' + (APP.currentIndex + 1) + '</div>';
  html += '<div class="question-text">' + q.text + '</div>';
  if (q.sub) html += '<div class="question-sub">' + q.sub + '</div>';

  if (q.type === 'radio') {
    html += '<div class="options-list">';
    q.options.forEach(function(opt) {
      var sel = (currentAnswer === opt.score) ? 'selected' : '';
      html += '<div class="option-item ' + sel + '" data-score="' + opt.score + '" onclick="selectOption(this)">';
      html += '<div class="option-radio">' + (sel ? '●' : '○') + '</div>';
      html += '<span class="option-label">' + opt.label + '</span>';
      html += '</div>';
    });
    html += '</div>';
  } else if (q.type === 'checkbox') {
    var selected = currentAnswer || [];
    html += '<div class="checkbox-note">U kunt meer dan één reden aanvinken.</div>';
    html += '<div class="options-list">';
    q.options.forEach(function(opt) {
      var sel = selected.indexOf(opt.value) !== -1 ? 'selected' : '';
      html += '<div class="option-item ' + sel + '" data-value="' + opt.value + '" onclick="toggleCheckbox(this)">';
      html += '<div class="option-radio">' + (sel ? '☑' : '☐') + '</div>';
      html += '<span class="option-label">' + opt.label + '</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  var card = document.getElementById('question-card');
  card.innerHTML = html;
  card.style.animation = 'none';
  void card.offsetHeight;
  card.style.animation = 'fadeUp 0.3s ease both';
}

function selectOption(el) {
  var q     = APP.activeQuestions[APP.currentIndex];
  var score = parseInt(el.getAttribute('data-score'));
  APP.answers[q.id] = score;
  if (q.id === 'V0') buildActiveQuestions();

  document.querySelectorAll('#question-card .option-item').forEach(function(item) {
    item.classList.remove('selected');
    item.querySelector('.option-radio').textContent = '○';
  });
  el.classList.add('selected');
  el.querySelector('.option-radio').textContent = '●';
  document.getElementById('btn-next').disabled = false;
}

function toggleCheckbox(el) {
  var q   = APP.activeQuestions[APP.currentIndex];
  var val = el.getAttribute('data-value');
  if (!APP.answers[q.id]) APP.answers[q.id] = [];

  var idx = APP.answers[q.id].indexOf(val);
  if (idx === -1) {
    APP.answers[q.id].push(val);
    el.classList.add('selected');
    el.querySelector('.option-radio').textContent = '☑';
  } else {
    APP.answers[q.id].splice(idx, 1);
    el.classList.remove('selected');
    el.querySelector('.option-radio').textContent = '☐';
  }
  document.getElementById('btn-next').disabled = false;
}

function finishAssessment() {
  var scoreData = calculateScores(APP.answers);
  showScreen('screen-results');
  renderResults(APP.answers, scoreData, APP.userGeslacht, APP.userName);
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('input-naam').addEventListener('input', checkIntroReady);

  document.getElementById('btn-start').addEventListener('click', function() {
    var naam = document.getElementById('input-naam').value.trim();
    if (!naam || !APP.userGeslacht) {
      document.getElementById('intro-error').classList.remove('hidden');
      return;
    }
    document.getElementById('intro-error').classList.add('hidden');
    APP.userName = naam;
    APP.answers  = {};
    APP.currentIndex = 0;
    buildActiveQuestions();
    showScreen('screen-questions');
    renderQuestion();
  });

  document.getElementById('btn-prev').addEventListener('click', function() {
    if (APP.currentIndex > 0) { APP.currentIndex--; renderQuestion(); }
  });

  document.getElementById('btn-next').addEventListener('click', function() {
    if (APP.currentIndex < APP.activeQuestions.length - 1) {
      APP.currentIndex++;
      renderQuestion();
    } else {
      finishAssessment();
    }
  });

  document.getElementById('btn-download').addEventListener('click', function() {
    downloadPdf(APP.userName);
  });
});
