function ferme_menu() {
    document.querySelector('header > input').checked = false ;
}

function ouvrir(enfant) {
    if (document.querySelector(`#projets article figure:nth-child(${enfant}) input`).checked == true) {
        document.querySelector(`#projets article figure:nth-child(${enfant})`).style.position = 'static' ;
    } else {
        document.querySelector(`#projets article figure:nth-child(${enfant})`).style.position = 'relative' ;
        modifier_couleur(215, enfant)
    }
}

function modifier_couleur(teinte, enfant) {
    if (teinte != 215) {
        document.getElementById('projets').style.setProperty("--couleur-de-projet", `${teinte}`) ;
    } else {
        if (document.querySelector(`#projets article figure:nth-child(${enfant}) input`).checked == false) {
            document.getElementById('projets').style.setProperty("--couleur-de-projet", `${teinte}`) ;
        }
    }
}

function envoyer() {
    document.querySelector('#formulaire > div').style.transform = 'translate(0%, 35%) scale(20%) rotateX(50deg) rotateY(-10deg) rotateZ(65deg)' ;
    document.querySelector('#formulaire > div').style.backgroundColor = 'var(--neige)' ;
    document.querySelector('#formulaire > div').style.border = 'solid 2px var(--cafe-noir)' ;
}

function devoyer() {
    document.querySelector('#formulaire > div').style.transform = 'none' ;
    document.querySelector('#formulaire > div').style.backgroundColor = 'transparent' ;
    document.querySelector('#formulaire > div').style.border = 'none' ;
}

function defiler(enfant) {
    document.querySelector(`.categorie-competences:nth-child(${enfant})`).style.transform = 'translateX(-50%)' ;
    document.querySelector(`.categorie-competences:nth-child(${enfant})`).style.opacity = '100%' ;
    document.querySelector(`.categorie-competences:nth-child(${enfant})`).style.zIndex = '8' ;

    document.querySelector(`.categorie-competences:nth-child(${enfant % 3 + 1})`).style.transform = 'rotateZ(5deg) translateX(calc(-50% + 110%)) scale(75%)' ;
    document.querySelector(`.categorie-competences:nth-child(${enfant % 3 + 1})`).style.opacity = '50%' ;
    document.querySelector(`.categorie-competences:nth-child(${enfant % 3 + 1})`).style.zIndex = 'auto' ;

    document.querySelector(`.categorie-competences:nth-child(${(enfant + 1) % 3 + 1})`).style.transform = 'rotateZ(-5deg) translateX(calc(-50% - 110%)) scale(75%)' ;
    document.querySelector(`.categorie-competences:nth-child(${(enfant + 1) % 3 + 1})`).style.opacity = '50%' ;
    document.querySelector(`.categorie-competences:nth-child(${(enfant + 1) % 3 + 1})`).style.zIndex = 'auto' ;
}

defiler(1)