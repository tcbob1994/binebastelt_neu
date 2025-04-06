# binebastelt - Schritt-für-Schritt Anleitung für Vivien (Windows) 👋

Hallo Vivien,

herzlich willkommen zu diesem Projekt! 😊 Keine Sorge, wenn Begriffe wie "Git", "npm" oder "Terminal" neu für dich sind. Diese Anleitung führt dich ganz genau durch jeden einzelnen Schritt, damit du die Webseite mit deinem Windows-Computer bearbeiten kannst. Wir machen das zusammen!

**Das Ziel:** Du sollst am Ende in der Lage sein:
1.  Die notwendigen Programme auf deinem Windows-Computer zu installieren.
2.  Den Code der Webseite ("binebastelt") von GitHub herunterzuladen.
3.  Die Webseite lokal auf deinem Computer zum Testen und Bearbeiten zu starten.
4.  Zu verstehen, wo du Änderungen am Code (Texte, Bilder, Design) machen kannst.

Lass uns loslegen!

---

## Teil 1: Die Werkzeuge installieren 🛠️

Bevor wir mit der Webseite selbst anfangen können, brauchen wir ein paar kostenlose Programme auf deinem Computer. Das machen wir nur einmal.

**1. Node.js und npm installieren (Unser Werkzeugkasten)**

