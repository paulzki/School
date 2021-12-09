# Lag en funksjon

function navnTilFunksjon() {
//koden som skal kjøre
}

# gjør en variabel til en arrow funksjon

let minFunk = () => {
//koden som skal kjøre
}

# Lag en funksjon (Lenker til en ekstern side.) som tar inn høyde og bredde av en trekant (parameters) og returner arealet.

function arealTilTrekant(høyde, bredde) {
return høyde*bredde/2
}

# Nå, lag en annen funksjon som beregne arealet til en firkant. 

function arealTilFirkant(høyde, bredde) {
return høyde*bredde
}

# Lag en siste funksjon som summerer trekanten og firkanten slik at du får det totale arealet.

function summer() {
return arealTilTrekant(4,4)+arealTilFirkant(2,6)
}