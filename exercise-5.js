function ubahHuruf(kata) {
    var output="";
	for(var i = 0; i<kata.length; i++){
          output+=String.fromCharCode(kata.charCodeAt(i) + 
          (kata[i] === 'z' || kata[i] === 'Z' ? -25 : 1));
      }
      return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu