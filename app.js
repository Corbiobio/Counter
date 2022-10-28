const p = document.getElementById("p1")



let i = 0

let temps = setInterval(function () {
    p.textContent = i
    i++
    if (i === 10) {
        clearInterval(temps)
    }



}, 1000)
