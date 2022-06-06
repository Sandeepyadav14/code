
function signup(a,b,c,d){
    this.name=a;
    this.email=b;
    this.address=c;
    this.amount=d;
}





function submitfun(e){
    e.preventDefault()
    let fors=document.getElementById("form")

    let name=fors.name.value;
    let email=fors.email.value;
    let address=fors.address.value;
    let amount=fors.amount.value;

      

    let s1=new signup(name,email,address,amount)
    console.log(s1)
    form.reset()
   let arr=JSON.parse(localStorage.getItem("user")) || []
   arr.push(s1)
   localStorage.setItem("user",JSON.stringify(arr))

}
  


   