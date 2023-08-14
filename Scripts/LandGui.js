//LANDINGUI
const var LandingUi = Content.getComponent("LandingUi");
const var SoundLine = Content.getComponent("SoundLine");
const var RotImg = Content.getComponent("RotImg");
const var RotImg1 = Content.getComponent("RotImg1");
const var RotImg2 = Content.getComponent("RotImg2");
const var Lowercp = Content.getComponent("Lowercp");
const var Midcp = Content.getComponent("Midcp");
const var Hicp1 = Content.getComponent("Hicp1");
const var DpTitle = Content.getComponent("DpTitle");






DpTitle.setPaintRoutine(function(g)
{


	g.setGradientFill([0xFFFFFFFF, 283, 0, 0xCCFFFFFF, 283, 146]);
	g.fillPath(mainT, [8, 12, 556, 113]);
});






LandingUi.setPaintRoutine(function(g)
{
	g.fillAll(0xFF121212);	
});

SoundLine.setPaintRoutine(function(g)
{
	

	g.setGradientFill([0xFFFFE652, 1, 1, 0xFFFF5959, 358, 85]); 
	g.fillRoundedRectangle([0, 0, 358, 171], 6);
	g.setGradientFill([0xFFFF5959, 358, 85, 0xFF009176, 716, 171]);
	g.fillRoundedRectangle([346, 0, 370, 171], 6);
});


//Cp88 Caontroller
RotImg.loadImage("{PROJECT_FOLDER}cpImg.png", "cpC");
RotImg.setPaintRoutine(function(g)
{
	g.rotate(Math.toRadians(-35), [this.get("width")/2, this.get("height")/2]);	 
	
	g.drawImage("cpC", [-90, 30, this.get("width"), this.get("height")], 0, 0);
	
	g.drawImage("cpC", [-10, 80, this.get("width"), this.get("height")], 0, 0);
	
});


//Cp88 Caontroller1
RotImg1.loadImage("{PROJECT_FOLDER}cpImg.png", "cpC");
RotImg1.setPaintRoutine(function(g)
{
	g.rotate(Math.toRadians(-35), [this.get("width")/2, this.get("height")/2]);	 
	
	g.drawImage("cpC", [0, 90, this.get("width"), this.get("height")], 0, 0);
	
	g.drawImage("cpC", [80, 140, this.get("width"), this.get("height")], 0, 0);
	
});



//Cp88 CaontrollerAgglomerate
Lowercp.loadImage("{PROJECT_FOLDER}cpImg.png", "cpC");
Lowercp.setPaintRoutine(function(g)
{
	 g.rotate(Math.toRadians(-25), [this.get("width")/2, this.get("height")/2]);	 
	 
	 g.drawImage("cpC", [15, 23, 120, 18], 0, 0);
});


Midcp.loadImage("{PROJECT_FOLDER}cpImg.png", "cpC");
Midcp.setPaintRoutine(function(g)
{
	 g.rotate(Math.toRadians(25), [this.get("width")/2, this.get("height")/2]);	 
	 
	 g.drawImage("cpC", [5, 20, 120, 18], 0, 0);
});

Hicp1.loadImage("{PROJECT_FOLDER}cpImg.png", "cpC");
Hicp1.setPaintRoutine(function(g)
{
	 g.rotate(Math.toRadians(-25), [this.get("width")/2, this.get("height")/2]);	 
	 
	 g.drawImage("cpC", [3, 24, 120, 18], 0, 0);
});