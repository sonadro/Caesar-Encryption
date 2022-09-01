//Input-felt
const inputFelt = document.getElementById("input");
const tallFelt = document.getElementById("number");
const outputFelt = document.getElementById("output");
const clearKnapp = document.getElementById("clearBtn");

//Kode knappen til å kryptere
inputFelt.addEventListener("input", krypter);
tallFelt.addEventListener("input", krypter);
clearKnapp.addEventListener("click", clear);

function clear() {
  inputFelt.value = null;
  tallFelt.value = null;
  outputFelt.value = null;
}

//Krypter funksjon
function krypter() {
  //Alfabetet som brukes for å kryptere
  let alfabet = "b^cd?9fVgh_Rr&s,4@wx-8yJæ ABCDE}{GH7+I[eQ;%!S¤TUW=Xk3:Y$ZÆ<Øijøo)pq£az(Å12]tu#.v560K>LMlmånNOP";
  let aLen = alfabet.length;
  
  //Lese feltene
  let tekst = inputFelt.value;
  let tall = tallFelt.value % aLen;
  let output = "";
  
  for (x = 0; x < tekst.length; x++) {
    let bokstav = tekst[x];
    if (!alfabet.includes(bokstav)) {
      output += bokstav;
    } else {
      let index = alfabet.indexOf(bokstav);
      index += tall;
      if (index < 0) {
        index += aLen;
      } else if (index > aLen - 1) {
        index -= aLen;
      }
      output += alfabet.charAt(index);
    }
  }
  //Putt resultatet i output-feltet
  outputFelt.innerText = output;
}