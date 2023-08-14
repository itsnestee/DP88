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
		g.addDropShadowFromAlpha(0x33000000, 15);

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
		g.addDropShadowFromAlpha(0x33000000, 15);
		
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
		g.addDropShadowFromAlpha(0x33000000, 15);
		
		var start = 2.5;
		var end = start  * 2 * obj.valueNormalized - start;
				
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		g.setColour(Colours.white);
		g.drawRect([a[2] / 2 - 3 / 2.7, 2, 2, 10], 8);
	}
	
	else if(obj.text.indexOf("aRev") != - 1)
	{
		g.setColour(Colours.darkgrey);
		g.fillEllipse([2, 2, 56, 56]);
		g.addDropShadowFromAlpha(0x33000000, 15);

		var start = 2.5;
		var end = start  * 2 * obj.valueNormalized - start;
	
		g.rotate(end, [a[2] / 2, a[3] / 2]);
		g.setColour(Colours.white);
    	g.drawRect([a[2] / 2 - 3 / 2.7, 3, 2, 15.5], 10);
	}
	
else if(obj.text.indexOf("lEQ") != - 1)
{
	g.setColour(Colours.darkgrey);
	g.fillEllipse([2, 2, 56, 56]);
	g.addDropShadowFromAlpha(0x33000000, 15);

	var start = 2.5;
	var end = start  * 2 * obj.valueNormalized - start;

	g.rotate(end, [a[2] / 2, a[3] / 2]);
	g.setColour(Colours.white);
    	g.drawRect([a[2] / 2 - 3 / 2.7, 3, 2, 15.5], 10);
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
	 	g.drawAlignedText("C7", [15, 2, 65, 15] , "left");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 10);
		 	g.drawAlignedText("C7", [15, 2, 65, 15], "left");
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
	 	g.setFont("Roboto", 9);
	 	g.drawAlignedText("CFX Premium", [15, 2, 75, 15] , "left");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 9);
		 	g.drawAlignedText("CFX Premium", [15, 2, 75, 15], "left");
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
	 	g.setFont("Roboto", 9);
	 	g.drawAlignedText("Power Grand", [15, 2, 65, 15] , "left");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 9);
		 	g.drawAlignedText("Power Grand", [15, 2, 65, 15], "left");
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
	 	g.drawAlignedText("Upright CP", [15, 2, 65, 15] , "left");
	 	
	 	if(obj.value)
	 	{
		 	g.setColour(0xFFFFF652);
		 	g.fillEllipse([3, 5, 8, 8]);
		 	
		 	g.setColour(0xFFFFFFFF);
		 	g.setFont("Roboto", 10);
		 	g.drawAlignedText("Upright CP", [15, 2, 65, 15], "left");
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
 	 	g.drawAlignedText("Ballad 1", [15, 2, 70, 15] , "left");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("Ballad 1", [15, 2, 70, 15], "left");
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
 	 	g.drawAlignedText("Ballad 2", [15, 2, 70, 15] , "left");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("Ballad 2", [15, 2, 70, 15], "left");
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
 	 	g.drawAlignedText("Rhodes", [15, 2, 70, 15] , "left");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("Rhodes", [15, 2, 70, 15], "left");
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
 	 	g.drawAlignedText("Rhodes Mk 1", [15, 2, 70, 15] , "left");
 	 	
 	 	if(obj.value)
 	 	{
 		 	g.setColour(0xFFFF5959);
 		 	g.fillEllipse([3, 5, 8, 8]);
 		 	
 		 	g.setColour(0xFFFFFFFF);
 		 	g.setFont("Roboto", 10);
 		 	g.drawAlignedText("Rhodes Mk 1", [15, 2, 70, 15], "left");
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
  	 	 	g.drawAlignedText("Bells", [15, 2, 70, 15] , "left");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("Bells", [15, 2, 70, 15], "left");
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
  	 	 	g.drawAlignedText("LS Organ", [15, 2, 70, 15] , "left");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("LS Organ", [15, 2, 70, 15], "left");
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
  	 	 	g.drawAlignedText("Strings", [15, 2, 70, 15] , "left");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("Strings", [15, 2, 70, 15], "left");
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
  	 	 	g.drawAlignedText("Worship Pads", [15, 2, 70, 15] , "left");
  	 	 	
  	 	 	if(obj.value)
  	 	 	{
  	 		 	g.setColour(0xFF009176);
  	 		 	g.fillEllipse([3, 5, 8, 8]);
  	 		 	
  	 		 	g.setColour(0xFFFFFFFF);
  	 		 	g.setFont("Roboto", 10);
  	 		 	g.drawAlignedText("Worship Pads", [15, 2, 70, 15], "left");
  	 	 	}
  	 	 	if(Button15.getValue() == 1)
  	 	 	 	 	 	 	 		 	{
  	 	 	 	 	 	 	 			 	g.setColour(Colours.grey);
  	 	 	 	 	 	 	 			 	g.fillEllipse([3, 5, 8, 8]);	
  	 	 	 	 	 	 	 		 	}
  }	
 	




	else if(obj.text.indexOf("promptYesButton") != - 1)
	{	
		g.setColour(0xFF171717);
		g.fillRoundedRectangle(obj.area, 3);
		
		g.setColour(0xFFFAF9F6);
		g.setOpacity(0.5);
		
		g.drawAlignedText("Yes", obj.area, "centred");
		
		if(obj.over)
		{
			g.setColour(0xFFFAF9F6);
			g.setOpacity(1);
					
			g.drawAlignedText("Yes", obj.area, "centred");
			
			
		}
	}
	
	
	
	else if(obj.text.indexOf("promptNoButton") != - 1)
	{	
		g.setColour(0xFF171717);
		g.fillRoundedRectangle(obj.area, 3);
		
		g.setColour(0xFFFAF9F6);
		g.setOpacity(0.5);
		
		g.drawAlignedText("No", obj.area, "centred");
		
		if(obj.over)
		{
			g.setColour(0xFFFAF9F6);
			g.setOpacity(1);
					
			g.drawAlignedText("No", obj.area, "centred");
			
			
		}
	}
	
	
	else if(obj.text.indexOf("showAgainButton") != - 1)
	{	
		g.setColour(0xAAFAF9F6);
		g.drawRoundedRectangle([4, 4, 20, 20 ], 3, 2);
		
		
		
		if(obj.value)
		{
			
			g.setColour(0xAAFAF9F6);		
			g.fillRoundedRectangle([4, 4, 20, 20 ], 3);
			
			
		}
	}
	
	else if(obj.text.indexOf("doneButton") != - 1)
	{	
		g.setColour(0xFF171717);
		g.fillRoundedRectangle(obj.area, 3);
		
		g.setColour(0xFFFAF9F6);
		g.setOpacity(0.5);
		
		g.drawAlignedText("Done", obj.area, "centred");
		
		if(obj.over)
		{
			g.setColour(0xFFFAF9F6);
			g.setOpacity(1);
					
			g.drawAlignedText("Done", obj.area, "centred");
			
			
		}
	}
	
	

});














//Alert Window
laf.registerFunction("drawAlertWindow", function(g, obj)
{
    
    g.fillAll(0xFF121212);
    
    var a = [0, 0, obj.area[2], 30];
    g.setColour(0xFF000000);
    g.fillRect(a);
    g.setColour(Colours.white);
    g.drawRect(obj.area, 0.3);
    g.setFont("Roboto", 13);
    g.drawAlignedText(obj.title, a, "centred");
});

laf.registerFunction("drawDialogButton", function(g, obj)
{
    //g.fillAll(0x22000000);
    
    g.setColour(0xFF191919);
    g.fillRoundedRectangle(obj.area, 5.0);
   
       
    g.setFont("Roboto", 9.0);
        
    g.setColour(0x99FAF9F6);
    g.drawAlignedText(obj.text, obj.area, "centred");
});




