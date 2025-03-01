const p = document.getElementById("count");
const btn = document.getElementById("btn");

let count = 0;

function increment() {
    count++
    p.textContent = `Count: ${count}`
}

btn.onclick = increment;