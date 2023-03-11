var header = document.getElementById("p1")
var ecran = document.getElementById("p2")
var final = 0
var chaine = null
var resultat = 0
function traitementResultat(chaine){

}
function ajout(elem){
    if(elem == '='){
    //traitementResultat(chaine)
    ecran.innerHTML=eval(chaine)
    header.innerHTML += chaine + " = " + eval(chaine) +"<br>"
    chaine = null
    }
    else{
        if(elem == '×')elem='*'
        if(elem == 'C')chaine = chaine.slice(0,-1)
        else if(chaine != null) chaine+= elem.toString()
        else chaine=elem.toString()
        if(elem == '-'){}
        if(elem == '+'){}
        if(elem == '/'){}
        if(elem == '.'){}
        if(elem == '('){}
        if(elem == ')'){}
        console.log(elem)
        console.log(final)
        console.log(chaine)
        ecran.innerHTML = chaine
    }
}