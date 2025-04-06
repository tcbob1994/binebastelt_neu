# binebastelt - Schritt-für-Schritt Anleitung für Vivien 👋

Hallo Vivien,

herzlich willkommen zu diesem Projekt! 😊 Keine Sorge, wenn Begriffe wie "Git", "npm" oder "Terminal" neu für dich sind. Diese Anleitung führt dich ganz genau durch jeden einzelnen Schritt, damit du die Webseite bearbeiten kannst. Wir machen das zusammen!

**Das Ziel:** Du sollst am Ende in der Lage sein:
1.  Die notwendigen Programme auf deinem Computer zu installieren.
2.  Den Code der Webseite von GitHub herunterzuladen.
3.  Die Webseite lokal auf deinem Computer zum Testen und Bearbeiten zu starten.
4.  Zu verstehen, wo du Änderungen am Code (Texte, Bilder, Design) machen kannst.

Lass uns loslegen!

---

## Teil 1: Die Werkzeuge installieren 🛠️

Bevor wir mit der Webseite selbst anfangen können, brauchen wir ein paar kostenlose Programme auf deinem Computer. Das machen wir nur einmal.

**1. Node.js und npm installieren (Unser Werkzeugkasten)**

*   **Was ist das?** Node.js ist eine Umgebung, die es uns erlaubt, JavaScript-Code außerhalb des Webbrowsers auszuführen. `npm` (Node Package Manager) kommt automatisch mit Node.js und ist ein Werkzeug, um andere Hilfsprogramme und Code-Bibliotheken (genannt "Pakete" oder "dependencies"), die unser Projekt braucht, einfach zu installieren und zu verwalten.
*   **Anleitung:**
    *   Gehe zur offiziellen Webseite: [https://nodejs.org/](https://nodejs.org/)
    *   Du solltest dort zwei Buttons sehen. Wähle die Version mit **"LTS"** (Long Term Support). Das ist die stabile, empfohlene Version.
    *   Lade die Installationsdatei für dein Betriebssystem (Windows, Mac) herunter.
    *   Öffne die heruntergeladene Datei und folge den Anweisungen des Installers. Du kannst normalerweise einfach immer auf "Weiter" oder "Agree" klicken.
*   **Überprüfung (optional, aber gut zu wissen):**
    *   Öffne das **Terminal** (siehe nächster Punkt, wie das geht).
    *   Gib `node -v` ein und drücke Enter. Es sollte eine Versionsnummer erscheinen (z.B. `v18.17.0`).
    *   Gib `npm -v` ein und drücke Enter. Es sollte ebenfalls eine Versionsnummer erscheinen (z.B. `9.6.7`).

**2. Git installieren (Unsere Kopiermaschine für Code)**

*   **Was ist das?** Git ist ein System, das dabei hilft, Änderungen am Code über Zeit zu verfolgen und (in unserem Fall wichtig) Code von Online-Plattformen wie GitHub herunterzuladen ("klonen").
*   **Anleitung:**
    *   Gehe zur offiziellen Webseite: [https://git-scm.com/downloads](https://git-scm.com/downloads)
    *   Die Seite sollte dein Betriebssystem erkennen und den passenden Download anbieten. Klicke darauf.
    *   Öffne die heruntergeladene Datei und folge den Installationsanweisungen. Auch hier sind die Standardeinstellungen meistens in Ordnung. Es gibt viele Optionen, aber du musst nichts Spezielles auswählen, klicke dich einfach durch.
*   **Überprüfung (optional):**
    *   Öffne das **Terminal**.
    *   Gib `git --version` ein und drücke Enter. Es sollte eine Versionsnummer erscheinen (z.B. `git version 2.40.0`).

**3. Visual Studio Code (VS Code) installieren (Unser Text-Editor für Code)**

*   **Was ist das?** Ein kostenloser, sehr beliebter Code-Editor von Microsoft. Er hilft uns, den Code übersichtlich darzustellen, Fehler zu finden und vieles mehr. Es ist wie ein sehr schlaues Word für Programmiercode.
*   **Anleitung:**
    *   Gehe zur offiziellen Webseite: [https://code.visualstudio.com/](https://code.visualstudio.com/)
    *   Klicke auf den großen Download-Button (er sollte dein Betriebssystem erkennen).
    *   Öffne die heruntergeladene Datei und installiere das Programm. Die Standardeinstellungen sind wieder okay.

**Wichtig: Das Terminal (Kommandozeile)** 💻

Wir brauchen für einige Schritte das "Terminal" (manchmal auch "Eingabeaufforderung", "Command Prompt" oder "Shell" genannt). Das ist ein textbasiertes Fenster, in das wir Befehle eintippen.

*   **Öffnen unter Windows:** Drücke die `Windows-Taste`, tippe `cmd` oder `PowerShell` und drücke Enter. (PowerShell ist moderner).
*   **Öffnen unter Mac:** Öffne den Ordner "Programme" -> "Dienstprogramme" -> "Terminal". Oder drücke `Cmd + Leertaste`, tippe `Terminal` und drücke Enter.
*   **Öffnen unter Linux:** Meistens `Strg + Alt + T` oder über das Anwendungsmenü suchen.

Du brauchst keine Angst davor zu haben! Wir benutzen nur ein paar wenige, einfache Befehle.

---

## Teil 2: Den Projekt-Code holen 📂

Jetzt holen wir uns den eigentlichen Code für die Webseite von GitHub auf deinen Computer.

1.  **Ordner auswählen:** Überlege dir, wo auf deinem Computer du das Projekt speichern möchtest (z.B. in deinem "Dokumente"-Ordner oder in einem speziellen "Projekte"-Ordner).
2.  **Terminal öffnen:** Öffne das Terminal (wie oben beschrieben).
3.  **In den Ordner navigieren:** Wir müssen dem Terminal sagen, dass es in dem Ordner arbeiten soll, den du dir ausgesucht hast. Das geht mit dem Befehl `cd` (change directory).
    *   **Beispiel Windows:** Wenn du einen Ordner "Projekte" direkt auf Laufwerk C: hast, tippe: `cd C:\Projekte` und drücke Enter. Wenn er in deinen Dokumenten liegt: `cd C:\Users\[DeinBenutzername]\Documents\Projekte` (Ersetze `[DeinBenutzername]`).
    *   **Beispiel Mac:** Wenn du einen Ordner "Projekte" in deinem Benutzerverzeichnis hast, tippe: `cd ~/Projekte` und drücke Enter. Wenn er in Dokumenten liegt: `cd ~/Documents/Projekte`.
    *   *Tipp:* Du kannst oft auch `cd ` (mit Leerzeichen am Ende) tippen und dann den Ordner aus deinem Datei-Explorer direkt ins Terminal-Fenster ziehen! Dann Enter drücken.
4.  **Projekt von GitHub kopieren (Klonen):**
    *   Gehe zur GitHub-Seite dieses Projekts im Webbrowser.
    *   Klicke auf den grünen Button, auf dem "<> Code" steht.
    *   Kopiere die URL, die dort unter "HTTPS" angezeigt wird. Sie sieht etwa so aus: `https://github.com/Benutzername/Projektname.git`.
    *   Gehe zurück zum Terminal (das immer noch im richtigen Ordner ist).
    *   Tippe den Befehl `git clone ` (achte auf das Leerzeichen nach `clone`) und füge dann die kopierte URL ein. Drücke Enter.
        ```bash
        # Beispiel:
        git clone https://github.com/Benutzername/Projektname.git
        ```
    *   Git lädt nun das Projekt herunter. Es wird ein neuer Ordner mit dem Namen des Projekts (z.B. `Projektname`) in deinem ausgewählten Ordner erstellt.

---

## Teil 3: Das Projekt vorbereiten ⚙️

Fast geschafft! Jetzt müssen wir noch die ganzen Hilfsprogramme ("Pakete") installieren, die das Projekt zum Laufen braucht.

1.  **In den Projektordner wechseln:** Im Terminal müssen wir jetzt in den Ordner *hinein* wechseln, der gerade durch `git clone` erstellt wurde.
    ```bash
    # Ersetze [projekt-ordner-name] durch den tatsächlichen Namen des Ordners
    cd [projekt-ordner-name]
    ```
    *Du musst dich also im Terminal jetzt *innerhalb* des Projektordners befinden.*
2.  **Pakete installieren:** Tippe den folgenden Befehl ein und drücke Enter. Das kann ein paar Minuten dauern, da `npm` nun alle benötigten Teile aus dem Internet herunterlädt (die Liste steht in der Datei `package.json`).
    ```bash
    npm install
    ```
    *Es ist normal, wenn dabei viele Zeilen Text im Terminal erscheinen. Solange am Ende keine großen roten Fehlermeldungen stehen (WARNungen sind oft okay), ist alles gut.*

---

## Teil 4: Die Webseite starten und bearbeiten ✨

Jetzt kommt der spannende Teil!

1.  **Projekt in VS Code öffnen:**
    *   Starte Visual Studio Code.
    *   Gehe auf "Datei" (oder "File") -> "Ordner öffnen..." (oder "Open Folder...").
    *   Navigiere zu dem Ordner, in den du das Projekt geklont hast (z.B. `C:\Projekte\[projekt-ordner-name]` oder `~/Projekte/[projekt-ordner-name]`) und wähle ihn aus. Klicke auf "Ordner auswählen".
    *   VS Code zeigt dir nun links die Ordnerstruktur und die Dateien des Projekts an.
2.  **Entwicklungsserver starten:**
    *   Wir brauchen wieder das Terminal. Du kannst das gleiche Terminal-Fenster wie vorher benutzen (stelle sicher, dass du immer noch *im* Projektordner bist!).
    *   *Alternativ:* VS Code hat ein eingebautes Terminal! Du kannst es öffnen über das Menü "Terminal" -> "Neues Terminal" (oder "New Terminal"). Es öffnet sich dann unten in VS Code und ist automatisch schon im richtigen Projektordner. Praktisch! 👍
    *   Tippe im Terminal (egal ob das separate oder das in VS Code) den folgenden Befehl ein und drücke Enter:
        ```bash
        npm run dev
        ```
3.  **Webseite im Browser ansehen:**
    *   Nachdem du `npm run dev` ausgeführt hast, wird im Terminal eine lokale Adresse angezeigt, meistens so etwas wie `http://localhost:5173/`.
    *   Halte die `Strg`-Taste (Windows/Linux) oder `Cmd`-Taste (Mac) gedrückt und klicke auf diese Adresse im Terminal, oder kopiere sie und füge sie in die Adresszeile deines Webbrowsers ein.
    *   Tada! 🎉 Du solltest jetzt die Webseite sehen.
4.  **Änderungen machen und live sehen:**
    *   Gehe zurück zu VS Code.
    *   Links im Datei-Explorer findest du den Ordner `src`. Hier liegt der meiste Code, den du bearbeiten wirst.
        *   **Komponenten (`.tsx`-Dateien):** Suche nach Ordnern wie `components`, `pages`, `views` oder direkt im `src`-Ordner nach Dateien, die auf `.tsx` enden. Das sind die Bausteine der Seite (z.B. ein Header, ein Button, ein Textabschnitt). Sie enthalten eine Mischung aus HTML-ähnlichem Code (das ist JSX) und JavaScript/TypeScript.
        *   **Styling (Tailwind CSS):** Das Aussehen (Farben, Abstände, Größen) wird oft direkt im Code durch sogenannte "Klassen" gesteuert. Suche nach `className="..."` in den `.tsx`-Dateien. Beispiel: `<h1 className="text-blue-500 font-bold">Hallo</h1>` macht den Text blau und fett. Du änderst das Aussehen, indem du diese Klassen änderst oder hinzufügst. Eine Übersicht über alle möglichen Klassen findest du auf der [Tailwind CSS Webseite](https://tailwindcss.com/docs).
        *   **Globale Stile:** Manchmal gibt es auch eine zentrale CSS-Datei, z.B. `src/index.css`, für grundlegende Stile.
    *   **Probiere es aus:** Öffne eine `.tsx`-Datei (z.B. in `src/App.tsx` oder einer Komponente), ändere einen Text und speichere die Datei (`Strg+S` oder `Cmd+S`).
    *   **Magie! ✨** Schau zurück in deinen Webbrowser. Die Seite sollte sich automatisch aktualisiert haben und deine Änderung anzeigen! Das nennt man "Hot Module Replacement" und macht das Entwickeln sehr angenehm.
5.  **Entwicklungsserver stoppen:**
    *   Wenn du mit dem Bearbeiten für den Moment fertig bist, gehe zurück zum Terminal-Fenster (oder dem Terminal-Tab in VS Code), in dem `npm run dev` noch läuft.
    *   Drücke die Tastenkombination `Strg + C` (Control-Taste und C gleichzeitig). Manchmal musst du das zweimal machen oder mit `y` bestätigen.
    *   Der Server stoppt, und die Webseite unter `localhost:xxxx` ist nicht mehr erreichbar, bis du `npm run dev` erneut startest.

---

## Teil 5 (Optional): Code-Qualität prüfen 🧐

Dieses Projekt verwendet ein Werkzeug namens ESLint, um sicherzustellen, dass der Code-Stil einheitlich ist und um häufige Fehler zu vermeiden.

*   Wenn du in VS Code arbeitest, zeigt es dir wahrscheinlich schon während des Tippens an, wenn etwas nicht den Regeln entspricht (z.B. durch rote oder gelbe Unterkringelungen).
*   Du kannst auch manuell alle Dateien prüfen lassen. Öffne dazu wieder das Terminal (im Projektordner) und führe aus:
    ```bash
    npm run lint
    ```
*   Das Programm listet dann alle gefundenen Probleme auf.

---

## Teil 6 (Optional für später): Die fertige Webseite bauen 📦

Wenn Änderungen fertig sind und die Webseite "live" gehen soll (also auf einem echten Server im Internet), muss man eine optimierte Version der Seite erstellen.

*   Öffne das Terminal (im Projektordner).
*   Führe den Befehl aus:
    ```bash
    npm run build
    ```
*   Dieser Befehl erstellt einen neuen Ordner namens `dist`. Dieser Ordner enthält die "fertigen" Dateien (HTML, CSS, JS), die man dann auf einen Webserver hochladen kann. Das ist aber ein späterer Schritt, den wir dann besprechen können.

---

Puh, das war viel auf einmal! Aber keine Sorge, die meiste Zeit wirst du nur folgendes tun:

1.  Projekt in VS Code öffnen.
2.  Terminal in VS Code öffnen (`Terminal` -> `Neues Terminal`).
3.  `npm run dev` starten.
4.  Dateien im `src`-Ordner bearbeiten und speichern.
5.  Änderungen im Browser anschauen.
6.  Wenn fertig: `Strg + C` im Terminal.

Nimm dir Zeit, probiere die Schritte aus. Wenn irgendetwas nicht klappt oder unklar ist, frag mich einfach! Es gibt keine dummen Fragen. Viel Spaß beim Ausprobieren und Bearbeiten! 😊
