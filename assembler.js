// js/assembler.js
// Assembles the full diagnostic text from scores and answers

function getGenderTokens(geslacht, naam) {
  const isMan = geslacht === 'man';
  return {
    GN:  (isMan ? 'De heer ' : 'Mevrouw ') + naam,  // sentence-start: "De heer X"
    g:   isMan ? 'hij' : 'zij',                       // mid-sentence pronoun
    gn:  (isMan ? 'de heer ' : 'mevrouw ') + naam    // lowercase version (not currently used)
  };
}

function fillTokens(text, tokens, barriere) {
  return text
    .replace(/\{GN\}/g, tokens.GN)
    .replace(/\{g\}/g,  tokens.g)
    .replace(/\{gn\}/g, tokens.gn)
    .replace(/\{BARRIERE\}/g, barriere || 'diverse redenen');
}

function formatBarriere(selectedValues) {
  if (!selectedValues || selectedValues.length === 0) return 'diverse redenen';
  if (selectedValues.length === 1) return selectedValues[0];
  const last = selectedValues[selectedValues.length - 1];
  const rest = selectedValues.slice(0, -1);
  return rest.join(', ') + ' en ' + last;
}

function getDiag3Number(pros, self, soc) {
  // Map the combination of pros/self/soc (each H/M/L) to DIAG3 number
  const p = pros, s = self, o = soc;

  if (p === 'L' && s === 'H' && o === 'H') return 1;
  if (p === 'M' && s === 'H' && o === 'H') return 2;
  if (p === 'H' && s === 'L' && o === 'H') return 3;
  if (p === 'H' && s === 'M' && o === 'H') return 4;
  if (p === 'H' && s === 'H' && o === 'L') return 5;
  if (p === 'H' && s === 'H' && o === 'M') return 6;
  if (p === 'L' && s === 'L' && o === 'H') return 7;
  if (p === 'M' && s === 'L' && o === 'H') return 8;
  if (p === 'L' && s === 'M' && o === 'H') return 9;
  if (p === 'M' && s === 'M' && o === 'H') return 10;
  if (p === 'L' && s === 'H' && o === 'L') return 11;
  if (p === 'L' && s === 'H' && o === 'M') return 12;
  if (p === 'M' && s === 'H' && o === 'L') return 13;
  if (p === 'M' && s === 'H' && o === 'M') return 14;
  if (p === 'H' && s === 'L' && o === 'L') return 15;
  if (p === 'H' && s === 'M' && o === 'L') return 16;
  if (p === 'H' && s === 'L' && o === 'M') return 17;
  if (p === 'H' && s === 'M' && o === 'M') return 18;
  if (p === 'L' && s === 'L' && o === 'L') return 19;
  if (p === 'M' && s === 'L' && o === 'L') return 20;
  if (p === 'M' && s === 'M' && o === 'L') return 21;
  if (p === 'M' && s === 'M' && o === 'M') return 22;
  if (p === 'L' && s === 'M' && o === 'L') return 23;
  if (p === 'L' && s === 'L' && o === 'M') return 24;
  if (p === 'M' && s === 'L' && o === 'M') return 25;
  if (p === 'L' && s === 'M' && o === 'M') return 26;

  return null; // all H — no DIAG3 needed
}

function hasLowOrMid(pros, self, soc) {
  return pros !== 'H' || self !== 'H' || soc !== 'H';
}

