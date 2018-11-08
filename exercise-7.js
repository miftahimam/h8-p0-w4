function urutkanAbjad(str) {
  // CARA I :
  var abjad = 'abcdefghijklmnopqrstuvwxyz', urutan = '';
  
  for (var i = 0; i < abjad.length; i++) {
    for (var j = 0; j < str.length; j++) {
      if (abjad[i] === str[j]) {
        urutan += abjad[i];
      }
    }
  }
  
  return urutan;
  
  // CARA II :
//   return str.toString().split('').sort().join('');
// }
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'