// Add the coffee to local storage with key "coffee"


const url=`https://masai-mock-api.herokuapp.com/coffee/menu`;

async function getData(){
    try{
    let res =await fetch(url)

    let user = await res.json();
    append(user.menu.data)
    // console.log(user)
    }
    catch(err){
        console.log(err)
    }
}
getData()

var arr=JSON.parse(localStorage.getItem("coffee")) || []
function append(data){
    let con=document.getElementById("menu")

    data.forEach(function (el) {
        let box=document.createElement("div")

        let images=document.createElement("img")
        images.src=el.image;

        let name=document.createElement("h3")
        name.innerText=el.title;

        let price=document.createElement("h3")
        price.innerText=el.price;

        let btn=document.createElement("button")
        btn.innerText="Add to Bucket"
        btn.addEventListener("click",function(){
            console.log(el)
            addtobucket(el)
        })

        box.append(images,name,price,btn)
        con.append(box)
        
    });
    function addtobucket(el){
   arr.push(el)
   
   localStorage.setItem("coffee",JSON.stringify(arr));
    }
}