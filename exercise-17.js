function kaliTerusRekursif(angka) {
    var angkaString = String(angka);
    if(angkaString.length > 1){
      var hasil = 1;
      for(var i = 0; i<angkaString.length;i++){
        hasil *= Number(angkaString[i]);
      }
      angka = hasil;
      return kaliTerusRekursif(angka)
    } else {
      return angka;
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6