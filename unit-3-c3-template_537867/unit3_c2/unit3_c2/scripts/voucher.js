

let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

let  getData =async()=>{
    try{
    let res= await fetch(url)
    let data = await res.json()
//    let  sum=data[0].vouchers
// console.log(data[0].vouchers)
     append(data[0].vouchers)
    // append(data.vouchers)
    }
    catch(err){
        console.log(err)
    }
}
getData()



let append=(data)=>{

    let container=document.getElementById("voucher_list")
   let mat=JSON.parse(localStorage.getItem("purchase"))|| []
//    mat.push(sum)
// //    console.log(mat)
    data.forEach((el) => {
        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=el.image;

        let h3=document.createElement("p")
        h3=el.name

        let pric=document.createElement("h3")
        pric=el.price

        let buy=document.createElement("button")
        buy.innerText="Buy Now"
        buy.addEventListener("click",function(){
            buys(el)
        })
//    console.log()
    //  console.log(img,h3,pric)
       div.append(img,h3,pric,buy)
    //    console.log(div)
         container.append(div)


    });
        



    
     

   function buys(el){
        mat.push(el)
        localStorage.setItem("purchase",JSON.stringify(mat))

        alert("Hurray! purchase successful.")
    }
    
}
let arr=JSON.parse(localStorage.getItem("user")) || []

let sss =document.getElementById("navbar")
arr.forEach(function(el){
    // let div=createElement("div")

    let h3=document.createElement("h3")
    h3=el.amount


    sss.append(h3)
})