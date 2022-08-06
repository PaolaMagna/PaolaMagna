export function calculateChange(paid:number, owed:number) {
  
  let coins:Array<number> = [20000, 10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1];
  let amount = {} as number;
  let change:Array<number> 
  change = [];
  let j : number = 0;

  let vuelto = (paid - owed);
  if (vuelto > 0)
  {
    while (j < coins.length /*&& Math.floor(vuelto/coins[j])>0*/){     
    amount = Math.floor(vuelto/coins[j])
    if (amount > 0){
    /*change[j] = amount;*/
    change.push(change[j]);}
    
    vuelto = vuelto%coins[j];
    j++;
    }
    console.log(change);
    return change;   
 
  }
  
  if (vuelto = 0){
      return change;
  }
}

calculateChange(1000, 150);  //[1, 3, 1, 0, 0, 0]
//calculateChange(1000,1000);
//calculateChange(1000, 2000)

