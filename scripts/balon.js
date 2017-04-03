$(document).ready(inicio);

var x =350;
var y=15;
var velocidady=5;
var velocidadx=0;

function inicio(){
	lienzo=$("#lienzo")[0];
	contexto=lienzo.getContext("2d");
	balon= new Balon();
	balon.dibujar(contexto);
	animar();
} 

function animar(){
	contexto.drawImage($("#fondo")[0],0,0,fondo.width,fondo.height);
	balon.dibujar(contexto);
	balon.actualizar();
	setTimeout("animar()",20);
}

function whichButton(event){
if(event.keyCode=='39'){
if(x==690)
	x=690;
else velocidadx=5;
Balon();
}
if(event.keyCode=='37'){
if(x==0)
	x=0;
else velocidadx=-5;
Balon();
}
if(event.keyCode=='38'){
if(y==0)
	y=0;
else velocidady=-5;
Balon();
}
if(event.keyCode=='40'){
if(y==0)
	y=0;
else velocidady=5;
Balon();
}
}

function Balon(){
	this.img=$('#balon')[0];
	this.dibujar = function(ctx){
		ctx.drawImage(this.img, x,y);
	}
	this.actualizar=function(){
		if(y>=610-128)
			velocidady=velocidady*(-1);
		else if(y<=0)
			velocidady=velocidady*(-1);
		y=y+velocidady;
		if(x>=690)
			velocidadx=velocidadx*(-1);
		else if(x<=0)
			velocidadx=velocidadx*(-1);
		x=x+velocidadx;
	}
}