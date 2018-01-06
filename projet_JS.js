
// mettre les classes en premier !

class baseObject{
    
    constructor(X, Y, vitX, vitY, vie){
      this.X = X;
      this.Y = Y;
      this.vitX = vitX;
      this.vitY = vitY;
      this.vie = vie;
    }

    draw(ctx) {
      ctx.save();
      ctx.restore();
    }

    move(){
      this.X += this.vitX;
      this.Y += this.vitY;
    }
	
	//Cette fonction sera utile pour les ennemies et butins. Si un ennemie ou un butin sort du canvas, cette fonction le fera revenir au point opposé à celui dont il est sortit (j'espère que cette phrase est clair)
	remiseAzero(){
		this.X = canvas.w + 2;
        this.Y = Math.random() * canvas.height;
	}

}

class Ennemi extends baseObject{

  constructor(){
    super();
  }

  draw(ctx){
    ctx.save();

    ctx.translate(10,10);
    ctx.fillRect(0, 0, 30, 25);

    oeild(ctx);
    oeilg(ctx);
    bouche(ctx);
    
    ctx.restore();


    function oeild(ctx){
      ctx.save();
      ctx.translate(5,5);
      ctx.fillStyle='red';
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 5);
      ctx.lineTo(6, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function oeilg(ctx){
      ctx.save();
      ctx.translate(20,5);
      ctx.fillStyle='red';
      
      ctx.beginPath();
      ctx.moveTo(6, 5);
      ctx.lineTo(0, 5);
      ctx.lineTo(6, 0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function bouche(ctx){
      ctx.save();

      ctx.fillStyle='red';

      ctx.translate(5,17.5);
      ctx.fillRect(0, 0, 2.5, 2.5);

      ctx.translate(1.5,-1.5);
      ctx.fillRect(0, 0, 17.5,2.5);

      ctx.translate(16,1.5);
      ctx.fillRect(0, 0, 2.5, 2.5);

      ctx.restore();
    }

  }

}

class Joueur extends baseObject{
	constructor(X,Y,vitX,vitY,vie){
		super(X,Y,vitX,vitY);
		this.vie=3;//On accorde 3 points de vie au joueur
		this.points=0;// le nombre de points que l'on va obtenir au cours de la partie
		this.couleurTete= "orange",
		this.couleurCorps =coul;
		 this.angleBrasGauche = 0.8;
		this.angleAvantBrasGauche = -0.2;
  this.angleBrasDroit = -0.3; 
  this.angleAvantBrasDroit = -0.2;
  this.angleJambeGauche = 0.5; 
  this.angleCuisseGauche = 0.2;
  this.angleJambeDroite = 0.5; 
 this.angleCuisseDroite = 0.2;
	}

	//Va appeller la fonction detectionCollision et enlève un point de vie lorsqu'une collision est détecté.
	setVie(){
		this.vie --;
	}
	
	setPoints(){
		console.log(this.points);
		this.points ++;
	}
	
	/**
	** Fonctions de modélisation du perso
	**/
	drawJoueur(){
		ctx.save();
		ctx.translate(this.X,this.Y);
		ctx.fillStyle="blue";
		ctx.fillRect(0,0,25,25);
		
		this.dessineCouEtTete();
  
  // Les bras
  this.dessineBrasGauche();
  this.dessineBrasDroit();
  
  // Les jambes
  this.dessineJambeGauche();
  this.dessineJambeDroite();
		
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

class Butin extends baseObject{
	constructor(X, Y, vitX, vitY, taille, vie,color){
		super(X, Y, vitX, vitY, vie);
		this.taille=taille;
		this.radius= taille/2;
		this.color=color;
		this.angle=20;
	}
	
	drawButin(){
		ctx.save();
		ctx.beginPath();
	  
		ctx.fillStyle = this.color;
		ctx.arc(this.X, this.Y, this.radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.fillStyle="black";
		ctx.fillText("PHP",this.X-9,this.Y+3);
		ctx.restore();
    //this.color = 'black';
	}	
	
	move(){
		
		//var incX = this.vitX * Math.cos(this.angle);
		//var incY = this.vitY * Math.sin(this.angle);
    
		//this.X += calcDistanceToMove(10, incX);
		//this.Y += calcDistanceToMove(10, incY);
		
		this.X += -Math.random();
		this.Y += 0;
	}
}

class JAVA extends Butin{
	constructor(X, Y, vitX, vitY, vie){
		super(X, Y, vitX, vitY,vie);
		//this.taille=30;
		this.radius=15;
		this.color="red";
	}
	
	drawJAVA(){
		ctx.save();
		ctx.beginPath();
	  
		ctx.fillStyle = this.color;
		ctx.arc(this.X, this.Y, this.radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.fillStyle="black";
		ctx.fillText("JAVA",this.X-11,this.Y+3);
		ctx.restore();
	}
}

class PHP extends Butin{
	constructor(X, Y, vitX, vitY, vie){
		super(X, Y, vitX, vitY,vie);
		//this.taille=30;
		this.radius=25;
		this.color="blue";
	}
	
	drawPHP(){
		ctx.save();
		ctx.beginPath();
	  
		ctx.fillStyle = this.color;
		ctx.arc(this.X, this.Y, this.radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.fillStyle="black";
		ctx.fillText("PHP",this.X-11,this.Y+3);
		ctx.restore();
	}
}


/**
** Fonctions pour le déplacement du joueur
** Source :https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2017/courseware/403b445abed54b2ba00322290f1684c7/1a01608ac10f42e0b3565422b9141c6c/?activate_block_id=block-v1%3AW3Cx%2BHTML5.2x%2B3T2017%2Btype%40sequential%2Bblock%401a01608ac10f42e0b3565422b9141c6c
**/
function moveJoueur(delta){
	joueur.vitX = joueur.vitY = 0;
        // check inputStates
        if (inputStates.left) {
            joueur.vitX = -joueur.vit;
        }
        if (inputStates.up) {
           joueur.vitY = -joueur.vit;
        }
       if (inputStates.right) {
            joueur.vitX = joueur.vit;
        }
        if (inputStates.down) {
            joueur.vitY = joueur.vit;
        } 
        if (inputStates.space) {
        }
        if (inputStates.mousePos) { 
        }
       if (inputStates.mousedown) { 
            joueur.vit = 500;
        } else {
          // mouse up
          joueur.vit = 100;
        }
		joueur.X += calcDistanceToMove(delta, joueur.vitX);
        joueur.Y += calcDistanceToMove(delta, joueur.vitY);
}
  var calcDistanceToMove = function(delta, vit) {
    return (vit * delta) / 1000; 
  };
  
    function getMousePos(evt) {
        // necessary to take into account CSS boudaries
        var rect = canvas.getBoundingClientRect();
        return {
            X: evt.clientX - rect.left,
            Y: evt.clientY - rect.top
        };
    }
	
	//Fonction qui servira lorsque le joueur n'aura plus de points de vie
	function finPartie(){
		if (joueur.vie==0){
			alert("Vous avez perdu !");
		}
		joueur.vie=3;
		//BaseObject.remiseAzero();
		
	}
	
	//Détection d'une collision entre joueur et ennemie
	function detectionCollision(){
		
	}
 
//Déclaration des variables : 
let ctx, canvas, w ,h;
var inputStates = {};
joueur= new Joueur(100,100,0,0);
var coul="blue";
ennemie= new Ennemi();
//butin = new Butin(300,200,5,5,50,1,"blue");
java=new JAVA(400,300,5,5,1);
php=new PHP(200,200,7,7,1);
var ennemie= new Ennemi();

window.onload = function() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
	
	 //Ajout de l'écouteur pour les touches clavier
      window.addEventListener('keydown', function(event){
          if (event.keyCode === 37) {
             inputStates.left = true;
          } else if (event.keyCode === 38) {
             inputStates.up = true;
          } else if (event.keyCode === 39) {
             inputStates.right = true;
          } else if (event.keyCode === 40) {
             inputStates.down = true;
          }  else if (event.keyCode === 32) {
             inputStates.space = true;
          }
      }, false);


      window.addEventListener('keyup', function(event){
          if (event.keyCode === 37) {
             inputStates.left = false;
          } else if (event.keyCode === 38) {
             inputStates.up = false;
          } else if (event.keyCode === 39) {
             inputStates.right = false;
          } else if (event.keyCode === 40) {
             inputStates.down = false;
          } else if (event.keyCode === 32) {
             inputStates.space = false;
          }
      }, false);
      
      // Mouse event listeners
      canvas.addEventListener('mousemove', function (evt) {
          inputStates.mousePos = getMousePos(evt);
      }, false);

      canvas.addEventListener('mousedown', function (evt) {
            inputStates.mousedown = true;
            inputStates.mouseButton = evt.button;
      }, false);

      canvas.addEventListener('mouseup', function (evt) {
          inputStates.mousedown = false;
      }, false);      

	//joueur.drawJoueur(10,10);
	//console.log("ok");
	animation();

}

function changeCouleur(event){
  console.log(joueur.couleurCorps);
  coul = event.target.value;
  console.log("couleur corps apres :" + this.couleurCorps);
}


function animation(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	joueur.drawJoueur();
	moveJoueur(10);
	//console.log(joueur.vitX);
	//joueur.X ++;
	//butin.drawButin();
	//butin.move();
	java.drawJAVA();
	java.move();
	
	php.drawPHP();
	php.move();

  ennemie.draw(ctx);
  ennemie.move();
	
	finPartie();
	
	
	requestAnimationFrame(animation);
}