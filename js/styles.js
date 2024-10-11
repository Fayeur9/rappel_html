const switch_theme=document.getElementById("icon_theme");
const body=document.getElementById('id_body')
const image=document.getElementById('image_project')

// Vérifie la valeur du thème dans le localData pour choisir le bon thème
value_theme=getLocalData()
if(value_theme==='dark'){
    switch_theme.classList.remove("fa-sun");
    switch_theme.classList.add("fa-moon");
    body.classList.remove("theme_transition")
    body.classList.add('theme_dark');
    if(image!=null){
        image.src='media/image_dark.png';
    }
}else{
    switch_theme.classList.remove("fa-moon");
    switch_theme.classList.add("fa-sun");
    body.classList.remove("theme_transition")
    body.classList.add('theme_light');
    if(image!=null){
        image.src='media/image_light.png';
    }
}

// évènement au click sur le thème
switch_theme.onclick=function(){
    let next_theme=getLocalData()=="dark"?'light':'dark';

    switch_theme.classList.remove(next_theme=="light"?"fa-moon":"fa-sun");
    switch_theme.classList.add(next_theme=="light"?"fa-sun":"fa-moon");
    body.classList.add(next_theme=="light"?"theme_light":"theme_dark")
    body.classList.remove(next_theme=="light"?"theme_dark":"theme_light");
    if(image!=null){
        image.src='media/image_'+(next_theme=="light"?"light.png":'dark.png');
    }
    saveLocalData(next_theme);
};

// Ecrit la valeur du thème dans le localData
function saveLocalData(theme){
    localStorage.setItem('theme',theme);
}
// Récupère la valeur du thème dans le localData
function getLocalData(){
    return localStorage.getItem('theme');
}

async function getCountries(){
    try{
        let response= await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const form_pays=document.getElementById('select_pays')
        const liste_pays = await response.json();
        liste_pays.forEach(pays => {
            var option=document.createElement('option');
            // initialisation des valeurs de l'option
            option.value=pays.name.common;
            option.textContent=pays.name.common;
            form_pays.appendChild(option);
        });
    }catch (error){
        console.error('Erreur', error);
    }
}

getCountries();