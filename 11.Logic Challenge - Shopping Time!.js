function shoppingTime(memberId, money) {
    // you can only write your code here!
var datapembelian = {};
var change;
var barang=[
    {
        namabarang :'Sepatu Stacattu', 
        harga:1500000
    },
    {
        namabarang :'Baju Zoro',
        harga:500000
    },
    {
        namabarang :'Baju H&N',
        harga:250000
    },
    {
        namabarang :'Sweater Uniklooh',
        harga:175000
    },
    {
        namabarang :'Casing Handphone',
        harga:50000
    }
];

 if(memberId===undefined || memberId === ''){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
 }else{
    if(money<barang[4].harga){
return 'Mohon maaf, uang tidak cukup'
    } else {
        datapembelian.memberId = memberId;
        datapembelian.money = money;
        datapembelian.listPurchased =[];
        for(var i=0 ; i<barang.length; i ++){
            if (barang[i].harga<=money){
                datapembelian.listPurchased.push(barang[i].namabarang)
                change=money-barang[i].harga
                money=change
                datapembelian.changeMoney=change
            }
        }
    }

return datapembelian


}
}
  
//   [['Sepatu Stacattu ', 1500000]
//   ['Baju Zoro' 500000]
//   ['Baju H&N' 250000]
//   ['Sweater Uniklooh' 175000]
//   ['Casing Handphone' 50000]]

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