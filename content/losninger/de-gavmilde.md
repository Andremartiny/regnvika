---
draft: "true"
tags:
  - rekkefolge/200/300
title: De gavmilde - løsningsforslag
---


[[../undervisningsressurser/oppgaver/de-gavmilde|Til oppgaven]]
## Løsninger på originale problemet

### Løsning 1

Vi kan sette det opp som, $x$ er antall kroner Espen har, $y$ er antall kroner Pål har og $z$ er antall kroner Per har. Følger vi prosessen ser det slik ut

$$
\begin{array}{|l|l|l|}
\hline
x        & y             & z                    \\ \hline
x-y-z    & 2y            & 2z                   \\ \hline
2x-2y-2z & 2y-(x-y-z)-2z & 4z                   \\ \hline
4x-4y-4z & 6y-2x-2z      & 4z-2(x-y-z)-(3y-x-z) \\ \hline
\end{array}
$$

Eller at $4(x-y-z) = 6y-2x-2z = 7z-x-y$. Velger vi ut de to siste uttrykkene får vi $7y-9z = x$. Setter vi inn i de to første får vi 

$$
\begin{align} 
  4(7y-9z)-4y-4z & = 6y-2(7y-9z)-2z  \\
 28y-36z-4y-4z & =6y-14y+18z-2z  \\
 24y-40z  &= -8y+16z  \\
32y &=56 z \\
y &= \frac{7}{4}z
\end{align} 
$$

Så hvis $z = 4$ er $y = 7$, da blir $x = 7\cdot 7 - 9\cdot 4 = 49-36 = 13$.

En løsning er altså 4, 7 og 13, som også den minste heltallige løsningen.

### Løsning 2

Vi bruker problemløsningsstrategien *å jobbe baklengs*. Vi vet de alle har like mye til slutt. Altså 

$$
\begin{array}{|l|l|l|}
\hline
x        & y             & z                    \\ \hline
1    &1           & 1                   \\ \hline
\end{array}
$$

Vi vet da at Per doblet de to andre sist, så $z$ skal ha halvparten av de to andre tilbake, når vi går baklengs. Det gir

$$
\begin{array}{|l|l|l|}
\hline
x        & y             & z                    \\ \hline
1    &1           & 1                   \\ \hline 
\frac{1}{2} & \frac{1}{2} & 2 \\ \hline
\end{array}
$$
Fortsetter vi denne prosessen baklengs ser tabellen slik ut

$$
\begin{array}{|l|l|l|}
\hline
x        & y             & z                    \\ \hline
1    & 1           & 1                   \\ \hline
\frac{1}{2} & \frac{1}{2} & 2                   \\ \hline
\frac{1}{4} & \frac{1}{2}+\frac{1}{4}+1=\frac{7}{4}      & 1 \\ \hline
\frac{1}{4}+\frac{7}{8}+ \frac{1}{2} & \frac{7}{8}      & \frac{1}{2} \\ \hline
\end{array}
$$

Får vi alt på felles nevner får vi $\frac{13}{8}$, $\frac{7}{8}$ og $\frac{4}{8}$. Ganger vi gjennom med 8 får vi løsningen 4, 7, 13.

## Utvidelser 4, 5 og 6 personer

Historien over var selvfølgelig ikke sann, fordi stebroren Ask var også med på turen. Den sanne historien var selvfølgelig at Espen doblet pengene til Per, Pål og Ask. Per doblet deretter pengene til Espen, Pål og Ask. Per doblet deretter pengene til Espen, Pål og Ask. Til slutt doblet Ask pengene til Espen, Per og Pål. Når de var ferdig hadde alle like mye penger. 

### 4 personer

Da vi jobbet baklengs med problemet sist, så vi at halverte tre ganger og endte med åttedeler. Vi begynner derfor med $\frac{16}{16}$ deler hos alle nå (som vi kan gjette fordi vi regner med at vi gjør en ekstra halvering). Faktisk, kan vi gjette at en løsning er at alle ender med 16 hver. Det gir

$$
\begin{array}{|l|l|l|l|}
\hline
x        & y             & z                &v    \\ \hline
{16}   &{16}         & {16}           & {16}     \\ \hline
8 & 8 & 8         & 40        \\ \hline
4 & 4      & 36 & 20\\ \hline
2 & 34 & 18  & 10 \\ \hline  
33 & 17 & 9 & 5 \\ \hline
\end{array}
$$

### 5 personer

Vi gjetter nå at alle kan ha endt med 32 hver. Jobber vi baklengs får vi

$$
\begin{array}{|l|l|l|l|}
\hline
x        & y             & z                &v  & w  \\ \hline
32   & 32        & 32         &32 & 32  \\ \hline
16 & 16 & 16        & 16 & 96        \\ \hline  
8 & 8 & 8 & 88 & 48\\ \hline
4 & 4      & 84 & 44 & 24\\ \hline
2 & 82 & 42  & 22 & 12  \\ \hline  
81 & 41 & 21 & 11  & 6\\ \hline
\end{array}
$$

