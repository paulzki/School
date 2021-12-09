# Hva er en variabel

Variabler lagrer data.
En kan forestille det seg som en pakke med et navn og noe oppi.
Variabler blir lagret på RAM.
Variabler blir brukt å lagre data midlertidigt, hente opp data, gjøre beregninger med variabler og mer.

# typer:

String
Number
Boolean
Null
Underfined

# defineres med:

En definerer en variabel kun 1 gang om den er innenfor scopet.

- let

En kan bruke let for å gi en variabel verdi og en kan skifte verdien.

- const

const variabler er konstante og kan aldri skiftes etter første definering av verdi.

- var

deprikatet gammel let, blir avskaffet for tiden.

# forbinde definereren med verdi av variabelen:

=

# hvordan definere de forskjellige typene:

- let hello = "hello world" eller 'hello world'

Sett quotation marks / kan være singel eller dobbel
Kan ikke bruke 2 forskjellige for å definere enn string

- let favoriteNumber = 69

En kan gi variabler en verdi med å bare skrive hva tallet skal være.
En kan også gi in desimal tall.

- let isThisEasy = true

En bool blir tildelt enten for å være true || false

- let nothing = null

Null er ingen verdi men har blitt definert.

- let notAssigned = undefiened

Om en variabel har verdien undefiened, så har den ingen verdi.

# Eksempel på bruk for variabel:

- console.log()

# beregning med variabler

En kan erklære variabler med andre variabler.

let a = "hello"
let b = "world"
let c = a + " " + b
console.log(c)

> hello world

---

let a = 1
let b = 2
let c = a + b
console.log(c)

> 3

# ved hjelp av typeof kan vi se hvilken type variablen er:

let a = 1
console.log(typeof a)

> number

# sette variabler inn i strings (string interpolation):

const myName = "Paul"
const myCity = "Hippeland"
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
