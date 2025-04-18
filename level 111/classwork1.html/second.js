const img = document.querySelector("img");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const imgUrls = [
    "./images/house1.jfif",
    "./images/house2.jfif",
    "./images/house3.jfif",
    "./images/house4.jfif",
]

let index = 0;
img.src = imgUrls[index]

nextBtn.addEventListener("click", () => {
    if (index < imgUrls.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = imgUrls[index];
})

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
    } else {
        index = imgUrls.length - 1;
    }
    img.src = imgUrls[index];
})

setInterval(() => {
    if (index < imgUrls.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = imgUrls[index];
}, 3000);