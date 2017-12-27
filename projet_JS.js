//a

var mousePos;
window.onload = function() {	  
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    //ctx.fillStyle = "green";
    //ctx.fillRect(400,0,200,400);
	canvas.addEventListener('mousemove', handleMousemove, false);
    //canvas.addEventListener('mousedown', handleMousedown, false);
    //canvas.addEventListener('mouseup', handleMouseup, false);
	  animation();
}

 function handleMousemove(evt) {
    // The mousePos will be taken into account in the animationLoop
    mousePos = getMousePos(canvas, evt);
  }
  
  
  function getMousePos(canvas, evt) {
   // necessary to take into account CSS boudaries
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
}
//Animation des différents éléments de la scène

function animation() {
  // 1 - on efface le canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
    ctx.fillRect(400,0,200,400);
  perso = new Perso();

  perso.drawBonhomme(100, 100);
  
  batiment=new Batiment("black",100,100);
  batiment.drawBatiment(this.x,this.y);

 if(mousePos !== undefined) {
        batiment.x = mousePos.x;
        batiment.y = mousePos.y;
 }
  
  // 3 - on met à jour les objets à dessiner
  
  //MAJ pour le bonhomme :
 

  
  // 4 - On rapelle 60 fois par seconde la fonction
  requestAnimationFrame(animation);
  
}


//terrain 
//terrain pour le monstre 
//terrain 

//monstre 
let canvas, ctx;

class Perso{
  constructor(){
  this.xBonhomme=350;
  this.yBonhomme=300;
  this.vitesseX = 5;
  this.vitesseY = 0;
  this.couleurTete= "orange",
  this.couleurCorps ="blue";
  this.rotationBrasGauche = 0.1;
  this.rotationBrasDroit = 0.1;
  this.rotationJambeGauche = 0.1;
  this.rotationJambeDroite = 0.1;
  this.angleBrasGauche = 0.5;
  this.angleAvantBrasGauche = -0.5;
  this.angleBrasDroit = 0.8; 
  this.angleAvantBrasDroit = -0.5;
  this.angleJambeGauche = 0.5; 
  this.angleCuisseGauche = 0.5;
  this.angleJambeDroite = 0.8; 
 this.angleCuisseDroite = 0.5;
  }
  
  drawBonhomme(x, y) {
 
  ctx.save();
  
  ctx.translate(x, y);
  
  // Le corps
  ctx.fillStyle = this.couleurCorps;
  ctx.fillRect(0, 0, 25, 25);
  
  // Le cou et la tête
  this.dessineCouEtTete();
  
  // Les bras
  this.dessineBrasGauche();
  this.dessineBrasDroit();
  
  // Les jambes
  this.dessineJambeGauche();
  this.dessineJambeDroite();
    
      this.angleBrasGauche += this.rotationBrasGauche;
  
  if ((this.angleBrasGauche >= 1) || this.angleBrasGauche <=-1){
    this.rotationBrasGauche = -this.rotationBrasGauche;
  }
  
  this.angleBrasDroit +=this.rotationBrasDroit;
  
   if ((this.angleBrasDroit >= 1) || this.angleBrasDroit <=-1){
    this.rotationBrasDroit = -this.rotationBrasDroit;
  }
 
  this.angleJambeGauche += this.rotationJambeGauche;
  
  if ((this.angleJambeGauche >= 1) || this.angleJambeGauche <=-1){
    this.rotationJambeGauche = -this.rotationJambeGauche;
  }
  
  this.angleJambeDroite += this.rotationJambeDroite;
  
   if ((this.angleJambeDroite >= 1) || this.angleJambeDroite <=-1){
    this.rotationJambeDroite = -this.rotationJambeDroite;
  }
  
  
 if (this.xBonhomme >= canvas.width)
   this.xBonhomme = -this.xBonhomme;
  
  this.xBonhomme += 4 ;
 
  ctx.restore();
}
  
