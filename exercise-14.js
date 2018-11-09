// function changeVocals (str) {
//   //code di sini
// }

// function reverseWord (str) {
//   //code di sini
// }

// function setLowerUpperCase (str) {
//   //code di sini
// }

// function removeSpaces (str) {
//   //code di sini
// }

// function passwordGenerator (name) {
//   //code di sini
// }
function changeVocals (str) {
  var hasil = '';
  var vokal = 'aieuo';
  var huruf = 'abcdefghijklmnopqrstuvwxyz';
  for(var i = 0; i < str.length; i++){
    var isVokal = false;
    for(var j = 0; j < vokal.length; j++){
      if(vokal[j] === str[i] || vokal[j].toUpperCase() === str[i]){
        isVokal = true;
        for(var k = 0; k < huruf.length;k++){
          if(str[i] === huruf[k]){
            hasil += huruf[k+1];
          } else if(str[i] === huruf[k].toUpperCase()){
            hasil += huruf[k+1].toUpperCase();
          }
        }
      }
    }
    if(!isVokal){
     hasil += str[i];
    }
  }
  return hasil;
}

function reverseWord (str) {
  var hasil = '';
  for(var i = str.length-1;i >= 0; i--){
    hasil +=str[i];
  }
  return hasil;
  //code di sini
}

function setLowerUpperCase (str) {
  var hasil = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      hasil += str[i].toUpperCase();
    } else {
      hasil += str[i].toLowerCase();
    }
  }
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  var hasil = '';
  for(var i = 0; i< str.length; i++){
    if(str[i] != ' '){
      hasil += str[i];
    }
  }
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  if(name.length >= 5){
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  } else {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
