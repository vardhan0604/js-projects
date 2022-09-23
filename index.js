let passengers=0;
const countEl=document.getElementById("count-el");

console.log(passengers)
function increment(){
    passengers ++;
    countEl.innerText=passengers;
}
const saveEl=document.getElementById("save-el");

function save(){
    
    
    saveEl.textContent+=passengers+' - ';
    passengers=0;
    countEl.innerText=passengers;
}