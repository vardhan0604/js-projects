let passengers=0;
const button =document.getElementById("count-el");
console.log(passengers)
function increment(){
    passengers ++;
    button.innerText=passengers;
}