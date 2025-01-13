Klausur/Test 2024/2025 Nr. 2
Erstellen Sie aus diesem Template ein eigenes Projekt namens K2_20241209_Nachname_Vorname bzw. T2_20241209_Nachname_Vorname. Am Ende müssen Sie Ihr Projekt commiten und pushen. Senden Sie mir den Link in Teams zu.

Aufgabe 1
Auf der Seite AGB.ejs sind vier Fehler eingebaut. Die Seite lässt sich aktuell nicht mehr starten. Finden und korrigieren Sie die Fehler. Schreiben Sie zu jedem Fehler eine Kommentarzeile, in der Sie schreiben, was Sie korrigiert haben.

Aufgabe 2
Die Seite "profil" lässt sich nicht öffnen. Korrigieren Sie das.

Aufgabe 3
Programmieren Sie die bestehende Seite "Kredit beantragen" nach Vorgabe aus. Es wird angenommmen, dass der Kunde den Kredit am Ende der Laufzeit komplett mit allen Zinsen und Zinseszinsen zurückzahlt:

Auf der Seite soll ein Formular angelegt werden, das den gewünschten Kreditbetrag, den gewünschten Zinssatz und die gewünschte Laufzeit entgegennimmt.
Der Kunde soll programmseitig daran gehindert werden, negative Werte einzugeben. Klicken Sie diesen Link (https://developer.mozilla.org/de/docs/Web/HTML/Element/input/number), um herauszufinden, wie Sie das Input programmieren müssen.
Wenn der Kunde den "Kredit berechnen"-Button klickt, dann wird der Rückzahlungsbetrag am Ende der gewünschten Laufzeit berechnet.
Der Rückzahlungsbetrag wird auf dem Formular ausgegeben.
Loggen Sie Ihre Berechungen auch auf der Console.
Aufgabe 4 (Nur Klausurschreiber)
Auf der Seite Hilfe wird Ihnen der Kundenberater Pit Kiff angezeigt. Pit Kiff ist im HTML-Text der Seite eingebettet. Bauen Sie die Seite wie folgt um:

Erstellen Sie eine Klassendefinition für Kunde und Kundenberater in Zeile .
Überlegen Sie sich geeignete Eigenschaften für Kunde und Kundenberater.
Deklarieren, Instanziieren und Initialisieren ein Kundenobjekt und ein Kundenberaterobjekt.
Geben Sie die Werte Ihres Kundenberaterobjekts auf der Seite aus, indem Sie entsprechende Anpassungen in der app.get und der ejs-Datei vornehmen. Wenn sich das Objekt ändert, muss sich natürlich die Ausgabe auf Ihrer Seite ändern.
Erweitern Sie das Projekt um einen zweiten Kundenberater. Wenn der Kunde eine ID zwischen 1 und 10 hat, soll ihm der erste Kundenberater angezeigt werden. Kunden mit höherer ID bekommen den zweiten Kundenberater zugeordnet.
Aufgabe 5 (Nur Klausurschreiber)
Erweitern Sie das Kundenobjekt um die Eigenschaften Benutzername und Kennwort.
Initialisieren Sie Eigenschaftswerte.
Erstellen Sie die Loginformular, indem Benutername und Kennwort abgefragt werden.
Wenn Kennwort und Benutzername korrekt sind, dann soll auf der Login-Seite angezeigt werden "Sie wurden eingeloggt", ansonsten soll auf der Seite stehen: "Versuchen Sie es erneut"