function assembleDiagText(answers, scores, geslacht, naam) {
  const { gedrag, mot, pros, self, soc } = scores;
  const tokens = getGenderTokens(geslacht, naam);
  const barriere = formatBarriere(answers.V2);

  let parts = [];

  // ── PATH A: V0 = 1 (started diet) ───────────────────────
  if (answers.V0 === 1) {

    // DIAG1: determine which DIAG1 block
    let diag1Num = null;
    if      (gedrag === 'L' && mot === 'L') diag1Num = 1;
    else if (gedrag === 'L' && mot === 'M') diag1Num = 2;
    else if (gedrag === 'L' && mot === 'H') diag1Num = 3;
    else if (gedrag === 'M' && mot === 'L') diag1Num = 4;
    else if (gedrag === 'M' && mot === 'M') diag1Num = 5;
    else if (gedrag === 'M' && mot === 'H') diag1Num = 6;
    else if (gedrag === 'H' && mot === 'L') diag1Num = 7;
    else if (gedrag === 'H' && mot === 'M') diag1Num = 8;
    else if (gedrag === 'H' && mot === 'H') diag1Num = 9;

    if (diag1Num) {
      parts.push(fillTokens(DIAG1_TEXTS[diag1Num], tokens, barriere));
    }

    // DIAG2: follow-up block
    let diag2Text = '';
    const allHigh = pros === 'H' && self === 'H' && soc === 'H';

    if (gedrag === 'H' && mot === 'H') {
      if (allHigh) {
        // DIAG2=1
        diag2Text = fillTokens(DIAG2_TEXTS[1], tokens);
      } else {
        // DIAG2=2 → needs DIAG3
        const diag3Num = getDiag3Number(pros, self, soc);
        const diag3Text = diag3Num ? fillTokens(DIAG3_TEXTS[diag3Num], tokens) : '';
        diag2Text = fillTokens(DIAG2_TEXTS[2], tokens).replace('{DIAG3}', diag3Text);
      }
    } else {
      if (allHigh) {
        // DIAG2=3
        diag2Text = fillTokens(DIAG2_TEXTS[3], tokens);
      } else {
        // DIAG2=4 → needs DIAG3
        const diag3Num = getDiag3Number(pros, self, soc);
        const diag3Text = diag3Num ? fillTokens(DIAG3_TEXTS[diag3Num], tokens) : '';
        diag2Text = fillTokens(DIAG2_TEXTS[4], tokens).replace('{DIAG3}', diag3Text);
      }
    }

    if (diag2Text) parts.push(diag2Text);

  // ── PATH B: V0 = 2 (not yet started) ───────────────────
  } else {
    const v3 = answers.V3;
    const allHigh = pros === 'H' && self === 'H' && soc === 'H';

    let diag4Num = null;

    if      (mot === 'L' && v3 > 2  && !allHigh) diag4Num = 1;
    else if (mot === 'L' && v3 <= 2 && !allHigh) diag4Num = 2;
    else if (mot === 'M' && v3 > 2  && !allHigh) diag4Num = 3;
    else if (mot === 'M' && v3 <= 2 && !allHigh) diag4Num = 4;
    else if (mot === 'L' && v3 > 2  && allHigh)  diag4Num = 5;
    else if (mot === 'L' && v3 <= 2 && allHigh)  diag4Num = 6;
    else if (mot === 'M' && v3 > 2  && allHigh)  diag4Num = 7;
    else if (mot === 'M' && v3 <= 2 && allHigh)  diag4Num = 8;
    else if (mot === 'H' && v3 > 2  && !allHigh) diag4Num = 9;
    else if (mot === 'H' && v3 <= 2 && !allHigh) diag4Num = 10;
    else if (mot === 'H' && v3 > 2  && allHigh)  diag4Num = 11;
    else if (mot === 'H' && v3 <= 2 && allHigh)  diag4Num = 12;

    if (diag4Num) {
      let diag4Text = DIAG4_TEXTS[diag4Num];

      // Some DIAG4 blocks embed DIAG3
      if (diag4Text.includes('{DIAG3}')) {
        const diag3Num = getDiag3Number(pros, self, soc);
        const diag3Text = diag3Num ? fillTokens(DIAG3_TEXTS[diag3Num], tokens) : 'diverse beperkende factoren.';
        diag4Text = diag4Text.replace('{DIAG3}', diag3Text);
      }

      parts.push(fillTokens(diag4Text, tokens, barriere));
    }
  }

  return parts.join('\n\n');
}
