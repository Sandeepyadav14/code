
function checkout(a,b,c){
    this.name=a;
    this.number=b;
    this.address=c;
}





function check(e){
    e.preventDefault();

    let form=document.getElementById("order-form")
    let name=form.name.value;

    let number=form.number.value;
    let address=form.address.value;

    let all=new checkout(name,number,address)


console.log(all)
let data=JSON.parse(localStorage.getItem("forminfo")) || []

data.push(all)

localStorage.setItem("forminfo",JSON.stringify(data))
alert("yes")
}