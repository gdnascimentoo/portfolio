var dropbtt = document.getElementById('dropmenuresponsivo');
dropbtt.addEventListener("click", droparmenu);
var dropado = false;


    function droparmenu(){

        let navlinks = document.getElementById('navlinks');
        let logoff = document.getElementById('logoff');
        let navbar = document.getElementById('navbar');

        if(dropado == false){
            
            navbar.style.overflow = "hidden";
            navbar.style.transition = "0.5s";
            navbar.style.height = "calc(43px*5)";
            navbar.style.display = "flex";
            navbar.style.flexDirection = "column";
            navlinks.classList = "responsivo";
            logoff.classList = "responsivo";
            
            dropado = true;

        } else{

            navbar.style.height = "43px";
            navlinks.classList = "";
            logoff.classList = "";

            dropado = false;

        }

    }