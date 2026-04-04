// js/messages.js
// All pre-written diagnostic text blocks

const DIAG1_TEXTS = {
  1: '{GN} heeft zich niet aan het dieet gehouden. De cliënt geeft zelf aan dat dat vooral te maken heeft met {BARRIERE}. Ook heeft de cliënt een lage motivatie om zich aan het dieet te houden.',
  2: '{GN} heeft zich niet aan het dieet gehouden. De cliënt geeft zelf aan dat dat vooral te maken heeft met {BARRIERE}. Ook heeft de cliënt een lage motivatie om zich aan het dieet te houden.',
  3: '{GN} heeft zich niet aan het dieet gehouden. De cliënt geeft zelf aan dat dat vooral te maken heeft met {BARRIERE}. Dat lijkt reëel want de motivatie van de cliënt lijkt wel goed te zijn. Toch zijn er ook psychologische redenen aan te wijzen waarom de dieettrouw laag is.',
  4: '{GN} heeft zich voor een deel aan het dieet gehouden. Dat het niet helemaal lukte heeft volgens de cliënt zelf vooral te maken met {BARRIERE}. Ook heeft de cliënt een lage motivatie om zich aan het dieet te houden.',
  5: '{GN} heeft zich voor een deel aan het dieet gehouden. Dat het niet helemaal lukte heeft volgens de cliënt zelf vooral te maken met {BARRIERE}. Ook heeft de cliënt een lage motivatie om zich aan het dieet te houden.',
  6: '{GN} heeft zich voor een deel aan het dieet gehouden. Dat het niet helemaal lukte heeft volgens de cliënt zelf vooral te maken met {BARRIERE}. Dat lijkt reëel want de motivatie van de cliënt lijkt wel goed te zijn. Toch zijn er ook psychologische redenen aan te wijzen waarom de dieettrouw niet optimaal is.',
  7: '{GN} heeft zich goed aan het dieet gehouden. De motivatie om dat te blijven doen is echter laag.',
  8: '{GN} heeft zich goed aan het dieet gehouden. De motivatie om dat te blijven doen is echter niet erg sterk.',
  9: '{GN} heeft zich goed aan het dieet gehouden. Ook de motivatie om dat te blijven doen is sterk.'
};

const DIAG2_TEXTS = {
  1: 'Verder heeft de cliënt een hoge score op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er van overtuigd dat het volgen van het dieet zinvol is, heeft weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund. De psychologische toestand lijkt optimaal voor een goede dieettrouw.',
  2: 'Toch lijkt de toestand niet optimaal. De cliënt heeft {DIAG3}',
  3: 'De cliënt heeft echter een hoge score op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er van overtuigd dat het volgen van het dieet zinvol is, heeft weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.',
  4: 'Dat kan te maken hebben met {DIAG3}'
};

