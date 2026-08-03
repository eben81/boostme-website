# Boostme Component Library

Diese Datei inventarisiert ausschließlich bereits freigegebene Komponenten.
Neue Komponenten oder Varianten werden nicht vorsorglich erfunden.

Verbindliche Grundlage: `docs/design-system.md`.

## Freigegebene Referenz

### Hero

Status: freigegeben und Qualitätsmaßstab für das gesamte Projekt.

Enthält:

- gemeinsamen 1440px-Außencontainer für Navigation und Hero-Content;
- Editorial Headline und klar begrenzten Textblock;
- Primary und Secondary CTA;
- Trust Bar;
- unabhängige Background-, Overlay- und Founder-Layer;
- responsive Desktop-, Tablet- und Mobile-Komposition;
- reduzierte Motion-Fallbacks.

Die Hero-Komposition darf nicht als allgemeiner Baukasten interpretiert werden.
Neue Sektionen übernehmen ihre Designsprache, nicht automatisch ihre konkrete
Anordnung.

## Freigegebene Buttons

### Primary CTA

- Klasse: `.button.button--primary`;
- Hero-Variante: `.hero__primary-cta`;
- Boostme Green, schwarzer Text, 24px Radius;
- Font-Awesome-Pfeil in einem kreisförmigen Icon rechts;
- dezenter neutraler Schatten und zurückhaltender Hover.

### Secondary CTA

- Klasse: `.button.button--secondary`;
- transparenter Hintergrund und dezente Border;
- 24px Radius;
- dieselbe Pfeilsprache wie der Primary CTA;
- sehr dezenter Hover-Zustand.

Keine weiteren Buttonvarianten sind freigegeben.

## Freigegebene Trust Bar

- Klasse: `.hero__trust`;
- drei kompakte Vertrauenspunkte;
- Font Awesome Free Icons;
- konsistente Grundlinie, Größe und Abstände;
- Grün ausschließlich als Akzent.

## Nicht freigegeben

- zusätzliche Card-Systeme;
- generische SaaS-Widgets;
- Testimonials, Statistiken oder Badges ohne reale Inhalte;
- neue Header-, Footer- oder Section-Komponenten;
- neue Button-, Icon- oder Navigationvarianten.

## Komponenten-Workflow

1. Auftrag und Inhalt bestätigen.
2. Vorhandene Muster und Tokens prüfen.
3. `docs/design-system.md` vollständig anwenden.
4. Semantisches, zugängliches HTML mit flachem DOM erstellen.
5. Nur zentrale Tokens aus `css/variables.css` verwenden.
6. Responsive Verhalten und Reduced Motion prüfen.
7. Erst nach Freigabe die Komponente in dieser Bibliothek dokumentieren.

## Verzeichnisverantwortung

| Verzeichnis | Inhalt |
| --- | --- |
| `components/hero/` | Freigegebene Hero-Notizen und übertragbare Referenzen |
| `components/header/` | Erst nach expliziter Freigabe |
| `components/buttons/` | Freigegebene Buttonmuster |
| `components/cards/` | Erst nach expliziter Freigabe |
| `components/sections/` | Erst nach expliziter Freigabe |
| `components/footer/` | Erst nach expliziter Freigabe |
