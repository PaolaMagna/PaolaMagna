export function calculateChange(paid:number, owed:number): number[] {
  
  let coins:Array<number> = [20000, 10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1];
  let amount = {} as number;
  let change = [0];
  let vuelto = (paid - owed);

  for( var j=0; j<coins.length && vuelto > 0 ; j++);{
    amount = Math.floor(vuelto/coins[j]);
    change[j] = amount;
    vuelto = vuelto%coins[j];
   // change.push(change[j]);
    vuelto = vuelto%coins[j];
  }
    return change;
}

let change = calculateChange(1000,150);
console.log(change);

/*let j : number = 0;

  let vuelto = (paid - owed);
  if (vuelto > 0)
  {
    (j < coins.length);{     
    amount = Math.floor(vuelto/coins[j]); 
    change[j] = amount;
    vuelto = vuelto%coins[j];
    change.push(change[j]);
    
    j++;
  if (change.length >= 11)
    break }
    console.log(change);
    return change;    
  }
  else (vuelto < 0);{
      throw new Error("Saldo Insuficiente");
  }
}
calculateChange(1000, 150);  //[1, 3, 1, 0, 0, 0]
//calculateChange(1000,1000);
//calculateChange(1000, 2000)

*/