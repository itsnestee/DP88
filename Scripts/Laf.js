//Laf

//LAF
const var laf = Engine.createGlobalScriptLookAndFeel();

//Knobs
laf.registerFunction("drawRotarySlider", function(g, obj)
{
	
	var a = obj.area;	
	if(obj.text.indexOf("PVolume") != - 1)
	{
		g.setColour(Colours.darkgrey);
		g.fillEllipse([3, 3, 34, 34]);
		g.addDropShadowFromAlpha(0x66000000, 15);

		var start = 2.5;
		var end = start  * 2 * obj.valueNormalized - start;
		
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		g.setColour(Colours.white);
	    g.drawRect([a[2] / 2 - 3 / 2.7, 3, 2, 15], 8);
	}
	
	else if(obj.text.indexOf("NORM") != - 1)
	{
		g.setColour(Colours.darkgrey);
		g.fillEllipse([2, 2, 26, 26]);
		g.addDropShadowFromAlpha(0x66000000, 15);
		
		var start = 2.5;
		var end = start  * 2 * obj.valueNormalized - start;
				
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		g.setColour(Colours.white);
		g.drawRect([a[2] / 2 - 3 / 2.7, 2, 2, 10], 8);
	}
	
	else if(obj.text.indexOf("PREV") != - 1)
	{
		g.setColour(Colours.darkgrey);
		g.fillEllipse([2, 2, 26, 26]);
		g.addDropShadowFromAlpha(0x66000000, 15);
		
		var start = 2.5;
		var end = start  * 2 * obj.valueNormalized - start;
				
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		g.setColour(Colours.white);
		g.drawRect([a[2] / 2 - 3 / 2.7, 2, 2, 10], 8);
	}
});


//Switch
laf.registerFunction("drawToggleButton", function(g, obj)
{
	var b = obj.area;

 if(obj.text.indexOf("Switch") != - 1)
{
	
	if(obj.value == 0)
	{
		g.setColour(0xFFFFFFFF);
		g.setFont("Roboto", 12);
		g.drawAlignedText("ON", b, "centred");	
	}
		
	else if(obj.value == 1)
	{
		g.setColour(0xBBFFFFFF);
		g.setFont("Roboto", 12);
		g.drawAlignedText("OFF", b, "centred");
	}
		
	if(obj.over && obj.value == 1)
	{
		g.setColour(0xFFFFFFFF);
		g.setFont("Roboto", 12);
		g.drawAlignedText("OFF", b, "centred");	
	}
		
	
}

//PIANOS
//Sound1
else if(obj.text.indexOf("Button1") != - 1)
 	{
	 	g.setColour(Colours.grey);
	 	g.fillEllipse([3, 5, 8, 8]);
	 	
	 	g.setColour(0xAAFFFFFF);
	 	g.setFont("Roboto", 10);
	 	g.drawAlignedText("SOUND1", [15, 2, 50, 15] , "centred");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 10);
		 	g.drawAlignedText("SOUND1", [15, 2, 50, 15], "centred");
	 	}
	 	
	 	if(Button5.getValue() == 1)
	 		 	{
	 			 	g.setColour(Colours.grey);
	 			 	g.fillEllipse([3, 5, 8, 8]);	
	 		 	}
	 	
 	}


//Sound2
else if(obj.text.indexOf("Button2") != - 1)
 	{
	 	g.setColour(Colours.grey);
	 	g.fillEllipse([3, 5, 8, 8]);
	 	
	 	g.setColour(0xAAFFFFFF);
	 	g.setFont("Roboto", 10);
	 	g.drawAlignedText("SOUND2", [15, 2, 50, 15] , "centred");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 10);
		 	g.drawAlignedText("SOUND2", [15, 2, 50, 15], "centred");
	 	}
	 	
	 	if(Button5.getValue() == 1)
	 	{
		 	g.setColour(Colours.grey);
		 	g.fillEllipse([3, 5, 8, 8]);	
	 	}
	 	
 	}


//Sound3
else if(obj.text.indexOf("Button3") != - 1)
 	{
	 	g.setColour(Colours.grey);
	 	g.fillEllipse([3, 5, 8, 8]);
	 	
	 	g.setColour(0xAAFFFFFF);
	 	g.setFont("Roboto", 10);
	 	g.drawAlignedText("SOUND3", [15, 2, 50, 15] , "centred");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 10);
		 	g.drawAlignedText("SOUND3", [15, 2, 50, 15], "centred");
	 	}
	 	
	 	if(Button5.getValue() == 1)
	 		 	{
	 			 	g.setColour(Colours.grey);
	 			 	g.fillEllipse([3, 5, 8, 8]);	
	 		 	}
 	}


