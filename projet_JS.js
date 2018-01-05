
// mettre les classes en premier !

class baseObject(){
    
    constructor(posX, posY, vitesse, taille, vie){
      this.posX = posX;
      this.posY = posY;
      this.vitesse = vitesse;
      this.taille = taille;
      this.vie = vie;
    }
}

class Ennemi(){

}

class Joueur(){

}

class Butin(){

}

window.onload = function() {    
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

}