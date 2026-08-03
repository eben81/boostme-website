# Boostme Design System

Status: verbindlich

Visuelle Referenz: freigegebene Hero-Sektion

Geltungsbereich: alle zukünftigen Seiten, Sektionen und Komponenten

Dieses Dokument ist die verbindliche Quelle für die Designsprache des
Boostme-Projekts. Bestehende Regeln, Tokens, Größen und Abstände dürfen nur
nach ausdrücklicher Freigabe verändert oder erweitert werden. Neue
Implementierungen müssen sich optisch nahtlos in die freigegebene Hero-Sektion
einfügen.

## Gestaltungsprinzip

Boostme wirkt modern, hochwertig, ruhig, editorial und minimalistisch. Das
Qualitätsniveau orientiert sich an Apple, Linear, Attio und Stripe, ohne deren
Enterprise- oder Silicon-Valley-Startup-Ästhetik zu übernehmen.

Vertrauen entsteht durch:

- hochwertige Typografie;
- klare Hierarchie;
- großzügigen Weißraum;
- ruhige Proportionen;
- präzise Ausrichtung;
- dezente Interaktionen;
- authentische Bilder lokaler Unternehmen.

Nicht zulässig sind verspielte Elemente, generische SaaS-Komponenten, billige
UI-Effekte, starke Glows, dekorative Raster, unnötige Verläufe, visuelle
Überladung und Animation ohne funktionalen Zweck.

## Zielgruppe

Die Website richtet sich an lokale Unternehmen in Berlin und Brandenburg,
insbesondere Handwerksbetriebe, Pflegedienste, Arztpraxen, Physiotherapien,
Kosmetikstudios, Friseure, Steuerberater und lokale Dienstleister.

Die Gestaltung darf weder nach Enterprise-Software noch nach einem
Silicon-Valley-Startup aussehen. Sie soll professionell, zugänglich, lokal und
vertrauenswürdig bleiben.

## Typografie

Die Typografie der freigegebenen Hero-Sektion ist verbindlich:

- Editorial Headlines: `Spectral`;
- Fließtext, Navigation, Labels, Buttons und Interface-Text: `Inter`;
- keine dritte Schriftfamilie;
- keine neue Schrift ohne ausdrückliche Freigabe;
- keine abweichende typografische Stilwelt in einzelnen Sektionen.

Große Headlines, ruhige Zeilenabstände und eine klare Hierarchie haben Vorrang
vor zusätzlichen grafischen Elementen. Die kanonischen Font-Tokens befinden
sich in `css/variables.css`.

Produktive Schriftdateien werden lokal unter `assets/fonts/` abgelegt. Neue
`@font-face`-Definitionen dürfen erst nach Bereitstellung der freigegebenen
Dateien ergänzt werden.

## Layout und Container

Navigation und sämtliche Seiteninhalte verwenden denselben Außencontainer:

```css
max-width: 1440px;
width: calc(100% - 48px);
margin-inline: auto;
```

Regeln:

- Navigation und Content sind links und rechts exakt bündig.
- Es gibt keine konkurrierenden äußeren Containerbreiten.
- Textblöcke dürfen innerhalb des Containers separat begrenzt werden.
- Der Hero-Text besitzt eine maximale Breite von `620px`.
- Weißraum ist wichtiger als zusätzliche Elemente.
- Abweichungen von Containerbreite, Grid oder Ausrichtung benötigen eine
  ausdrückliche Freigabe.

Der kanonische Container-Token ist `--width-global: 1440px`.

## Farben

Es dürfen ausschließlich vorhandene CI-Tokens aus `css/variables.css`
verwendet werden.

| Token | Wert | Verwendung |
| --- | --- | --- |
| Primary Green | `#00D285` | Primäre Aktionen und sparsame Akzente |
| Dark Navy | `#203749` | Dunkle Markenfläche |
| Night Blue | `#0F172A` | Tiefster Markenfarbton |
| Mint | `#E6FBF3` | Helle Markenfläche |
| Background | `#F8FAFC` | Heller Seitenhintergrund |
| White | `#FFFFFF` | Heller Neutralton |

