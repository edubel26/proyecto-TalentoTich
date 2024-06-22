var temaBase = document.querySelector(".temaBase");
var temaAzul = document.querySelector(".temaAzul");
var temaOro = document.querySelector(".temaOro");
var temaGris = document.querySelector(".temaGris");

temaBase.addEventListener("click", setTemaBase);
temaAzul.addEventListener("click", setTemaAzul);
temaOro.addEventListener("click", setTemaOro);
temaGris.addEventListener("click", setTemaGri);

function setTemaBase(){
    setUserTheme("temaBase");
}
function setTemaAzul(){
    setUserTheme("temaAzul");
}
function setTemaOro(){
    setUserTheme("temaOro");
}
function setTemaGri(){
    setUserTheme("temaGris");
}

function setUserTheme(newTheme){
    document.documentElement.setAttribute("data-theme", newTheme);
}

