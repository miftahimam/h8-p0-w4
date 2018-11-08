function shoppingTime(memberId, money) {
  // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H & N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000
    if (memberId === '' || !memberId) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else if (money <= 50000) {
        return 'Mohon maaf, uang tidak cukup';
    } else {
    var obj = {}
        obj.memberId = memberId;
        obj.money = money
    var arrItem = ['Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone']; // untuk menampung variabel item yang akan di beli
    var itemPrice = [1500000, 500000, 250000, 175000, 50000]; // untuk menampung harga setiap item
    var itemPurchased = []; // barang yang dapat dibeli
    var totalPurchased = 0 // total harga yang telah di beli
    var changeMoney  // sisa uang yang telah dibelanjakan
        for (var i = 0; i<arrItem.length; i++){
            if (money >= itemPrice[i]){
                totalPurchased = totalPurchased + itemPrice[i];
                // console.log(totalPurchased)
                itemPurchased.push(arrItem[i]);
                changeMoney = money - totalPurchased
            }
        }
        obj.listPurchased = itemPurchased
        obj.changeMoney = changeMoney
    }
    return obj
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja