//NAVBAR
const var Navbar = Content.getComponent("Navbar");
const var Home = Content.getComponent("Home");
const var FxTitle = Content.getComponent("FxTitle");
const var SetTitle = Content.getComponent("SetTitle");
const var ContactsTitle = Content.getComponent("ContactsTitle");
const var LayerBlur = Content.getComponent("LayerBlur");
const var SLayerTab = Content.getComponent("SLayerTab");






LayerBlur.setPaintRoutine(function(g)
{
	 g.fillAll(0x09FFFFFF);
	 g.beginLayer(1);
	 g.boxBlur(1);
	 g.endLayer();
});

//Navbar Routine
Navbar.setPaintRoutine(function(g)
{	
	g.beginLayer(1);
	g.setColour(0x14FFFFFF);
	g.drawRoundedRectangle(this.getLocalBounds(1), 0, 1);
	g.setColour(0xAAFFFFFF);
	g.fillPath(logo, [12, 7, 22, 13]);	
	
	g.setColour(0x14FFFFFF);
	g.drawLine(334, 334, 0, 26, 1);
	g.drawLine(465, 465, 0, 26, 1);
	g.endLayer();
	
});

//Home Data
Home.data.hover;
Home.data.down;

//Home Callbacks
Home.setMouseCallback(function(event)
{
	if(event.hover)
	{
		Home.data.hover = true;
	}
	
	else
	{
		Home.data.hover = false;
	}
	
	if(event.clicked)
	{
		Home.data.down = true;
	DpTitle.showControl(1);
	MainFX.showControl(0);
	SLayerTab.showControl(0);
	}
	
	this.repaint();
});


//Home Routine
Home.setPaintRoutine(function(g)
{
	g.setColour(0x70FFFFFF);
	g.fillPath(home, [0, 7, 50, 13]);
	
	if (Home.data.hover)
			{
				g.setColour(0xFFFFFFFF);
				g.fillPath(home, [0, 7, 50, 13]);
			}
});


//FxTitle Data
FxTitle.data.hover;
FxTitle.data.down;


//FxTitle Callbacks
FxTitle.setMouseCallback(function(event)
{
	if(event.hover)
	{
		FxTitle.data.hover = true;
	}
	
	else
	{
		FxTitle.data.hover = false;
	}
	
	if(event.clicked)
	{
		FxTitle.data.down = true;
		DpTitle.showControl(0);
		MainFX.showControl(1);
		SLayerTab.showControl(0);
	}
	
	this.repaint();
});

//FxTitle Routines
FxTitle.setPaintRoutine(function(g)
{
	g.setColour(0x70FFFFFF);
	g.fillPath(fxTitle, [0, 7, 74, 13]);
	
	if (FxTitle.data.hover)
		{
			g.setColour(0xFFFFFFFF);
			g.fillPath(fxTitle, [0, 7, 74, 13]);
		}
});



//SetTitle Data
SetTitle.data.hover;
SetTitle.data.down;



//SetTitle Callbacks
SetTitle.setMouseCallback(function(event)
{
	if(event.hover)
	{
		SetTitle.data.hover = true;
	}
	
	else

	{
		SetTitle.data.hover = false;
	}
	
	if(event.clicked)
	{
		SetTitle.data.down = true;
		DpTitle.showControl(0);
		MainFX.showControl(0);
		SLayerTab.showControl(1);
	}
	
	this.repaint();
});


//SetTitle Routine
SetTitle.setPaintRoutine(function(g)
{
	g.setColour(0x70FFFFFF);
	g.fillPath(setTitle, [0, 7, 86, 13]);
	
	if (SetTitle.data.hover)
			{
				g.setColour(0xFFFFFFFF);
				g.fillPath(setTitle, [0, 7, 86, 13]);
			}
});


//ContactsTitle Data
ContactsTitle.data.down;
ContactsTitle.data.hover;

ContactsTitle.setPaintRoutine(function(g)
{
	g.setColour(0xAAFFFFFF);
	g.fillPath(contTitle, [0, 7, 78, 9]);
	
	if(ContactsTitle.data.hover)
	{
		g.setColour(0xFFFFFFFF);
		g.fillPath(contTitle, [0, 7, 78, 9]);
	}
	
});


ContactsTitle.setMouseCallback(function(event)
{
	if(event.hover)
	{
		ContactsTitle.data.hover = true;
	}
	
	else
	
	{
		ContactsTitle.data.hover = false;
	}

	if(event.clicked)
	{
		Engine.openWebsite("https://www.instagram.com/deep.instruments/");
	}
	
	this.repaint();
});