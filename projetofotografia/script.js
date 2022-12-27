var img = document.getElementsByClassName('fleximg');
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modalimg');

for (let i = 0; i < img.length; i++){

    img[i].addEventListener("click", () => {

        modal.style.display = "flex";
        modalImg.src = img[i].src;

    })

}
