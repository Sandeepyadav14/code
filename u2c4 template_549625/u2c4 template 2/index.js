// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",sumitfun)
var araay=JSON.parse(localStorage.getItem("matchlist")) || []
function sumitfun(){
    event.preventDefault();
      var obj={
        match:masaiForm.matchNum.value,
        teama:masaiForm.teamA.value,
        teamb:masaiForm.teamB.value,
        dates:masaiForm.date.value,
        venues:masaiForm.venue.value,
      };
     araay.push(obj)
     console.log(araay)
     localStorage.setItem("matchlist",JSON.stringify(araay));
      window.location.href="matches.html"
    }
