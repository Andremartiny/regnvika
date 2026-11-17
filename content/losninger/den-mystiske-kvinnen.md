---
title: Den mystiske kvinnen – løsningsforslag
order: 300/400
tags:
draft: "true"
---

[[../undervisningsressurser/oppgaver/den-mystiske-kvinnen|Til oppgaven]].

## Tanker

Etter å ha tenkt litt og gravd litt i hodet mitt, så tror jeg at en kan få en strategi som gjør at en alltid kan finne på maks (n-2)*2, men jeg er ikke sikker på om dette er optimalt.

Ved 3 dører er det åpenbart at man skal holde seg på midten begge dagene

Ved fire dører så er det slik: Innfør symbolene x, o og -. Der x er der resepsjonisten banker, o er rommene damen kan være på og – er rom du kan utelukke. Da kan du gjøre denne strategien

Fire dager

| Dør 1 |Dør 2   |Dør 3   |Dør 4     |Kommentarer   |
|---|---|---|---|---|
|o|x|o|o|Bank på dør 2, hvis kvinnen ikke er her er hun i 1, 3 eller 4.|
|-|o|x|o|Bank på dør 3. Hun kan nå ikke være i rom 1 eller 3|
|o|-|x|-|Bank på dør 3. Hun kan nå ikke være i rom 2, 3 eller 4.|
|-|x|-|-|Bank på dør 2, hun må nå være her, med mindre du fant henne tidligere|

For fem dører blir strategien slik

| Dør 1 |Dør 2   |Dør 3   |Dør 4   |Dør 5   |Kommentarer   |
|---|---|---|---|---|---|
|o|x|o|o|o|Bank på dør 2|
|-|o|x|o|o|Bank på dør 3. Hun kan nå ikke være i rom 1 eller 3|
|o|-|o|x|o|Bank på dør 4. Hun kan nå ikke være i rom 2 eller 4.|
|-|o|-|x|-|Bank på dør 4, hun kan nå ikke være i rom 1, 3,4 eller 5. Hun må altså være i rom 2|
|o|-|x|-|-|Bank på dør 3, hvis hun ikke er her må hun ha hoppet fra dør 2 til dør 1 og ikke hit|
|-|x|-|-|-|Bank på dør 2 og du har nå funnet henne.|

For meg ser det ut som at denne strukturen lar seg generalisere (uten at jeg har tenkt nøye nok gjennom det til å være helt sikker). Men det sier i allefall at de to eksemplene du nevnte kan forbedres. Da vil jeg også tro at spørsmålet med 17 dører og 30 dager skal la seg gjøre da (17-2)*2 = 30. Derfor skal det så vidt fungere i «worst case scenario».  Forhåpentligvis er det ikke noen tenkefeil fra min side her…

Jeg vil altså gjette at for seks dører så kan jeg bare utvide tabellen slik:

| Dør 1 |Dør 2 |Dør 3 |Dør 4 |Dør 5 |Dør 6 | 
|---|---|---|---|---|---|
|o|x|o|o|o|o|
|-|o|x|o|o|o|
|o|-|o|x|o|o|
|-|o|-|o|x|o|
|o|-|o|-|x|-|
|-|o|-|x|-|-|
|o|-|x|-|-|-|
|-|x|-|-|-|-|

## References

Tankene over ser ut til å bekreftes her: [Alternativ Versjon og løsning](https://puzzling.stackexchange.com/questions/455/why-does-this-solution-guarantee-that-the-prince-knocks-on-the-right-door-to-fin)
