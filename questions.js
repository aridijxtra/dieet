// js/questions.js
// All questions V0–V21 with answer options and scores

const QUESTIONS = [
  {
    id: 'V0',
    text: 'Bent u al met uw dieet begonnen?',
    type: 'radio',
    options: [
      { label: 'Ja',  score: 1 },
      { label: 'Nee', score: 2 }
    ]
  },
  {
    id: 'V1',
    text: 'Hoe ging het bij u de afgelopen twee weken?',
    sub: 'Het is belangrijk dat de dieetadviezen goed opgevolgd worden, maar soms valt dat niet mee. Daar kunnen verschillende redenen voor zijn.',
    type: 'radio',
    skipIf: (answers) => answers.V0 === 2,
    options: [
      { label: 'Ik heb me precies aan het dieet gehouden',       score: 4 },
      { label: 'Ik heb me grotendeels aan het dieet gehouden',   score: 3 },
      { label: 'Ik heb me maar voor een deel aan het dieet gehouden', score: 2 },
      { label: 'Ik heb me nauwelijks aan het dieet gehouden',    score: 1 },
      { label: 'Ik heb me helemaal niet aan het dieet gehouden', score: 0 }
    ]
  },
  {
    id: 'V2',
    text: 'Als u zich niet helemaal aan het dieet kon houden, hoe kwam dat?',
    sub: 'U kunt meer dan één reden invullen.',
    type: 'checkbox',
    skipIf: (answers) => answers.V0 === 2,
    optional: true,
    options: [
      { label: 'Ik had weinig tijd',                  value: 'weinig tijd' },
      { label: 'Ik ben het vergeten',                 value: 'vergeten' },
      { label: 'Ik had niet voldoende geld',          value: 'onvoldoende geld' },
      { label: 'Ik was niet erg gemotiveerd',         value: 'weinig motivatie' },
      { label: 'Ik had geen klachten meer',           value: 'geen klachten meer' },
      { label: 'Ik had andere dingen aan mijn hoofd', value: 'andere dingen aan het hoofd' },
      { label: 'Ik wist niet goed hoe het moest',     value: 'onduidelijkheid over het dieet' }
    ]
  },
  {
    id: 'V3',
    text: 'Ik weet wat het dieet inhoudt.',
    type: 'radio',
    options: [
      { label: 'Ik weet precies wat het dieet inhoudt',    score: 4 },
      { label: 'Ik weet wat het dieet inhoudt',            score: 3 },
      { label: 'Ik weet een beetje wat het dieet inhoudt', score: 2 },
      { label: 'Ik weet niet precies wat het dieet inhoudt', score: 1 },
      { label: 'Ik weet niet wat het dieet inhoudt',       score: 0 }
    ]
  },
  {
    id: 'V4',
    text: 'Ik ben van plan om het dieet in de komende tijd precies te volgen.',
    type: 'radio',
    options: [
      { label: 'Dat ben ik heel sterk van plan',    score: 4 },
      { label: 'Dat ben ik van plan',               score: 3 },
      { label: 'Dat ben ik een beetje van plan',    score: 2 },
      { label: 'Dat ben ik niet echt van plan',     score: 1 },
      { label: 'Dat ben ik echt niet van plan',     score: 0 }
    ]
  },
  {
    id: 'V5',
    text: 'Ik ben gemotiveerd om het dieet te volgen.',
    type: 'radio',
    options: [
      { label: 'Ik ben heel erg gemotiveerd',      score: 4 },
      { label: 'Ik ben gemotiveerd',               score: 3 },
      { label: 'Ik ben een beetje gemotiveerd',    score: 2 },
      { label: 'Ik ben niet erg gemotiveerd',      score: 1 },
      { label: 'Ik ben helemaal niet gemotiveerd', score: 0 }
    ]
  },
  {
    id: 'V6',
    text: 'Het heeft zin voor mij om het dieet te volgen.',
    type: 'radio',
    options: [
      { label: 'Ja, dat heeft veel zin voor mij',         score: 3 },
      { label: 'Ja, dat heeft zin voor mij',              score: 2 },
      { label: 'Ja, dat heeft een beetje zin voor mij',   score: 1 },
      { label: 'Nee, dat heeft geen zin voor mij',        score: 0 }
    ]
  },
  {
    id: 'V7',
    text: 'Ik krijg minder klachten als ik het dieet volg.',
    type: 'radio',
    options: [
      { label: 'Ja, dan krijg ik veel minder klachten',  score: 3 },
      { label: 'Ja, dan krijg ik minder klachten',       score: 2 },
      { label: 'Ja, dan krijg ik wel wat minder klachten', score: 1 },
      { label: 'Nee, ik krijg niet minder klachten',     score: 0 }
    ]
  },
  {
    id: 'V8',
    text: 'Het is beter voor mijn gezondheid om het dieet te volgen.',
    type: 'radio',
    options: [
      { label: 'Ja, dat is veel beter voor mijn gezondheid',      score: 3 },
      { label: 'Ja, dat is beter voor mijn gezondheid',           score: 2 },
      { label: 'Ja, dat is een beetje beter voor mijn gezondheid', score: 1 },
      { label: 'Nee, dat is niet beter voor mijn gezondheid',     score: 0 }
    ]
  },
  {
    id: 'V9',
    text: 'Het dieet volgen heeft voordelen.',
    type: 'radio',
    options: [
      { label: 'Ja, het dieet volgen heeft veel voordelen',    score: 3 },
      { label: 'Ja, het dieet volgen heeft voordelen',         score: 2 },
      { label: 'Ja, het dieet volgen heeft wel wat voordelen', score: 1 },
      { label: 'Nee, het dieet volgen heeft geen voordelen',   score: 0 }
    ]
  },
  {
    id: 'V10',
    text: 'Ik voel me beter als ik het dieet volg.',
    type: 'radio',
    options: [
      { label: 'Ja, dan voel ik me veel beter',         score: 3 },
      { label: 'Ja, dan voel ik me beter',              score: 2 },
      { label: 'Ja, dan voel ik me een beetje beter',   score: 1 },
      { label: 'Nee, dan voel ik me niet beter',        score: 0 }
    ]
  },
  {
    id: 'V11',
    text: 'Ik voel me lichamelijk sterker als ik het dieet volg.',
    type: 'radio',
    options: [
      { label: 'Ja, dan voel ik me veel sterker',       score: 3 },
      { label: 'Ja, dan voel ik me sterker',            score: 2 },
      { label: 'Ja, dan voel ik me een beetje sterker', score: 1 },
      { label: 'Nee, dan voel ik me niet sterker',      score: 0 }
    ]
  },
  {
    id: 'V12',
    text: 'Het lukt me om de komende tijd het dieet precies te volgen.',
    type: 'radio',
    options: [
      { label: 'Dat lukt me zeker wel',         score: 3 },
      { label: 'Dat lukt me waarschijnlijk wel', score: 2 },
      { label: 'Dat lukt me waarschijnlijk niet', score: 1 },
      { label: 'Dat lukt me zeker niet',         score: 0 }
    ]
  },
  {
    id: 'V13',
    text: 'Ik kijk er tegen op om de komende tijd het dieet precies te volgen.',
    type: 'radio',
    options: [
      { label: 'Daar kijk ik heel erg tegenop',      score: 0 },
      { label: 'Daar kijk ik tegenop',               score: 1 },
      { label: 'Daar kijk ik een beetje tegenop',    score: 2 },
      { label: 'Daar kijk ik helemaal niet tegenop', score: 3 }
    ]
  },
  {
    id: 'V14',
    text: 'Het is moeilijk om het dieet precies te volgen.',
    type: 'radio',
    options: [
      { label: 'Dat is erg moeilijk',      score: 0 },
      { label: 'Dat is moeilijk',          score: 1 },
      { label: 'Dat is niet erg moeilijk', score: 2 },
      { label: 'Dat is gemakkelijk',       score: 3 }
    ]
  },
  {
    id: 'V15',
    text: 'Ik zal het dieet in de komende tijd precies volgen.',
    type: 'radio',
    options: [
      { label: 'Ik zal het dieet precies volgen',          score: 4 },
      { label: 'Ik zal het dieet grotendeels volgen',      score: 3 },
      { label: 'Ik zal het dieet maar gedeeltelijk volgen', score: 2 },
      { label: 'Ik zal het dieet een klein beetje volgen', score: 1 },
      { label: 'Ik zal het dieet niet volgen',             score: 0 }
    ]
  },
  {
    id: 'V16',
    text: 'Het dieet volgen heeft nadelen.',
    type: 'radio',
    options: [
      { label: 'Ja, het dieet volgen heeft veel nadelen',    score: 3 },
      { label: 'Ja, het dieet volgen heeft nadelen',         score: 2 },
      { label: 'Ja, het dieet volgen heeft wel wat nadelen', score: 1 },
      { label: 'Nee, het dieet volgen heeft geen nadelen',   score: 0 }
    ]
  },
  {
    id: 'V17',
    text: 'De mensen in mijn omgeving vinden het belangrijk dat ik het dieet volg.',
    type: 'radio',
    options: [
      { label: 'Dat vinden ze heel belangrijk',         score: 3 },
      { label: 'Dat vinden ze belangrijk',              score: 2 },
      { label: 'Dat vinden ze maar een beetje belangrijk', score: 1 },
      { label: 'Dat vinden ze onbelangrijk',            score: 0 }
    ]
  },
  {
    id: 'V18',
    text: 'Ik heb het gevoel dat ik wat betreft mijn dieet er alleen voor sta.',
    type: 'radio',
    options: [
      { label: 'Ja, ik sta er helemaal alleen voor',    score: 0 },
      { label: 'Ja, ik sta er grotendeels alleen voor', score: 1 },
      { label: 'Ja, ik sta er gedeeltelijk alleen voor', score: 2 },
      { label: 'Nee, ik sta er niet alleen voor',       score: 3 }
    ]
  },
  {
    id: 'V19',
    text: 'De mensen in mijn omgeving helpen me om mijn dieet te volgen.',
    sub: 'Of hoe denkt u dat het zal zijn?',
    type: 'radio',
    options: [
      { label: 'Ze helpen me heel goed', score: 3 },
      { label: 'Ze helpen me',           score: 2 },
      { label: 'Ze helpen me een beetje', score: 1 },
      { label: 'Ze helpen me niet',      score: 0 }
    ]
  },
  {
    id: 'V20',
    text: 'De mensen in mijn omgeving steunen mij om mijn dieet te volgen.',
    sub: 'Of hoe denkt u dat het zal zijn?',
    type: 'radio',
    options: [
      { label: 'Ze steunen me heel goed', score: 3 },
      { label: 'Ze steunen me',           score: 2 },
      { label: 'Ze steunen me een beetje', score: 1 },
      { label: 'Ze steunen me niet',      score: 0 }
    ]
  },
  {
    id: 'V21',
    text: 'Er zijn mensen met wie ik gemakkelijk over mijn dieet kan praten.',
    type: 'radio',
    options: [
      { label: 'Ja, met meerdere mensen kan ik gemakkelijk over mijn dieet praten', score: 2 },
      { label: 'Ja, met één persoon kan ik gemakkelijk over mijn dieet praten',     score: 1 },
      { label: 'Nee, er is niemand met wie ik gemakkelijk over mijn dieet kan praten', score: 0 }
    ]
  }
];
