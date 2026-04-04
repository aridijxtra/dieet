// js/scoring.js
// Calculates the 5 variables and classifies them as H / M / L

function mean(values) {
  const valid = values.filter(v => v !== null && v !== undefined && !isNaN(v));
  if (valid.length === 0) return null;
  return valid.reduce((a, b) => a + b, 0) / valid.length;
}

function classify(value, x, y) {
  if (value === null || value === undefined) return null;
  if (value > x)            return 'H';
  if (value > y && value <= x) return 'M';
  return 'L';
}

function calculateScores(answers) {
  const a = answers;

  // ── RAW SCORES ──────────────────────────────────────────
  // Gedrag: V1 (only when V0 = 1)
  const gedraRaw = (a.V0 === 1 && a.V1 !== undefined) ? a.V1 : null;

  // Intentie: mean(V4, V5, V15)  — all on 0-4 scale → mean 0-4, thresholds x=2, y=1
  const intentieRaw = mean([a.V4, a.V5, a.V15]);

  // Pro: mean(V6–V11)  — all 0-3 → mean 0-3, thresholds x=1.75, y=0.75
  const proRaw = mean([a.V6, a.V7, a.V8, a.V9, a.V10, a.V11]);

  // Selfef: mean(V12, V13, V14) — all 0-3 → x=1.75, y=0.75
  const selfefRaw = mean([a.V12, a.V13, a.V14]);

  // Socst: mean(V17–V21) — V17-V20 on 0-3, V21 on 0-2 → x=1.75, y=0.75
  const socstRaw = mean([a.V17, a.V18, a.V19, a.V20, a.V21]);

  // ── CLASSIFICATION ───────────────────────────────────────
  const gedrag  = classify(gedraRaw,   2,    1);     // x=2, y=1
  const mot     = classify(intentieRaw, 2,   1);     // x=2, y=1
  const pros    = classify(proRaw,     1.75, 0.75);  // x=1.75, y=0.75
  const self    = classify(selfefRaw,  1.75, 0.75);
  const soc     = classify(socstRaw,   1.75, 0.75);

  // ── BAR FILL PERCENTAGES (for visual) ───────────────────
  // Normalise each raw to 0-100%
  const pct = (val, max) => val === null ? 0 : Math.round((val / max) * 100);

  return {
    raw: { gedra: gedraRaw, intentie: intentieRaw, pro: proRaw, selfef: selfefRaw, socst: socstRaw },
    scores: { gedrag, mot, pros, self, soc },
    pct: {
      gedrag:  pct(gedraRaw,    4),
      mot:     pct(intentieRaw, 4),
      pros:    pct(proRaw,      3),
      self:    pct(selfefRaw,   3),
      soc:     pct(socstRaw,    3)
    }
  };
}
