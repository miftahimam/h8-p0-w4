function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz'
    var output=''
    //jika z, kembali ke a
 for (var i = 0 ; i< kata.length ;i+=1 ){
     for(var j = 0; j < kamus.length; j++){
        if(kamus[j] === kata[i]){
            output = output + kamus[j+1]
        }else if(kamus[kamus.length-1] === kata[i]){
            output += kamus[0]
            break
        }
     
     }
   
  }
 return output;

 
}

// TEST CASES
console.log(ubahHuruf('bisa azzzaa deh kamu')); // 
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
