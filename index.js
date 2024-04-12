const cartNotifcount = document.getElementById("cartNotifcount");
let count = 0;

function countCalculator (){
    count++;
    cartNotifcount.textContent = count;   
}