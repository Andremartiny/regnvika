---
title: Skatteinnkreveren – løsningsforslag
tags:
  - rekkefolge/300/200
  - type/losning
  - matematikk/tall-og-regning
created: 2023-08-29
status: arbeidsnotat
draft: "true"
---

[[../oppgaver/skatteinnkreveren|Til oppgaven: Skatteinnkreveren]].
## Eksempler

### Eksempel 1
| Mine beløp                               | Skatteinnkreverens beløp      | Resterende beløp                      |
| ---------------------------------------- | ----------------------------- | ------------------------------------- |
|                                          |                               | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
| 12                                       | 1, 2, 3, 4, 6                 | 5, 7, 8, 9, 10, 11                    |
| 10                                       | 5                             | 7, 8, 9, 11                           |
| Ikke flere muligheter, spillet er slutt. |                               |                                       |
| 10, 12                                   | 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 |                                       |

### Eksempel 2

| Mine beløp                              | Skatteinnkreverens beløp | Resterende beløp                      |
| --------------------------------------- | ------------------------ | ------------------------------------- |
|                                         |                          | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
| 7                                       | 1                        | 2, 3, 4, 5, 6, 8, 9, 10, 11, 12       |
| 10                                      | 5,2                          | 3, 4, 6, 8, 9, 11, 12              |
| 9                                       | 3                        | 4, 6, 8, 11, 12                     |
| 12                                      | 4, 6                  | 8, 11                                 |
| Ikke flere muligheter, spillet er slutt |                          |                                       |
| 7, 9, 10, 12                            | 1, 2, 3, 4, 5, 7, 8, 11  |                                       |


### Eksempel 3

| Mine beløp       | Skatteinnkreverens beløp | Resterende beløp                      |
| ---------------- | ------------------------ | ------------------------------------- |
|                  |                          | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
| 11               | 1                        | 2, 3, 4, 5, 6, 7, 8, 9, 10, 12        |
| 10               | 5,2                         | 3, 4, 6, 7, 8, 9, 12               |
|8                | 4,                      | 3, 6, 7, 9, 12                        |
| 9                | 3                        | 6, 7, 12                              |
| 12               | 6                        | 7                                     |
| Spillet er slutt |                          |                                       |
| 8, 9, 10, 11, 12 | 1, 2, 3, 4, 5, 6, 7      |                                       |




 
## Referanser


[@LiljedahlPeter2023Åbtk]
