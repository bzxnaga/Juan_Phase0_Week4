function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp=""
    var temp2=[]
    var perkalian;
    var pengali;
    
    for (var i = 0 ; i < angka ; i++){
       
        if(angka%i==0){
        perkalian=angka/i;
        pengali = i;
        temp+= pengali.toString()+perkalian.toString()
        temp2.push(temp)
        }else if (angka == 1){
        return 1
      }
     temp=""
    }

    var min = Infinity
    for(var i=0;i<temp2.length;i++){
      if(temp2[i].length<min){
        min = temp2[i].length
      }
    }
    return min
  }

  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4