const DIAG3_TEXTS = {
  1:  'een lage score op respons-effectiviteit: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is.',
  2:  'een matige score op respons-effectiviteit: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is.',
  3:  'een lage score op eigen-effectiviteit: {g} vindt het moeilijk om zich aan het dieet te houden.',
  4:  'een matige score op eigen-effectiviteit: {g} heeft moeite om zich aan het dieet te houden.',
  5:  'een lage score op sociale steun: {g} voelt zich niet gesteund door anderen.',
  6:  'een matige score op sociale steun: {g} voelt zich niet voldoende gesteund door anderen.',
  7:  'een lage score op respons-effectiviteit en op eigen-effectiviteit: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is en vindt het ook moeilijk om zich aan het dieet te houden.',
  8:  'een matige score op respons-effectiviteit en een lage score op eigen-effectiviteit: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is en vindt het ook moeilijk om zich aan het dieet te houden.',
  9:  'een lage score op respons-effectiviteit en een matige score op eigen-effectiviteit: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is en heeft ook moeite om zich aan het dieet te houden.',
  10: 'een matige score op respons-effectiviteit en op eigen-effectiviteit: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is en heeft ook moeite om zich aan het dieet te houden.',
  11: 'een lage score op respons-effectiviteit en op sociale steun: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is en voelt zich niet gesteund door anderen.',
  12: 'een lage score op respons-effectiviteit en een matige score op sociale steun: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is en voelt zich onvoldoende gesteund door anderen.',
  13: 'een matige score op respons-effectiviteit en een lage score op sociale steun: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is en voelt zich niet gesteund door anderen.',
  14: 'een matige score op respons-effectiviteit en op sociale steun: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is en voelt zich onvoldoende gesteund door anderen.',
  15: 'een lage score op eigen-effectiviteit en op sociale steun: {g} vindt het moeilijk om zich aan het dieet te houden en voelt zich niet gesteund door anderen.',
  16: 'een matige score op eigen-effectiviteit en een lage score op sociale steun: {g} heeft moeite om zich aan het dieet te houden en voelt zich niet gesteund door anderen.',
  17: 'een lage score op eigen-effectiviteit en een matige score op sociale steun: {g} vindt het moeilijk om zich aan het dieet te houden en voelt zich onvoldoende gesteund door anderen.',
  18: 'een matige score op eigen-effectiviteit en op sociale steun: {g} heeft moeite om zich aan het dieet te houden en voelt zich onvoldoende gesteund door anderen.',
  19: 'een lage score op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is, vindt het moeilijk om zich aan het dieet te houden en voelt zich niet gesteund door anderen.',
  20: 'een matige score op respons-effectiviteit en een lage score op eigen-effectiviteit en op sociale steun: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is, vindt het moeilijk om zich aan het dieet te houden en voelt zich niet gesteund door anderen.',
  21: 'een matige score op respons-effectiviteit en op eigen-effectiviteit en een lage score op sociale steun: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is, heeft moeite om zich aan het dieet te houden en voelt zich niet gesteund door anderen.',
  22: 'een matige score op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is, heeft moeite om zich aan het dieet te houden en voelt zich onvoldoende gesteund door anderen.',
  23: 'een lage score op respons-effectiviteit en sociale steun en een matige score op eigen-effectiviteit: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is, voelt zich niet gesteund door anderen en heeft moeite om zich aan het dieet te houden.',
  24: 'een lage score op respons-effectiviteit en eigen-effectiviteit en een matige score op sociale steun: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is, vindt het moeilijk om zich aan het dieet te houden en voelt zich onvoldoende gesteund door anderen.',
  25: 'een matige score op respons-effectiviteit en op sociale steun en een lage score op eigen-effectiviteit: {g} is er niet echt van overtuigd dat het volgen van het dieet zinvol is, voelt zich onvoldoende gesteund door anderen en vindt het moeilijk om zich aan het dieet te houden.',
  26: 'een lage score op respons-effectiviteit en een matige score op eigen-effectiviteit en op sociale steun: {g} is er niet van overtuigd dat het volgen van het dieet zinvol is, heeft moeite om zich aan het dieet te houden en voelt zich onvoldoende gesteund door anderen.'
};

