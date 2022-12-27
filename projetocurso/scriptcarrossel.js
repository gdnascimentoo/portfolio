var bttL = document.getElementById('bttcarrosselleft');
var bttR = document.getElementById('bttcarrosselright');
const display = document.getElementById('displaycarrossel');

bttL.addEventListener("click", esquerdacarrossel);
bttR.addEventListener("click", direitacarrossel);


var position = 0;

    function esquerdacarrossel(){
        
        switch(position){

            case 0:
                display.style.transition = 0.5 + "s";
                display.style.transform = "translateX(" + (-1400) + "px)";
                position = 2;
                break;
            case 1:
                display.style.transition = 0.5 + "s";
                display.style.transform = "translateX(" + (0) + "px)";
                position--;
                break;
            case 2:
                display.style.transition = 0.5 + "s";
                display.style.transform = "translateX(" + (-700) + "px)";
                position--;
                break;


        }

    }

    function direitacarrossel(){

        
        switch(position){

            case 0:
                display.style.transition = 0.5 + "s";
                display.style.transform = "translateX(" + (-700) + "px)";
                position++;
                break;
            case 1:
                display.style.transition = 0.5 + "s";
                display.style.transform = "translateX(" + (-1400) + "px)";
                position++;
                break;
            case 2:
                display.style.transition = 0.5 + "s";
                display.style.transform = "translateX(" + (0) + "px)";
                position = 0;
                break;


        }

    }

