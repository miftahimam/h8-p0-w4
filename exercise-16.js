function totalDigitRekursif(angka) {
    var angkaString = String(angka);
    var pengurang = Number(angkaString[0]) * Math.pow(10, angkaString.length -1);
    if(angka > 0) {
      return Number(angkaString[0]) + totalDigitRekursif(angka - pengurang);
    } else {
      return 0;
    }
    // return pengurang;
  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5