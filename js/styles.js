var switch_theme_sun=document.getElementById("icon_light");
var switch_theme_moon=document.getElementById("icon_dark");
switch_theme_sun.onclick=function(){change_theme(switch_theme_sun);};
switch_theme_moon.onclick=function(){change_theme(switch_theme_moon);};


function change_theme(icon){
    icon.style.display = "none"

    next_theme=getLocalData()=="dark"?'light':'dark'

    document.getElementById('icon_'+next_theme).style.display = "show"
    saveLocalData(next_theme)
    // récupère valeur du theme dans la base web
    // l'inverse
    // hide icon + affiche nouvel icon
    // change theme page (bg body + color texte / icon + bascule image si index.html)
}

function saveLocalData(theme){
    localStorage.setItem('theme',theme)
}
function getLocalData(){
    return localStorage.getItem('theme')
}