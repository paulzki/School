function arealTilTrekant(høyde, bredde) {
  return (høyde * bredde) / 2;
}
function arealTilFirkant(høyde, bredde) {
  return høyde * bredde;
}
function summer() {
  return arealTilTrekant(4, 4) + arealTilFirkant(2, 6);
}
