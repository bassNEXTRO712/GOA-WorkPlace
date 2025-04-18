const img = document.querySelector("img");
const nextBtn = document.getElementById("next");

const imgUrls = [
    'house3.jpg',
    'hosue2.jpg',
    'house3.jpg',
]

let index = 1;

nextBtn.addEventListener("click", () => {
    img.src = imgUrls[index];
    index++;

    if (index > imgUrls.length ){
        index = 0;
    }else if( index <0){
        index = imgUrls.length - 1;
    }
})