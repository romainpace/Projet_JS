
// mettre les classes en premier !

class baseObject(){
    
    constructor(X, Y, vitX, vitY, taille, vie){
      this.X = X;
      this.Y = Y;
      this.vitX = vitX;
      this.vitY = vitY;
      this.taille = taille;
      this.vie = vie;
    }

    draw(ctx) {
      ctx.save();
      ctx.restore();
    }

    move(){
      this.x += this.vitX;
      this.y += this.vitY;
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