var cortina = document.getElementById("transicionador");
var menu = document.getElementById("menu-container");
var profissional = document.getElementById("profissionais-container");
var pessoal = document.getElementById("pessoal-container");
var portfolio = document.getElementById("portfolio-container");
var x;
var displayCont = 1;
cortina.addEventListener("webkitAnimationEnd", tirarDisplay);
function transicionaEsquerda(){
    cortina.classList.add("anima-sumindo-esquerda");
    displayCont--;
    x = 1;
}

function transicionaDireita(){
    cortina.classList.add("anima-sumindo-direita");
    displayCont++;
    x = 1;
}

function transicionaBaixo(){
    cortina.classList.add("anima-sumindo-baixo");
    displayCont = 99;
    x = 1;
}

function transicionaCima(){
    cortina.classList.add("anima-sumindo-baixo");
    displayCont = 1;
    x = 1;
}

function tirarDisplay(){
    switch(x){
        case 1:
            switch(displayCont){
                case 0:
                    menu.style.display = "none";
                    profissional.style.display = "flex";
                    break;
                case 1:
                    menu.style.display = "flex";
                    profissional.style.display = "none";
                    pessoal.style.display = "none";
                    break;
                case 2:
                    menu.style.display = "none";
                    pessoal.style.display = "flex";
                    break;
                case 99:
                    menu.style.display = "none";
                    portfolio.style.display = "flex";
                    break;
            }
            x++;
            break;
        case 2:
            cortina.classList = "transicionador-classe";
            x = 0;
            break;
    }
}