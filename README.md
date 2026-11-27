# kukuru

Website der **kukuru House-Eventreihe aus Moers**. Die statische Website informiert über
kommende Veranstaltungen und zeigt Impressionen vergangener Events.

## Technischer Überblick

Das Projekt verwendet bewusst einen schlanken, statischen Aufbau:

- HTML5
- JavaScript ohne Framework
- Tailwind CSS 4 mit Tailwind CLI
- eigenes CSS im zentralen Tailwind-Einstiegspunkt
- Prettier für die einheitliche Codeformatierung
- ESLint für JavaScript
- Stylelint für CSS
- HTMLHint für HTML

## Voraussetzungen

- Node.js 22.13 oder neuer
- npm 11 oder neuer empfohlen

## Installation

Repository klonen und die lokalen Entwicklungsabhängigkeiten installieren:

```bash
npm install
```

Anschließend das auslieferbare Stylesheet erzeugen:

```bash
npm run build
```

## Entwicklung

### Tailwind im Watch-Modus

Während der CSS-Entwicklung kann Tailwind Änderungen automatisch neu kompilieren:

```bash
npm run dev:css
```

Dabei wird das zentrale Quell-Stylesheet `style.css` nach `site.css` kompiliert.

### Lokale Vorschau

Die Website benötigt keinen Anwendungsserver. Sie kann beispielsweise mit dem in Python
enthaltenen HTTP-Server lokal aufgerufen werden:

```bash
python3 -m http.server 8000
```

Danach ist die Seite unter <http://localhost:8000> erreichbar.

## npm-Befehle

| Befehl                 | Beschreibung                                              |
| ---------------------- | --------------------------------------------------------- |
| `npm run build`        | Erzeugt das auslieferbare Tailwind-Stylesheet             |
| `npm run build:css`    | Führt ausschließlich den CSS-Build aus                    |
| `npm run dev:css`      | Startet den Tailwind-Build im Watch-Modus                 |
| `npm run format`       | Formatiert alle unterstützten Dateien mit Prettier        |
| `npm run format:check` | Prüft die Formatierung, ohne Dateien zu verändern         |
| `npm run lint`         | Führt ESLint, Stylelint, HTMLHint und den Formatcheck aus |
| `npm run lint:js`      | Prüft JavaScript mit ESLint                               |
| `npm run lint:css`     | Prüft CSS mit Stylelint                                   |
| `npm run lint:html`    | Prüft HTML mit HTMLHint                                   |

Vor einem Commit empfiehlt sich:

```bash
npm run lint
npm run build
```

## Stylesheets und Tailwind CSS

`style.css` ist die zentrale CSS-Quelldatei. Sie enthält:

- den Import von Tailwind CSS,
- die von Tailwind zu analysierenden Quelldateien,
- die projektspezifischen Styles.

Der Build erzeugt daraus `site.css`. Diese Datei wird von `index.html` eingebunden und muss für
die statische Bereitstellung mit ausgeliefert werden. `site.css` wird nicht direkt bearbeitet, da
Änderungen beim nächsten Build überschrieben werden.

Die Prettier-Konfiguration verweist über `tailwindStylesheet` ebenfalls auf `style.css`. Dadurch
verwendet die automatische Sortierung von Tailwind-Klassen dieselbe Konfiguration wie der
CSS-Build.

## Codequalität

### Prettier

Prettier ist der zentrale Formatter für HTML, CSS, JavaScript, JSON und Markdown. Die
Konfiguration befindet sich in `.prettierrc.json`.

### ESLint

ESLint verwendet die aktuelle Flat Config aus `eslint.config.mjs`. `eslint-config-prettier`
verhindert Konflikte zwischen Linting und Formatierung.

### Stylelint

Stylelint basiert auf `stylelint-config-standard`. Tailwind-spezifische Direktiven werden gezielt
zugelassen, während ungültige Regeln, unbekannte Eigenschaften und doppelte Deklarationen
weiterhin geprüft werden.

### HTMLHint

HTMLHint prüft unter anderem:

- gültige HTML-Syntax und HTML5-Doctypes,
- eindeutige IDs,
- geschlossene Tags,
- Alt-Attribute für Bilder,
- korrekte und eindeutige Attribute,
- grundlegende Dokumentstruktur.

## VS Code

Das Repository enthält Workspace-Einstellungen und Erweiterungsempfehlungen unter `.vscode/`.
Empfohlen werden:

- Prettier
- ESLint
- Stylelint
- HTMLHint
- Tailwind CSS IntelliSense

Nach dem Öffnen des Projekts können die empfohlenen Erweiterungen über den VS-Code-Dialog
installiert werden. Formatierung und verfügbare Autofixes werden anschließend beim Speichern
ausgeführt.

## Projektstruktur

```text
.
├── .vscode/              # Workspace-Einstellungen und Erweiterungen
├── assets/               # Bilder, Videos, Fonts und weitere Medien
├── index.html            # Einstiegspunkt der Website
├── script.js             # Interaktionen und Dialoglogik
├── style.css             # Zentrales Tailwind- und CSS-Quellstylesheet
├── site.css              # Generierte, auslieferbare CSS-Datei
├── eslint.config.mjs     # ESLint-Konfiguration
├── stylelint.config.mjs  # Stylelint-Konfiguration
└── package.json          # Abhängigkeiten und npm-Befehle
```

## Bereitstellung

Die Website kann auf jedem statischen Webhosting bereitgestellt werden. Vor der Veröffentlichung
muss der aktuelle CSS-Build erzeugt werden:

```bash
npm install
npm run lint
npm run build
```

Danach werden `index.html`, `script.js`, `site.css`, `.nojekyll` und der Ordner `assets/`
veröffentlicht. Das Repository ist bereits für eine statische Bereitstellung, beispielsweise über
GitHub Pages, geeignet.