const DIAG4_TEXTS = {
  1:  '{GN} is niet gemotiveerd om zich aan het dieet te houden. Wel heeft de cliënt het gevoel goed te weten wat het dieet inhoudt. De lage motivatie kan te maken hebben met {DIAG3}',
  2:  '{GN} is niet gemotiveerd om zich aan het dieet te houden. Ook weet de cliënt niet precies wat het dieet inhoudt. De lage motivatie kan te maken hebben met {DIAG3}',
  3:  '{GN} is niet sterk gemotiveerd om zich aan het dieet te houden. Wel heeft de cliënt het gevoel goed te weten wat het dieet inhoudt. De matige motivatie kan te maken hebben met {DIAG3}',
  4:  '{GN} is niet sterk gemotiveerd om zich aan het dieet te houden. Ook weet de cliënt niet precies wat het dieet inhoudt. De matige motivatie kan te maken hebben met {DIAG3}',
  5:  '{GN} is niet gemotiveerd om zich aan het dieet te houden. Wel weet de cliënt goed wat het dieet inhoudt. Inconsistent met de lage motivatie zijn de hoge scores op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er van overtuigd dat het volgen van het dieet zinvol is, heeft weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.',
  6:  '{GN} is niet gemotiveerd om zich aan het dieet te houden. Ook weet de cliënt niet precies wat het dieet inhoudt. Inconsistent met de lage motivatie zijn de hoge scores op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er van overtuigd dat het volgen van het dieet zinvol is, heeft weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.',
  7:  '{GN} is niet sterk gemotiveerd om zich aan het dieet te houden. Wel weet de cliënt goed wat het dieet inhoudt. Gezien de matige motivatie zijn de hoge scores op respons-effectiviteit, op eigen-effectiviteit en op sociale steun opvallend: {g} is er van overtuigd dat het volgen van het dieet zinvol is, verwacht weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.',
  8:  '{GN} is niet sterk gemotiveerd om zich aan het dieet te houden. Ook weet de cliënt niet precies wat het dieet inhoudt. Gezien de matige motivatie zijn de hoge scores op respons-effectiviteit, op eigen-effectiviteit en op sociale steun opvallend: {g} is er van overtuigd dat het volgen van het dieet zinvol is, verwacht weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.',
  9:  '{GN} is zeer gemotiveerd om zich aan het dieet te houden en heeft ook het gevoel goed te weten wat het dieet inhoudt. Toch heeft {g} {DIAG3}',
  10: '{GN} is zeer gemotiveerd om zich aan het dieet te houden. Toch weet de cliënt niet precies wat het dieet inhoudt. Toch heeft {g} {DIAG3}',
  11: '{GN} is zeer gemotiveerd om zich aan het dieet te houden en heeft ook het gevoel goed te weten wat het dieet inhoudt. Consistent met dit beeld zijn de hoge scores op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er van overtuigd dat het volgen van het dieet zinvol is, verwacht weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.',
  12: '{GN} is zeer gemotiveerd om zich aan het dieet te houden. Toch weet de cliënt niet precies wat het dieet inhoudt. Wel heeft {g} hoge scores op respons-effectiviteit, op eigen-effectiviteit en op sociale steun: {g} is er van overtuigd dat het volgen van het dieet zinvol is, verwacht weinig moeite met het volgen van het dieet en voelt zich sociaal voldoende gesteund.'
};

// Bar labels and tooltips
const BAR_CONFIG = [
  {
    key: 'gedrag',
    label: 'Dieetgedrag',
    tooltips: {
      H: 'Dieet is goed gevolgd',
      M: 'Dieet kan beter worden gevolgd',
      L: 'Dieet is onvoldoende gevolgd',
      null: 'Nog niet gestart met dieet'
    }
  },
  {
    key: 'mot',
    label: 'Motivatie',
    tooltips: {
      H: 'Motivatie is goed',
      M: 'Motivatie kan verbeterd worden',
      L: 'Motivatie is laag'
    }
  },
  {
    key: 'pros',
    label: 'Respons-effectiviteit',
    tooltips: {
      H: 'Vindt het dieet zinvol',
      M: 'Vindt het dieet niet heel erg zinvol',
      L: 'Vindt dat het dieet weinig zin heeft'
    }
  },
  {
    key: 'self',
    label: 'Eigen-effectiviteit',
    tooltips: {
      H: 'Ervaart voldoende controle',
      M: 'Kan meer controle ervaren',
      L: 'Ervaart weinig controle'
    }
  },
  {
    key: 'soc',
    label: 'Sociale steun',
    tooltips: {
      H: 'Ervaart voldoende sociale steun',
      M: 'Kan meer sociale steun gebruiken',
      L: 'Ervaart weinig sociale steun'
    }
  }
];
