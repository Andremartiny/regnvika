---
title: Landeveien – løsningsforslag
tags:
  - rekkefolge/300/600
draft: "true"
---

[[../undervisningsressurser/oppgaver/landeveien|Til oppgaven: Landeveien]].


## Løsninger

## Nyttige observasjoner

Vi kan først merke oss i alle løsninger at avstandene kommer i par $(a, b)$, der $a+b = 27$. Er for eksempel to hytter 2 km unna hverandre, så er de også 25 km unna hverandre hvis man reiser "motsatt" vei.

Videre kan vi se at siden vi har 6 hytter, og hver av de har nøyaktig én (faktisk ett par slik vi observasjonen tilsier), kan vi nå se at det er $\frac{{6\cdot5}}{2} = 15$ mulige avstander vi kan oppnå. 

Med bakgrunn i observasjonene over, ser vi at vi trenger 13 forskjellige avstander av totalt 15 potensielt mulige. Vi må derfor unngå å lage flere hytter som alle har lik avstand fra hverandre. 
## Løsning 1

Plasser første hytte etter 1 km. 
Vi vet at vi må ha noe som er 1km unna plasserer.
Plasser andre hytte etter 2km

Vi har nå avstandene 
- [1] 1
Vi ønsker nå en hytte som ikke ligger 1 km unna de to vi har plassert, men vi trenger fortsatt noe som er 2km unna.
Plasser tredje hytte etter 4 km.

Vi har nå avstandene 
- [1] 1
- [2] 2, 3
Vi mangler 4 km, og vi ønsker ikke at neste hytte skal være 1, 2 eller 3 km unna noen av de som allerede er plassert. Fjerde hytte må 4 km unna tredje. Det betyr:
Plasser fjerde hytte etter 8 km
- [1] 1
- [2] 2 og 3
- [3] 4, 6 og 7
Vi ser vi mangler 5 og plasserer derfor på 13 km, som gir
- [1] 1
- [2] 2 og 3
- [3] 4, 6 og 7
- [4] 5, 9, 11, 12

Nå mangler vi kun avstandene 8, 10 og 13. Det er her en må holde tunga rett i munnen og bruke observasjonen om at avstandene kommer i par. Vi mangler altså avstander (8, 19), (10, 17), (13, 14). La oss fortsette logikken og putte neste 8km lenger enn forrige, altså på 21 km.  Da er det 8 km mellom hytta på 13 og 21, og det er 13 km mellom hytta på 21 og 8. Men har vi noe som er 10 unna? Ja, fordi hytte 21 og 4 er 17 km fra hverandre i en retning, som betyr at de er 10 i den andre retningen.
