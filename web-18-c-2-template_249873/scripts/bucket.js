// On clicking remove button the item should be removed from DOM as well as localstorage.


var arr=JSON.parse(localStorage.getItem("coffee")) || []
displaydata(arr)
function displaydata(data){
    let con=document.getElementById("bucket")
    data.forEach(function (ele,index) {
         
        let boxes=document.createElement("div")

        let images=document.createElement("img")
        images.src=ele.image;

        let name=document.createElement("h3")
        name.innerText=ele.title;

        let price=document.createElement("h3")
        price.innerText=ele.price;

        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.addEventListener("click",function(){
            
            remove(ele,index)
        })

        boxes.append(images,name,price,btn)

        con.append(boxes)
    });


  function remove(ele,index){
      arr.splice(index,1)
    //   console.log(arr)
      localStorage.setItem("coffee",JSON.stringify(arr))
      location.reload()
  }
}
