function todecimal(n){
    return parseFloat(n)/100
  }
  // console.log(todecimal("10%"))
  
  function cal(n,x,m,){
    if(x<m){
      let y=todecimal(n)*x
      let i=x-y
     return i
  
      
    }
    if(i<m){
        y=todecimal(l)*i
        return y
      
      }
  }
  console.log(cal("10%",250000,500000,))
  console.log(cal("20%",500000,1000000))
  console.log(cal("30%",100000,1000000))

  
  export {todecimal,cal}
