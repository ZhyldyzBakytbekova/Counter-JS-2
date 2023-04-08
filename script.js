let plusBtn = document.getElementById("plusBtn")
let count = document.getElementById("count")
let minusBtn = document.getElementById("minusBtn")

let counter = 0
function plusHandler(){
    counter++
    count.innerHTML = counter
    
}

function minusHandler(){
    counter--
    count.innerHTML = counter
}

plusBtn.addEventListener("click", plusHandler)
minusBtn.addEventListener("click", minusHandler)