//Sound4
else if(obj.text.indexOf("Button4") != - 1)
 	{
	 	g.setColour(Colours.grey);
	 	g.fillEllipse([3, 5, 8, 8]);
	 	
	 	g.setColour(0xAAFFFFFF);
	 	g.setFont("Roboto", 10);
	 	g.drawAlignedText("SOUND4", [15, 2, 50, 15] , "centred");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 10);
		 	g.drawAlignedText("SOUND4", [15, 2, 50, 15], "centred");
	 	}
	 	
	 	if(Button5.getValue() == 1)
	 		 	{
	 			 	g.setColour(Colours.grey);
	 			 	g.fillEllipse([3, 5, 8, 8]);	
	 		 	}
 	}
 	
 //Ekeys
 else if(obj.text.indexOf("Button6") != - 1)
  	{
 	 	g.setColour(Colours.grey);
 	 	g.fillEllipse([3, 5, 8, 8]);
 	 	
 	 	g.setColour(0xAAFFFFFF);
 	 	g.setFont("Roboto", 10);
 	 	g.drawAlignedText("SOUND1", [15, 2, 50, 15] , "centred");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("SOUND1", [15, 2, 50, 15], "centred");
 	 	}
 	 	
 	 	if(Button10.getValue() == 1)
 	 	 		 	{
 	 	 			 	g.setColour(Colours.grey);
 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
 	 	 		 	}
 	 	
  	}
 
 
 //Sound2
 else if(obj.text.indexOf("Button7") != - 1)
  	{
 	 	g.setColour(Colours.grey);
 	 	g.fillEllipse([3, 5, 8, 8]);
 	 	
 	 	g.setColour(0xAAFFFFFF);
 	 	g.setFont("Roboto", 10);
 	 	g.drawAlignedText("SOUND2", [15, 2, 50, 15] , "centred");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("SOUND2", [15, 2, 50, 15], "centred");
 	 	}
 	 	if(Button10.getValue() == 1)
 	 	 	 	 		 	{
 	 	 	 	 			 	g.setColour(Colours.grey);
 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
 	 	 	 	 		 	}
  	}
 
 
 //Sound3
 else if(obj.text.indexOf("Button8") != - 1)
  	{
 	 	g.setColour(Colours.grey);
 	 	g.fillEllipse([3, 5, 8, 8]);
 	 	
 	 	g.setColour(0xAAFFFFFF);
 	 	g.setFont("Roboto", 10);
 	 	g.drawAlignedText("SOUND3", [15, 2, 50, 15] , "centred");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("SOUND3", [15, 2, 50, 15], "centred");
 	 	}
 	 	if(Button10.getValue() == 1)
 	 	 	 	 		 	{
 	 	 	 	 			 	g.setColour(Colours.grey);
 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
 	 	 	 	 		 	}
  	}
 
 
 //Sound4
 else if(obj.text.indexOf("Button9") != - 1)
  	{
 	 	g.setColour(Colours.grey);
 	 	g.fillEllipse([3, 5, 8, 8]);
 	 	
 	 	g.setColour(0xAAFFFFFF);
 	 	g.setFont("Roboto", 10);
 	 	g.drawAlignedText("SOUND4", [15, 2, 50, 15] , "centred");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("SOUND4", [15, 2, 50, 15], "centred");
 	 	}
 	 	if(Button10.getValue() == 1)
 	 	 	 	 		 	{
 	 	 	 	 			 	g.setColour(Colours.grey);
 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
 	 	 	 	 		 	}
  	}	
  	
  	
  	
  	
  	//Subor
  	 else if(obj.text.indexOf("Button-11") != - 1)
  	  	{
  	 	 	g.setColour(Colours.grey);
  	 	 	g.fillEllipse([3, 5, 8, 8]);
  	 	 	
  	 	 	g.setColour(0xAAFFFFFF);
  	 	 	g.setFont("Roboto", 10);
  	 	 	g.drawAlignedText("SOUND1", [15, 2, 50, 15] , "centred");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("SOUND1", [15, 2, 50, 15], "centred");
  	 	 	}
  	 	 	if(Button15.getValue() == 1)
  	 	 	 	 	 	 	 		 	{
  	 	 	 	 	 	 	 			 	g.setColour(Colours.grey);
  	 	 	 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
  	 	 	 	 	 	 	 		 	}
  	  	}
  	 
  	 
  	 //Sound2
  	 else if(obj.text.indexOf("Button-12") != - 1)
  	  	{
  	 	 	g.setColour(Colours.grey);
  	 	 	g.fillEllipse([3, 5, 8, 8]);
  	 	 	
  	 	 	g.setColour(0xAAFFFFFF);
  	 	 	g.setFont("Roboto", 10);
  	 	 	g.drawAlignedText("SOUND2", [15, 2, 50, 15] , "centred");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("SOUND2", [15, 2, 50, 15], "centred");
  	 	 	}
  	 	 	if(Button15.getValue() == 1)
  	 	 	 	 	 	 	 		 	{
  	 	 	 	 	 	 	 			 	g.setColour(Colours.grey);
  	 	 	 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
  	 	 	 	 	 	 	 		 	}
  	  	}
  	 
  	 
  	 //Sound3
  	 else if(obj.text.indexOf("Button-13") != - 1)
  	  	{
  	 	 	g.setColour(Colours.grey);
  	 	 	g.fillEllipse([3, 5, 8, 8]);
  	 	 	
  	 	 	g.setColour(0xAAFFFFFF);
  	 	 	g.setFont("Roboto", 10);
  	 	 	g.drawAlignedText("SOUND3", [15, 2, 50, 15] , "centred");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("SOUND3", [15, 2, 50, 15], "centred");
  	 	 	}
  	 	 	if(Button15.getValue() == 1)
  	 	 	 	 	 	 	 		 	{
  	 	 	 	 	 	 	 			 	g.setColour(Colours.grey);
  	 	 	 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
  	 	 	 	 	 	 	 		 	}
  	  	}
  	 
  	 
  	 //Sound4
  	 else if(obj.text.indexOf("Button-14") != - 1)
  	  	{
  	 	 	g.setColour(Colours.grey);
  	 	 	g.fillEllipse([3, 5, 8, 8]);
  	 	 	
  	 	 	g.setColour(0xAAFFFFFF);
  	 	 	g.setFont("Roboto", 10);
  	 	 	g.drawAlignedText("SOUND4", [15, 2, 50, 15] , "centred");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("SOUND4", [15, 2, 50, 15], "centred");
  	 	 	}
  	 	 	if(Button15.getValue() == 1)
  	 	 	 	 	 	 	 		 	{
  	 	 	 	 	 	 	 			 	g.setColour(Colours.grey);
  	 	 	 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
  	 	 	 	 	 	 	 		 	}
  	  	}	
 	
});