### 6 personer

Mønsteret begynner nok nå å bli ganske tydelig, men vi tar siste og begynner med 64 hver.

Vi gjetter nå at alle kan ha endt med 32 hver. Jobber vi baklengs får vi

$$
\begin{array}{|l|l|l|l|l|l|}
\hline
x        & y             & z                &v  & w & \alpha \\ \hline
64 & 64 & 64 & 64 & 64 & 64  \\ \hline
32 &32 &32 &32 &32 & 224 \\ \hline
16 & 16 & 16        & 16 &      208 & 112  \\ \hline  
8 & 8 & 8 & 200 & 104 & 56\\ \hline
4 & 4      & 196 & 100 & 52 & 28\\ \hline
2 & 194 & 98  & 50 & 26  & 14\\ \hline  
193 & 97 & 49 & 25  & 13 & 7\\ \hline
\end{array}
$$

### Generell løsning

Vi har nå løsningene

- $4, 7, 13$
- $5, 9, 17, 33$
- $6, 11,21,41,81$
- $7, 13, 25, 49, 98, 195$

Mønsteret føles nå ganske tydelig og vi kan gjette at det fortsetter

- $8, 15, 29, 57, 113, 225, 449$
- $9, 2\cdot 9 - 1=17, 2\cdot17-1, \ldots$

#### Observasjoner

Hvordan kan vi argumentere for dette generelt? Hvor skal vi sette i gang? En naturlig retning vil være å observere og beskrive mønsteret vi ser så godt vi kan slik at vi har et utgangspunkt å jobbe mot.

##### 1: Gjette på algebraisk beskrivelse av løsningene

Vi ser at når det er tre personer, starter vi på 4, når det er fire personer starter vi på 5, når det $n$ personer er det naturlig å tenke at vi starter på $n+1$. 

Videre klarer vi også rekursivt å beskrive pengene til de andre personene. Vi tar bare den forrige, ganger med to og trekker fra 1. Det gir at andre person må ha $(n+1)\cdot 2 -1 = 2n+1$. Den tredje personen må ha $(2n+1)\cdot 2 - 1 = 4n+1$, den fjerde $8n+1$ og så videre. Det ser altså ut til å være relativt enkelt å beskrive løsningen for $n$. Den *ser* ut til å være 

$$
2^0n+1, 2^1n+1, 2^2n+1, \ldots, 2^{n-1}n+1. 
$$
Fra dette kan vi også trekke ut og peke på hvilken som helst person i rekka. Mønsteret over tilsier at person nummer $k$ i rekka starter med $2^{k-1}n+1$ penger (der nummer 1 er den med minst penger og nummer $n$ er den med mest penger). Men vi har selvfølgelig ikke argumenter for dette enda. 

##### 2: Gjette på summen av pengene.

Vi har også sett at vi klarer å gjette hvor mange penger alle ender med. Når det er tre personer ender alle med $8 = 2^3$, når de er fire ender de med $16 = 2^4$, når de er fem ender de med $2^5$, og generelt vil vi gjette at de ender med $2^n$ når de er $n$ personer. 

Siden vi har gjettet på to *stillinger* i denne prosessen, start og slutt, kan det jo være naturlig å bekrefte at disse er like. Er mengden penger i start- og sluttstillingen likt? Med andre ord, er

$$
(2^0n+1)+ ( 2^1n+1) + ( 2^2n+1) +  \ldots + 2^{n-1}n+1 = n\cdot2^n?
$$

> **Påstand 1**
>  $$ \sum_{i=1}^n 2^{i-1}i+1 = n\cdot 2^n$$

Beviset overlates til leseren 😉

> **Korrolar 2**
> 1. Når en person har $x$ kroner, så er summen av de resterende pengene $n\cdot 2^n-x$. 
> 2. Når en person dobler de andre sine penger, står han igjen med $2x- n\cdot 2^n$
>  

Følger direkte fra påstand 1.

