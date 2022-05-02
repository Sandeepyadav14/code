// write js code here corresponding to favourites.html
var arr=JSON.parse(localStorage.getItem("favourites"))

displayData(arr);

function displayData(data){
  data.forEach(function (element,index) {
    
    var tr=document.createElement("tr");

     var td1=document.createElement("td");
     td1.innerText=element.match

     var td2=document.createElement("td")
     td2.innerText=element.teama

     var td3=document.createElement("td")
     td3.innerText=element.teamb

     var td4=document.createElement("td")
     td4.innerText=element.dates

     var td5=document.createElement("td")
     td5.innerText=element.venues

     var td6=document.createElement("td")
     td6.innerText="Remove";
     td6.style.cursor="pointer"
     td6.style.color="blue"
     td6.setAttribute("class","deleteText")
     td6.addEventListener("click",function (){
         deleteItem(element,index);
     })
     tr.append(td1,td2,td3,td4,td5,td6);

     document.querySelector("tbody").append(tr)

  });

  function deleteItem(element,index){
      arr.splice(index,1);
      localStorage.setItem("favourites",JSON.stringify(arr));
      window.location.reload();
  }
}
