function arealTilTrekant(høyde, bredde) {
  return (høyde * bredde) / 2;
}
function arealTilFirkant(høyde, bredde) {
  return høyde * bredde;
}
function summer(trekantHøyde,trekantBredde,firkantHøyde,firkantBredde) {
  return arealTilTrekant(trekantHøyde, trekantBredde) + arealTilFirkant(firkantHøyde, firkantBredde);
}