> **Påstand 3**
> Dersom person $k$ starter med $2^{k-1}n+1$ penger, vil han doble pengene sine $n-k$ ganger før han må gi fra seg penger (lik det som påstås i korrolar 2.2. Deretter vil han doble de resterende pengene sine $k-1$ ganger. 
> Verdien etter denne prosessen vil være lik $2^n$. 

Utregning av algebra overlates til leseren 😉

Vi kan nå innse at vi er i mål. Vi har klart å vise at dersom hver person starter med $2^{k-1}n+1$ så vil de ende opp med $2^n$ når prosessen er ferdig. 

Finnes det andre utvidelser? Hva hvis vi tredobler, firedobler? Blant annet kan vi lage en sekvens på tre personer der vi ender opp der vi startet, ved å starte med $1, 2$ og $4$. Kan vi finne slike *looper* med andre typer doblinger? 

Tredobling ser for eksempel ut til å ha et naturlig mønster det også.

## Tredoblinger, firedoblinger og så videre.

Det ser ut som løsninger i tredoblinger er

2. 5, 13
3. 7, 19, 55
4. 9, 25, 73, 217

Generelt for $n$ personer så har første person $2n+1$, neste har $3(2n+1)-2 = 3^1\cdot 2n+1$ og neste $3(3^1\cdot2n+1)-2 = 3^2\cdot 2n+1$ og generelt for person $k$ vil de ha $3^{k-1}2n+1$.

Kikker vi på firedoblinger får vi 

2. 7, 25
3. 10, 37, 143

og vi kan gjette at neste er $13, 4\cdot 13-3, \ldots$, der ganger forrige med 4 og trekker fra tre (jeg har ikke testet). Vi ser at $7$ også er $3\cdot 1+1$, så vi kan generelt tenke at de starter på $3n+1$ når det er $n$ personer. 

Vi kan nå også videre gjette på femdoblinger (har ikke sjekket). Vi ser at på to personer var minste beløp 3 for dobling, 5 for tredobling, 7 for firedobling. Da kan vi gjette at det må være 9 for femdobling for to personer. Generelt for $n$ personer så vi at det startet på $n+1$ for dobling, $2n+1$ for tredobling, $3n+1$ for firedobling. Så det må da være naturlig å tenke at vi starter på $4n+1$ for femdobling. Utviklingen har også vært mulig å beskrive rekursivt, for dobling var det å ta å gange med to og trekke fra én, for tredobling ganget vi med tre og trakk fra to. For fire var det å gange med fire og trekke fra tre. For fem peker det på å gange med 5 og trekke fra fire. Det gir

2. 9, 41
3. 13, 61, 301
4. 17, 81, 401, 2001.

Mønsteret ser ut til å være greit å utvide til k-doblinger (selv om jeg ikke har sjekket noe). For k-dobling er hypotesen at for $n$ personer så starter første person med $(k-1)n+1$ og at rekursivt så har neste person i rekka $k((k-1)n+1))-(k-1) =k(k-1)n+1$ og så videre. Vi ser generelt at mønsteret er at nummer $m$ i rekka må starte med $k^{m-1}(k-1)n+1$.

Kan det være mulig å bevise dette generelt ved å følge beviset fra dobling?

Rekkefølgen bør da gå slik

1. Beskriv startsum og sluttsum (det er nesten gjort i hypotesten over) og vis at de er like.
2. Beskriv hvor mye penger en person med $x$ penger har etter de har $k$-doblet de andre personene.
3. Beskriv prosessen for hvordan k-doblingene skjer (denne bør være identisk med doblingstilfellet). Gjør algebra for å vise at man ender $k^n$ etter hele prosessen.

## Start på k-dobling

Starter litt regning for å bevise generelt tilfelle.

### Lik start og sluttsum fra hypotese

#### Steg 1

Vi må vise at 

$$
\sum_{i=1}^n k^{i-1}(k-1)n+1 = nk^n.
$$
Vi kan først set at summen av enerne summerer seg til $n$. Videre kan vi faktorisere ut $(k-1)n$ som gir $n+(k-1)\sum_{i=1}^{n-1} k^{i-1}$, gjør vi indeksforskyvning ser vi at det står $n+n(k-1)\sum_{i=0}^n k^i$. Siden summen er en geometrisk rekke får vi nå 

$$
n+\frac{n(k-1)(k^{n}-1)}{k-1} = n+n(k^n-1) = nk^n.
$$

#### Steg 2

Nå som vi vet at summen er $nk^n$, så vet vi også at hvis en person har $x$ penger, så har de resterende personene $nk^n-x$ penger til sammen. Siden alle de skal få k-doblet sine penger, må personen gi fra seg $(k-1)(nk^n-x)$ penger, og står derfor igjen med $x-((k-1)(nk^n-x))=kx-(k-1)nk^n$. 

#### Steg 3

Prosessen er lik som for dobling, bare at vi gjør k-dobling. Dermed vil person $m$ begynne med $k^{m-1}(k-1)n+1$ penger og k-dobles $n-m$ ganger først. På dette tidspunktet vil de ha $k^{n-m}(k^{m-1}(k-1)n+1) = k^{n-1}(k-1)n+k^{n-m}$. 

Når de nå må gi fra seg penger vil de stå igjen med 

$$
kx-(k-1)nk^n = k(k^{n-1}(k-1)n+k^{n-m})-(k-1)nk^n = k^{n-m+1}
$$

Nå gjenstår det bare en k-dobling $m-1$ ganger, som gir at personen står igjen med $k^{m-1}k^{n-m+1}=k^n$ og resultatet følger!
