var header = document.getElementById("p1")
var ecran = document.getElementById("p2")
var final = 0
var chaine = null

function ajout(elem){
    if(elem == '='){
    ecran.innerHTML=eval(chaine)
    header.innerHTML += chaine + " = " + eval(chaine) +"<br>"
    chaine = null
    }
    else{
        if(elem == '×')elem='*'
        if(elem == 'C')chaine = chaine.slice(0,-1)
        else if(chaine != null) chaine+= elem.toString()
        else chaine=elem.toString()
        ecran.innerHTML = chaine
    }
}