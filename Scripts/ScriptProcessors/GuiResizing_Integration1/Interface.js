Content.makeFrontInterface(800, 550);

include("BlackKeys.js");
include("PathAssets.js");
include("Navbar.js");
include("LandGui.js");
include("InstFx.js");
include("MainFx.js");
include("Laf.js");
include("BallAni.js");
include("pluginIntroInstrument.js");
include("GuiResizing.js");

RotImg.setPosition(-300, 0, 300, 220);

RotImg.setTimerCallback(function()
{
	var PosX1 = RotImg.get("x");
	
	if(PosX1 <= 0)
	{
		PosX1++;	
	}

	this.setPosition(PosX1, 0, 300, 220);

	this.repaint();
	
});

RotImg.startTimer(1);



RotImg1.setPosition(1000, 0, 300, 220);

RotImg1.setTimerCallback(function()
{
	var PosX2 = RotImg1.get("x");
	
	if(PosX2 >= 500)
	{
		PosX2--;	
	}

	this.setPosition(PosX2, 0, 300, 220);

	this.repaint();
	
});

RotImg1.startTimer(1);



RotImg2.setPosition(335, -200, 124, 200);

RotImg2.setTimerCallback(function()
{
	var PosY3 = RotImg2.get("y");
	
	if(PosY3 <= 0)
	{
		PosY3++;	
	}

	this.setPosition(335, PosY3, 300, 220);

	this.repaint();
	
});

RotImg2.startTimer(1);


function onNoteOn()
{
	pnlAni1.startTimer(10);
	pnlAni2.startTimer(10);
	pnlAni3.startTimer(10);
	
	
	
}
function onNoteOff()
{
	pnlAni1.stopTimer();
	pnlAni2.stopTimer();
	pnlAni3.stopTimer();
	
	
	
}function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 