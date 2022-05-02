// write js code here corresponding to matches.html
var araay=JSON.parse(localStorage.getItem("matchlist"));

displayData(araay);
function venuefilter(){
    var select=document.querySelector("#filtervenue").value;
    var filterList=list.filter(function(element){
        return element.venues==select
    });
    dislapData(filterList)
}
var arr=JSON.parse(localStorage.getItem("favourites")) || []
function displayData(data){
 data.forEach(function (element) {
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
     td6.innerText="Favourite"
     td6.style.color="green"
     td6.style.cursor="pointer"
     td6.addEventListener("click",function(){

       fav(element)
     });
     tr.append(td1,td2,td3,td4,td5,td6);
     document.querySelector("tbody").append(tr);
 });
}
function fav(element){
 console.log(element)
 arr.push(element)
 
 localStorage.setItem("favourites",JSON.stringify(arr));
}