  dessineCouEtTete() {
  ctx.save();
  
  // On translate par rapport au repère courant (le corps)
  ctx.translate(7, -5);
  
    // Le cou
  ctx.fillStyle = "orange";
  ctx.fillRect(0, 0, 7.5, 5);
  
  // La tête
  ctx.translate(-2.5, -12.5);
  ctx.fillStyle=this.couleurTete;
  ctx.fillRect(0, 0, 12.5, 12.5)
  this.dessineVisage()
  
  ctx.restore();
}

dessineVisage() {
  ctx.save ();
  
  //Oeil Gauche
  ctx.translate(2.5, 2.5);
  ctx.fillStyle = "black";
  ctx.fillRect (0,0,2.5,2.5);
  
  //Oeil Droit
  ctx.translate(7.25, 0);
  ctx.fillStyle = "black";
  ctx.fillRect (0,0,2.5,2.5);
  
  //Nez
  ctx.translate(-3, 3.75);
  ctx.fillStyle = "black";
  ctx.fillRect (0,0,0.75,1.75);
  
  //Bouche
  ctx.translate(-1.75, 3.75);
  ctx.fillStyle = "black";
  ctx.fillRect (0,0,5,1.25);
  
  ctx.restore();
  
}


dessineBrasGauche(angle) {
  ctx.save();
  
  ctx.translate(0, 0);
  ctx.rotate(this.angleBrasGauche);
  
  ctx.fillStyle="red";
  ctx.fillRect(0, 0, 5, 12.5);
  
  // Dessin de l'avant bras gauche
  this.dessineAvantBrasGauche(angle);
  ctx.restore();
}


dessineBrasDroit(angle) {
  ctx.save();
  
  ctx.translate(25, 0);
  ctx.rotate(this.angleBrasDroit);
  
  ctx.fillStyle="red";
  ctx.fillRect(0, 0, 5, 12.5);
  
  // Dessin de l'avant bras droit
  this.dessineAvantBrasDroit(angle);
  ctx.restore();
}

dessineAvantBrasGauche(angle) {
  ctx.save();
  
  ctx.translate(2.5, 10);
  ctx.rotate(this.angleAvantBrasGauche);

  ctx.translate(-2.5, 0);
  
  ctx.fillStyle="orange";
  ctx.fillRect(0, 0, 5, 12.5);
  this.dessineMainGauche(angle);
  ctx.restore();
}

dessineAvantBrasDroit(angle) {
  ctx.save();
  
  ctx.translate(2.5, 10);
  ctx.rotate(this.angleAvantBrasDroit);

  ctx.translate(-2.5, 0);
  
  ctx.fillStyle="orange";
  ctx.fillRect(0, 0, 5, 12.5);
  this.dessineMainDroite(angle);
  ctx.restore();
}

dessineMainGauche(angle) {
  ctx.save();
  ctx.translate (0,10);
  
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, 5, 5);
  ctx.restore();
}

dessineMainDroite(angle) {
  ctx.save();
  ctx.translate (0,10);
  
  
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, 5, 5);
  ctx.restore();
}



dessineJambeGauche(angle) {
  ctx.save();
  
  ctx.translate(0, 25);
  ctx.rotate(this.angleJambeGauche);
  
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, 5, 12.5);
  
  // Dessin de la cuisse gauche
  this.dessineCuisseGauche(angle);
  ctx.restore();
}

dessineCuisseGauche(angle) {
  ctx.save();
  
  ctx.translate(2.5, 10);
  ctx.rotate(this.angleCuisseGauche);

  ctx.translate(-2.5, 0);
  
  ctx.fillStyle="orange";
  ctx.fillRect(0, 0, 5.75, 12.5);
  this.dessinePiedGauche(angle)
  ctx.restore();
}


dessineJambeDroite(angle) {
  ctx.save();
  
  ctx.translate(25, 25);
  ctx.rotate(this.angleJambeDroite);
  
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, 5.75, 12.5);
  
  // Dessin de la cuisse gauche
  this.dessineCuisseDroite(angle);
  ctx.restore();
}

dessineCuisseDroite(angle) {
  ctx.save();
  
  ctx.translate(2.5, 10);
  ctx.rotate(this.angleCuisseDroite);

  ctx.translate(-2.5, 0);
  
  ctx.fillStyle="orange";
  ctx.fillRect(0, 0, 5, 12.5);
  this.dessinePiedDroit(angle);
  ctx.restore();
}

dessinePiedDroit() {
  ctx.save();
 
  ctx.translate (0,12.5);
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, 8.75, 3.75);
  ctx.restore();
}

 dessinePiedGauche() {
  ctx.save();
  
  ctx.translate (0,12.5);
  
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, 8.75, 3.75);
  ctx.restore();
}


}
//On définit les différents objets :





// batiment
class Batiment{
	constructor(couleur,x,y){
		this.couleur=couleur;
		this.x=x;
		this.y=y;
	}
	
	getX(){
		return this.x;
	}
	
	getY(){
		return this.y;
	}
	
	drawBatiment(x,y){
ctx.save();
  
  ctx.translate(x, y);
  
  ctx.fillStyle = this.couleur;
  ctx.fillRect(0, 0, 40, 40);
  
  ctx.restore();
	}
	
}
