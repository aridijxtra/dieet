# Vodimind Kerndiagnose

Een webgebaseerd assessment voor dieetgedrag en motivatie, ontwikkeld door de Faculteit Sociale Wetenschappen.

## Gebruik

Ga naar de GitHub Pages URL van dit project en vul het assessment in. Na afloop ontvangt u:
- Een visueel overzicht van vijf kernvariabelen (kleurbalken)
- Een gepersonaliseerde diagnostische tekst
- Een downloadbare PDF van de resultaten

## Variabelen

| Variabele | Vragen |
|---|---|
| Dieetgedrag | V1 |
| Motivatie/Intentie | V4, V5, V15 |
| Respons-effectiviteit | V6–V11 |
| Eigen-effectiviteit | V12–V14 |
| Sociale steun | V17–V21 |

## Installatie op GitHub Pages

1. Upload alle bestanden naar een GitHub repository
2. Ga naar **Settings → Pages**
3. Kies **Source: Deploy from a branch → main → / (root)**
4. Uw site is beschikbaar op `https://[gebruikersnaam].github.io/[repository-naam]`

## Bestandsstructuur

```
index.html          ← Hoofdpagina
style.css           ← Opmaak
js/
  questions.js      ← Vraagdefinities (V0–V21)
  scoring.js        ← Scoreberekening
  messages.js       ← Diagnostische teksten
  assembler.js      ← Tekstopbouw logica
  renderer.js       ← DOM rendering
  pdf.js            ← PDF generatie
  app.js            ← Applicatiecontroller
```

## Geen database vereist

Alle verwerking vindt plaats in de browser. Er worden geen gegevens opgeslagen of verstuurd.

---
*Vodimind © Faculteit Sociale Wetenschappen, Universiteit Leiden*
