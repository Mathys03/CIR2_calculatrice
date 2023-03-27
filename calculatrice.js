const header = document.getElementById("p1")
const ecran = document.getElementById("p2")
let final = 0
class BaseCalculator{
    constructor(){
        this.chaine = null;
        this.lastChaine = null;
    }
    ajout(elem){
        if(elem == '=')this.printToScreen()
        else if(elem == 'C')this.backtrack()
        else this.addToChaine(elem)      
    }
    printToScreen(){
        ecran.innerHTML=eval(this.chaine)
        header.innerHTML += this.chaine + " = " + eval(this.chaine) +"<br>"
        this.lastChaine = this.chaine
        this.chaine = null
    }
    addToChaine(elem){
        if(elem == '×')elem='*'
        if(this.chaine != null) this.chaine+= elem.toString()
        else this.chaine=elem.toString()
        ecran.innerHTML = this.chaine
    }
    backtrack(){
        if(this.chaine==null || this.chaine[0]== undefined) this.chaine=this.lastChaine
        else this.chaine = (this.chaine).slice(0,-1)
        ecran.innerHTML = this.chaine
        console.log(this.chaine[0])

    }
}
let calcul = new BaseCalculator();
console.log(calcul)
/*
function ajout(elem){
    if(elem == '='){
        ecran.innerHTML=eval(chaine)
        header.innerHTML += chaine + " = " + eval(chaine) +"<br>"
        chaine = null
    }else{
        if(elem == '×')elem='*'
        if(elem == 'C')chaine = chaine.slice(0,-1)
        else if(chaine != null) chaine+= elem.toString()
        else chaine=elem.toString()
        ecran.innerHTML = chaine
    }
}*/