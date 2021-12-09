Scope er ideen i programmering at noen variabler er tilgjengelige/utilgjengelige fra andre deler av programmet.

Blokker er utsagn som finnes innenfor krøllete klammeparenteser {}.

Globalt omfang refererer til konteksten der variabler er tilgjengelige for alle deler av programmet.

Globale variabler er variabler som eksisterer innenfor globalt omfang.

Blokkomfang refererer til konteksten der variabler som bare er tilgjengelige innenfor blokken de er definert.

Lokale variabler er variabler som eksisterer innenfor blokkomfang.

Globalt navneområde er rommet i koden vår som inneholder informasjon med globalt omfang.

Omfangsforurensning er når for mange variabler finnes i et navneområde eller variabelnavn gjenbrukes.

let color = "red"

console.log(color) // > red

function change() {
color = "grey"

console.log(color) // > grey

}
change()
console.log(color) // > grey