Grün wird ausschließlich als Akzent eingesetzt. Neue Farben, unkontrollierte
Farbvarianten und dekorative Glows sind nicht zulässig. Neutrale Transparenzen
für Lesbarkeit, Borders und Schatten müssen aus den bestehenden Tokens stammen.

## Abstände

Alle Sektionen verwenden die definierte 8-Punkt-Skala aus
`css/variables.css`. Willkürliche Margins und Paddings sind nicht zulässig.

- Desktop Section Rhythm: `144px`;
- Tablet Section Rhythm: `96px`;
- Mobile Section Rhythm: `72px`.

Ausnahmen sind ausschließlich technische Werte wie 1px-Borders, 2px-Fokuslinien
und bereits freigegebene komponentenspezifische Maße. Abstände oder Größen
dürfen nicht ohne ausdrückliche Anweisung verändert werden.

## Buttons

Die bestehenden Hero-Buttons bilden das verbindliche Muster.

### Primary

- Boostme Green;
- schwarzer Text;
- Höhe und Proportionen aus dem bestehenden Button;
- Radius `24px`;
- Font-Awesome-Pfeil rechts;
- dezenter neutraler Schatten;
- keine Skalierung beim Hover.

### Secondary

- transparenter Hintergrund;
- dezente Border;
- Radius `24px`;
- identische Pfeilsprache;
- zurückhaltender Hover-Zustand.

Keine Pill-Buttons und keine neuen Buttonvarianten ohne Freigabe.

## Cards

Cards werden nur eingesetzt, wenn der Inhalt sie tatsächlich benötigt.

- große, konsistente Radien;
- sehr dezente Borders;
- sehr dezente neutrale Schatten;
- keine starken Glows;
- keine Glassmorphism-Spielereien;
- keine generischen SaaS-Dashboardkarten;
- keine neue Card-Variante ohne ausdrückliche Anweisung.

## Bilder

- ausschließlich hochwertige, authentische Motive;
- lokale Unternehmen und reale Arbeitssituationen stehen im Mittelpunkt;
- keine offensichtlichen KI-Bilder;
- keine erkennbare Stockfoto-Ästhetik;
- vorhandene Bilddateien werden nicht durch CSS nachgemalt;
- responsive Ausgaben behalten Motiv, Qualität und natürliche Farbwiedergabe.

## Icons

- ausschließlich Font Awesome Free;
- konsistente Größe und optisches Gewicht;
- einheitliche Ausrichtung innerhalb vergleichbarer Komponenten;
- keine zweite Iconbibliothek;
- keine dekorativen Icons ohne funktionalen oder inhaltlichen Nutzen.

## Animation und Interaktion

Animationen sind sehr dezent und unterstützen Orientierung oder Feedback.

- keine fliegenden Elemente;
- keine übertriebenen Hover-Effekte;
- keine Animation nur um der Animation willen;
- bevorzugt `opacity` und kleine `transform`-Bewegungen;
- `prefers-reduced-motion` ist verpflichtend;
- Fokuszustände bleiben deutlich sichtbar.

## Cards, Komponenten und neue Sektionen

Vor jeder Implementierung sind diese Fragen verbindlich:

1. Existiert bereits ein passendes Muster oder Token?
2. Ist die Komponente wirklich erforderlich?
3. Verwendet sie denselben Container, dieselbe Typografie und dieselbe
   Spacing-Skala?
4. Wirkt sie, als wäre sie vom selben Designer wie die Hero-Sektion entworfen?

Wenn die letzte Frage nicht eindeutig mit Ja beantwortet werden kann, wird die
Komponente nicht verwendet.

## Entwicklung und Qualität

- semantisches HTML und flacher DOM;
- zentrale CSS-Variablen statt lokaler Einzelwerte;
- keine Inline-Styles;
- klare, Bricks-kompatible Klassen;
- korrekte Heading-Hierarchie;
- sichtbare Tastatur-Fokuszustände;
- ausreichender Kontrast;
- responsive Prüfung auf Desktop, Tablet und Mobile;
- keine neue Architektur, Abhängigkeit oder Komponente ohne Auftrag.

Änderungen an diesem Design-System benötigen eine ausdrückliche Freigabe.
