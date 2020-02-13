function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    // you can only write your code here!
  
    var shopperss =[]
    var datapembelian = {}
    var datapembeliantotal = []
    var totalprofit=0
    var sisa;
    for(var i=0 ; i<listBarang.length ; i ++){
      for(var j=0 ; j<shoppers.length;j++){
        sisa=listBarang[i][2]
        if(shoppers[j].product==listBarang[i][0]){
        if(sisa>=shoppers[j].amount){
        sisa=listBarang[i][2]-shoppers[j].amount;
        listBarang[i][2]=sisa
        shopperss.push(shoppers[j].name)
        totalprofit+=listBarang[i][1]*shoppers[j].amount
        }
        
      }
      sisa = listBarang[i][2]
      }
      if(sisa==undefined){
        return []
      }else{
      datapembelian.product= listBarang[i][0];
      datapembelian.shoppers=shopperss;
      datapembelian.leftOver= sisa;
      datapembelian.totalProfit=totalprofit;
      datapembeliantotal.push(datapembelian);
      datapembelian={};
      totalprofit=0
      shopperss =[];
      }
    }

    return datapembeliantotal
// console.log(shoppers.length)
// console.log(shoppers[0].name)// access name
  
  }
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
  console.log(countProfit([])); //[]