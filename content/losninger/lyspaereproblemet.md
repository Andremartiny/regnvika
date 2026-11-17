---
title: Lyspæreproblemet – løsningsforslag
order: "300/300"
draft: "true"
---

[[../undervisningsressurser/oppgaver/lyspaereproblemet|Til oppgaven: Lyspæreproblemet]].

## Spørsmål og løsninger

### Hvilke lys vil ende på og av?

> **Observasjon 1**
> Det er lysene som slås på et oddetall antall ganger som vil være påslått til slutt.
> Dette er det samme som å si at tallet har et oddetall antall faktorer.

Når man ser på dette spørsmål vil man se at det er kvadrattallene som er de eneste som blir stående på.

#### Hvorfor?

##### Kombinatorikk

Ser vi på et tall $k$ vet vi at det kan skrives som et produkt av primtallsfaktorene. Det vil si at $k = p_{1}^{k_{1}}\cdot p_{2}^{k_{2}}\dots p_{n}^{k_{n}}$. Antall faktorer kan nå finnes ved å se at primfaktor $p_{1}$ kan brukes fra 0 til og med $k_{1}$ ganger, tilsvarende kan $p_{2}$ brukes fra 0 til og med $k_{2}$ og så videre. Dermed har vi $k_{1}+1$ valg for første primfaktor og så $k_{2}+1$ valg for andre primfaktor og så videre. Dette gir totalt $(k_{1}+1)\cdot (k_{2}+1) \cdots (k_{n}+1)$ antall faktorer. Den eneste måten et rom vil ha lys som står på er hvis bryteren trykkes på et oddetall antall ganger, dermed er det kun når produktet over blir et oddetall at lysene står på. Vi vet at et produkt blir oddetall kun når alle faktorene er oddetall. Det må bety at $k_{i}$ må være partall for alle $i \in \{ 1,2,\ldots n \}$. Noe som er det samme som å si at tallet er et kvadrattall.

##### Intuitiv forklaring

Faktorer kommer alltid i par. Ta for eksempel $18$. Tallet $3$ er for eksempel en faktor fordi $3\cdot 6 = 18$. Dermed ser vi at $3$ parres med $6$. Vi kan dermed skrive opp faktorene til 18 i par, slik $(1, 18), (2, 9), (3, 6)$. Vi ser nå at vi har 3 par, som alle inneholder unike faktorer. Dermed vil rom $18$ ikke være påslått etter alle har gått gjennom 

Kvadrattallene er spesielle, fordi det finnes en faktor som ikke parres med en annen faktor. Den parres med seg selv. Ta for eksempel $36$. Der har vi at faktoren $6$ gir opphav til sin parfaktor $6$. Dermed får vi nå parfaktorene $(1,36), (2, 18), (3, 12), (4, 9), (6, 6)$. Som vi ser er det ikke lenger flere par som _alle_ inneholder unike faktorer. Det finnes nøyaktig ett par som inneholder samme faktor to ganger. Dermed ser vi at dette har et oddetalls antall faktorer. Ved å tenke gjennom dette eksempelet nøye, ser vi at dette alltid vil være tilfellet for kvadrattallene.