*   **Was ist das?** Node.js ist eine Umgebung, die es uns erlaubt, JavaScript-Code außerhalb des Webbrowsers auszuführen. `npm` (Node Package Manager) kommt automatisch mit Node.js und ist ein Werkzeug, um andere Hilfsprogramme und Code-Bibliotheken (genannt "Pakete" oder "dependencies"), die unser Projekt "binebastelt" braucht, einfach zu installieren und zu verwalten.
*   **Anleitung:**
    *   Gehe zur offiziellen Webseite: [https://nodejs.org/](https://nodejs.org/)
    *   Du solltest dort zwei Buttons sehen. Wähle die Version mit **"LTS"** (Long Term Support). Das ist die stabile, empfohlene Version. Klicke darauf, um den Windows Installer herunterzuladen.
    *   Öffne die heruntergeladene `.msi`-Datei und folge den Anweisungen des Installers. Du kannst normalerweise einfach immer auf "Next" oder "Agree" klicken und die Standardeinstellungen beibehalten.
*   **Überprüfung (optional, aber gut zu wissen):**
    *   Öffne das **Terminal** (siehe nächster Punkt, wie das geht).
    *   Gib `node -v` ein und drücke Enter. Es sollte eine Versionsnummer erscheinen (z.B. `v18.17.0`).
    *   Gib `npm -v` ein und drücke Enter. Es sollte ebenfalls eine Versionsnummer erscheinen (z.B. `9.6.7`).

**2. Git installieren (Unsere Kopiermaschine für Code)**

*   **Was ist das?** Git ist ein System, das dabei hilft, Änderungen am Code über Zeit zu verfolgen und (in unserem Fall wichtig) Code von Online-Plattformen wie GitHub herunterzuladen ("klonen").
*   **Anleitung:**
    *   Gehe zur offiziellen Webseite: [https://git-scm.com/downloads](https://git-scm.com/downloads)
    *   Die Seite sollte "Windows" erkennen und einen Download-Link anbieten. Klicke darauf.
    *   Öffne die heruntergeladene `.exe`-Datei und folge den Installationsanweisungen. Auch hier sind die Standardeinstellungen meistens in Ordnung. Es gibt viele Optionen während der Installation, aber du musst nichts Spezielles auswählen, klicke dich einfach mit "Next" durch.
*   **Überprüfung (optional):**
    *   Öffne das **Terminal**.
    *   Gib `git --version` ein und drücke Enter. Es sollte eine Versionsnummer erscheinen (z.B. `git version 2.40.0.windows.1`).

**3. Visual Studio Code (VS Code) installieren (Unser Text-Editor für Code)**

*   **Was ist das?** Ein kostenloser, sehr beliebter Code-Editor von Microsoft. Er hilft uns, den Code übersichtlich darzustellen, Fehler zu finden und vieles mehr. Es ist wie ein sehr schlaues Word für Programmiercode.
*   **Anleitung:**
    *   Gehe zur offiziellen Webseite: [https://code.visualstudio.com/](https://code.visualstudio.com/)
    *   Klicke auf den großen blauen Download-Button für Windows.
    *   Öffne die heruntergeladene `.exe`-Datei und installiere das Programm. Die Standardeinstellungen sind wieder okay. Es ist nützlich, die Option "Zu PATH hinzufügen" (Add to PATH) während der Installation aktiviert zu lassen (ist meist Standard).
*   **Wichtig: Das Terminal (Eingabeaufforderung / PowerShell)** 💻

Wir brauchen für einige Schritte das "Terminal" (unter Windows ist das die "Eingabeaufforderung" oder moderner "PowerShell"). Das ist ein textbasiertes Fenster, in das wir Befehle eintippen.

*   **Öffnen:** Drücke die `Windows-Taste` auf deiner Tastatur, tippe `cmd` (für die Eingabeaufforderung) oder `PowerShell` und drücke Enter. Beide funktionieren für unsere Zwecke.

Du brauchst keine Angst davor zu haben! Wir benutzen nur ein paar wenige, einfache Befehle.

---

## Teil 2: Den Projekt-Code holen ("binebastelt" herunterladen) 📂

Jetzt holen wir uns den eigentlichen Code für die Webseite von GitHub auf deinen Computer.

1.  **Ordner auswählen:** Überlege dir, wo auf deinem Computer du das Projekt speichern möchtest. Gut geeignet ist z.B. dein "Dokumente"-Ordner oder du erstellst direkt auf deinem Laufwerk `C:` einen neuen Ordner namens `Projekte`.
2.  **Terminal öffnen:** Öffne das Terminal (wie oben beschrieben, z.B. PowerShell).
3.  **In den Ordner navigieren:** Wir müssen dem Terminal sagen, dass es in dem Ordner arbeiten soll, den du dir ausgesucht hast. Das geht mit dem Befehl `cd` (change directory).
    *   **Beispiel:** Wenn du einen Ordner "Projekte" direkt auf Laufwerk C: erstellt hast, tippe: `cd C:\Projekte` und drücke Enter.
    *   **Beispiel:** Wenn du den Ordner "Projekte" in deinen Dokumenten erstellt hast, tippe: `cd C:\Users\[DeinBenutzername]\Documents\Projekte` (Ersetze `[DeinBenutzername]` durch deinen Windows-Benutzernamen) und drücke Enter.
    *   *Tipp:* Du kannst oft auch `cd ` (mit Leerzeichen am Ende) tippen und dann den Ordner aus deinem Windows Explorer direkt ins Terminal-Fenster ziehen! Dadurch wird der Pfad automatisch eingefügt. Dann Enter drücken.
4.  **Projekt von GitHub kopieren (Klonen):**
    *   Gehe zur GitHub-Seite dieses Projekts im Webbrowser: [https://github.com/tcbob1994/binebastelt_neu](https://github.com/tcbob1994/binebastelt_neu)
    *   Klicke dort auf den grünen Button, auf dem "<> Code" steht.
    *   Kopiere die URL, die dort unter "HTTPS" angezeigt wird. Sie lautet: `https://github.com/tcbob1994/binebastelt_neu.git` (Du kannst auf das kleine Kopieren-Symbol daneben klicken).
    *   Gehe zurück zum Terminal (das immer noch im richtigen Ordner ist, z.B. `C:\Projekte`).
    *   Tippe den Befehl `git clone ` (achte auf das Leerzeichen nach `clone`) und füge dann die kopierte URL ein (Rechtsklick im Terminal-Fenster fügt oft ein). Drücke Enter.
        ```bash
        # Genau so eingeben oder einfügen:
        git clone https://github.com/tcbob1994/binebastelt_neu.git
        ```
    *   Git lädt nun das Projekt herunter. Es wird ein neuer Ordner mit dem Namen `binebastelt_neu` in deinem ausgewählten Ordner (z.B. `C:\Projekte`) erstellt. Das ist unser Projektordner!

---

## Teil 3: Das Projekt vorbereiten ⚙️

Fast geschafft! Jetzt müssen wir noch die ganzen Hilfsprogramme ("Pakete") installieren, die das Projekt "binebastelt" zum Laufen braucht.

1.  **In den Projektordner wechseln:** Im Terminal müssen wir jetzt in den Ordner `binebastelt_neu` *hinein* wechseln, der gerade erstellt wurde.
    ```bash
    # Wechsle in den neuen Ordner (wenn du z.B. in C:\Projekte warst):
    cd binebastelt_neu
    ```
    *Der Pfad im Terminal sollte jetzt auf `...\binebastelt_neu` enden. Du musst dich also *innerhalb* des `binebastelt_neu`-Ordners befinden.*
2.  **Pakete installieren:** Tippe den folgenden Befehl ein und drücke Enter. Das kann ein paar Minuten dauern, da `npm` nun alle benötigten Teile aus dem Internet herunterlädt (die Liste steht in der Datei `package.json`).
    ```bash
    npm install
    ```
    *Es ist normal, wenn dabei viele Zeilen Text im Terminal erscheinen. Solange am Ende keine großen roten Fehlermeldungen stehen (WARNungen sind oft okay), ist alles gut.*

---

## Teil 4: Die Webseite starten und bearbeiten ✨

Jetzt kommt der spannende Teil!

1.  **Projekt in VS Code öffnen:**
    *   Starte Visual Studio Code (z.B. über das Startmenü).
    *   Gehe auf "Datei" -> "Ordner öffnen...".
    *   Navigiere zu dem Ordner, in den du das Projekt geklont hast (also der Ordner `binebastelt_neu`, z.B. in `C:\Projekte\binebastelt_neu`) und wähle diesen Ordner aus. Klicke auf "Ordner auswählen".
    *   VS Code zeigt dir nun links die Ordnerstruktur und die Dateien des Projekts `binebastelt_neu` an.
2.  **Entwicklungsserver starten:**
    *   Wir brauchen wieder das Terminal. Du kannst das gleiche Terminal-Fenster wie vorher benutzen (stelle sicher, dass du immer noch *im* `binebastelt_neu`-Ordner bist! Der Pfad sollte dort noch stimmen).
    *   *Alternativ und empfohlen:* VS Code hat ein eingebautes Terminal! Du kannst es öffnen über das Menü "Terminal" -> "Neues Terminal". Es öffnet sich dann unten in VS Code und ist automatisch schon im richtigen Projektordner (`binebastelt_neu`). Praktisch! 👍
    *   Tippe im Terminal (egal ob das separate oder das in VS Code) den folgenden Befehl ein und drücke Enter:
        ```bash
        npm run dev
        ```
3.  **Webseite im Browser ansehen:**
    *   Nachdem du `npm run dev` ausgeführt hast, wird im Terminal eine lokale Adresse angezeigt, meistens so etwas wie `http://localhost:5173/`.
    *   Halte die `Strg`-Taste auf deiner Tastatur gedrückt und klicke auf diese Adresse im Terminal. Dein Standard-Webbrowser sollte sich öffnen und die Seite anzeigen.
    *   Alternativ: Kopiere die Adresse (`http://localhost:5173/`) und füge sie manuell in die Adresszeile deines Webbrowsers (Chrome, Firefox, Edge, ...) ein.
    *   Tada! 🎉 Du solltest jetzt die "binebastelt"-Webseite sehen, so wie sie auf deinem Computer läuft.
4.  **Änderungen machen und live sehen:**
    *   Gehe zurück zu VS Code.
    *   Links im Datei-Explorer findest du den Ordner `src`. Hier liegt der meiste Code, den du bearbeiten wirst (Texte, Struktur, etc.).
        *   **Komponenten (`.tsx`-Dateien):** Suche nach Ordnern wie `components`, `pages`, `views` oder direkt im `src`-Ordner nach Dateien, die auf `.tsx` enden (z.B. `App.tsx`, `Header.tsx`, `Footer.tsx`). Das sind die Bausteine der Seite. Sie enthalten eine Mischung aus HTML-ähnlichem Code (das ist JSX) und JavaScript/TypeScript. Hier änderst du Texte oder fügst neue Elemente hinzu.
        *   **Styling (Tailwind CSS):** Das Aussehen (Farben, Abstände, Größen) wird oft direkt im Code durch sogenannte "Klassen" gesteuert. Suche nach `className="..."` in den `.tsx`-Dateien. Beispiel: `<h1 className="text-blue-500 font-bold">Hallo</h1>` macht den Text blau und fett. Du änderst das Aussehen, indem du diese Klassen änderst oder hinzufügst (z.B. `text-red-600` für roten Text). Eine Übersicht über alle möglichen Klassen findest du auf der [Tailwind CSS Webseite](https://tailwindcss.com/docs) (super zum Nachschauen!).
        *   **Globale Stile:** Manchmal gibt es auch eine zentrale CSS-Datei, z.B. `src/index.css`, für grundlegende Stile.
    *   **Probiere es aus:** Öffne eine `.tsx`-Datei (z.B. `src/App.tsx` oder eine Datei in `src/components/`), ändere einen sichtbaren Text (z.B. eine Überschrift) und speichere die Datei (Tastenkombination `Strg + S`).
    *   **Magie! ✨** Schau zurück in deinen Webbrowser (auf die `localhost:5173` Seite). Die Seite sollte sich automatisch aktualisiert haben und deine Änderung anzeigen! Das nennt man "Hot Module Replacement" und macht das Bearbeiten sehr angenehm.
5.  **Entwicklungsserver stoppen:**
    *   Wenn du mit dem Bearbeiten für den Moment fertig bist, gehe zurück zum Terminal-Fenster (oder dem Terminal-Tab in VS Code), in dem `npm run dev` noch läuft.
    *   Drücke die Tastenkombination `Strg + C` (Control-Taste und C gleichzeitig). Manchmal musst du noch mit `J` (für Ja) oder `Y` (für Yes) bestätigen und Enter drücken, wenn gefragt wird, ob der Batchauftrag beendet werden soll.
    *   Der Server stoppt, und die Webseite unter `localhost:5173` ist nicht mehr erreichbar, bis du `npm run dev` erneut startest.

---

## Teil 5 (Optional): Code-Qualität prüfen 🧐

Dieses Projekt verwendet ein Werkzeug namens ESLint, um sicherzustellen, dass der Code-Stil einheitlich ist und um häufige Fehler zu vermeiden.

*   Wenn du in VS Code arbeitest, zeigt es dir wahrscheinlich schon während des Tippens an, wenn etwas nicht den Regeln entspricht (z.B. durch rote oder gelbe Unterkringelungen). Das ist sehr hilfreich!
*   Du kannst auch manuell alle Dateien prüfen lassen. Öffne dazu wieder das Terminal (im `binebastelt_neu`-Ordner) und führe aus:
    ```bash
    npm run lint
    ```
*   Das Programm listet dann alle gefundenen Probleme auf. Oft musst du hier aber nichts machen, solange die Seite funktioniert.

---

## Teil 6 (Optional für später): Die fertige Webseite bauen 📦

Wenn Änderungen fertig sind und die Webseite "live" gehen soll (also auf der echten `binebastelt.de` Adresse aktualisiert werden soll), muss man eine optimierte Version der Seite erstellen.

*   Öffne das Terminal (im `binebastelt_neu`-Ordner).
*   Führe den Befehl aus:
    ```bash
    npm run build
    ```
*   Dieser Befehl erstellt einen neuen Ordner namens `dist`. Dieser Ordner enthält die "fertigen" Dateien (HTML, CSS, JS), die man dann auf einen Webserver hochladen kann. Das ist aber ein späterer Schritt, den wir dann besprechen können, wie genau das für `binebastelt.de` funktioniert.

---

Puh, das war viel auf einmal! Aber keine Sorge, die meiste Zeit wirst du nur folgendes tun:

1.  Projekt `binebastelt_neu` in VS Code öffnen.
2.  Terminal in VS Code öffnen (`Terminal` -> `Neues Terminal`).
3.  `npm run dev` starten.
4.  Dateien im `src`-Ordner bearbeiten und mit `Strg + S` speichern.
5.  Änderungen im Browser auf `localhost:5173` anschauen.
6.  Wenn fertig: `Strg + C` im Terminal.

Nimm dir Zeit, probiere die Schritte aus. Wenn irgendetwas nicht klappt oder unklar ist, frag mich einfach! Es gibt keine dummen Fragen. Viel Spaß beim Ausprobieren und Basteln an der Webseite! 😊
