//Ekeys

//PIANO
const var Ekeys = Content.getComponent("Ekeys");
const var selK1 = Content.getComponent("selK1");
//SOUNDSLABEL
const var Button6 = Content.getComponent("Button6");
const var Button7 = Content.getComponent("Button7");
const var Button8 = Content.getComponent("Button8");
const var Button9 = Content.getComponent("Button9");
//SAMPLER
const var Knob10 = Content.getComponent("Knob10");
const var EKeys = Synth.getChildSynth("EKeys");
const var Button10 = Content.getComponent("Button10");
//ADSR
const var AHDSREnvelope2 = Synth.getModulator("AHDSR Envelope2");
const var Knob6 = Content.getComponent("Knob6");
const var Knob7 = Content.getComponent("Knob7");
const var Knob8 = Content.getComponent("Knob8");
const var Knob9 = Content.getComponent("Knob9");





//PIANO
//glass
Ekeys.setPaintRoutine(function(g)
{		
	//GlassMorphic Effect
	g.fillAll(0x09FFFFFF);
	g.beginLayer(0);
	g.boxBlur(1);
	g.endLayer();
	
	//Stroke
if(Button10.getValue() == 0)
{
	g.setGradientFill([0x26FFFFFF, 0, 0, 0x0DFFFFFF, 230, 170]);
	g.fillRoundedRectangle([0, 0, 230, 170], 8);
	g.setGradientFill([0xFFFF5959, 0, 0, 0xFF000000, 230, 170]);
	g.drawRoundedRectangle(this.getLocalBounds(1), 8, 1);	
}

else
{
	g.setGradientFill([0x26FFFFFF, 0, 0, 0x0DFFFFFF, 230, 170]);
	g.fillRoundedRectangle([0, 0, 230, 170], 8);
	g.setGradientFill([0x66FFFFFF, 0, 0, 0xFF000000, 230, 170]);
	g.drawRoundedRectangle(this.getLocalBounds(1), 8, 1);	
}
	
	
	//Volume Lines
	g.setColour(Colours.white);
	g.fillRect([164, 69, 1, 1]);
	g.fillRect([166, 69, 1, 1]);
	g.fillRect([215, 60, 1, 10]);
	g.fillRect([217, 60, 1, 10]);
	
	//Param Names
	g.setColour(Colours.white);
	g.setFont("Roboto", 8);
	g.drawText("ATTACK", [20, 155, 30, 10]);
	g.drawText("DECAY", [70, 155, 30, 10]);
	g.drawText("SUSTAN", [115, 155, 40, 10]);
	g.drawText("RELEASE", [165, 155, 40, 10]);
});
	
Ekeys.setTimerCallback(function()
{
	this.repaint();
});

Ekeys.startTimer(30);

	
	
//SelectionKnob
selK1.setPaintRoutine(function(g)
{
	if(Button10.getValue() == 0)
	{
	  g.setColour(0xFFFF5959); //Red
	  g.drawEllipse([2.5, 2.5, this.getWidth()-5, this.getHeight()-5], 3);
	  g.setColour(0xFF171717); //black
	  g.fillEllipse([5.5, 5.5, this.getWidth() - 11, this.getHeight() - 11]);
	}
	
	else
	{
		g.setColour(0x66FFFFFF); //grey
		g.drawEllipse([2.5, 2.5, this.getWidth()-5, this.getHeight()-5], 3);
		g.setColour(0xFF171717); //black
		g.fillEllipse([5.5, 5.5, this.getWidth() - 11, this.getHeight() - 11]);	
		
	}

	if(Button10.getValue() == 0)
	{
		g.setColour(0xFFFF5959); //Red
		var angle = Math.PI/4 - this.getValue()*Math.PI/6;
		var lineX = Math.cos(angle);
		var lineY = Math.sin(angle);
		g.drawLine(this.getWidth()/2,
		this.getWidth()/2 + lineX * this.getWidth()/2  - 3,
		this.getHeight()/2,
		this.getHeight()/2 - lineY * this.getHeight()/2, 3);
	}
	
	else
	{
		g.setColour(0x66FFFFFF); //grey
		var angle = Math.PI/4 - this.getValue()*Math.PI/6;
		var lineX = Math.cos(angle);
		var lineY = Math.sin(angle);
		g.drawLine(this.getWidth()/2,
		this.getWidth()/2 + lineX * this.getWidth()/2  - 3,
		this.getHeight()/2,
		this.getHeight()/2 - lineY * this.getHeight()/2, 3);
	}
	
	
});
	    
//Mouse CallBack	    
selK1.setMouseCallback(function(event)
{
	if (event.clicked)
	 {
	   // save the value from the mouse click
	   this.data.downValue = this.getValue();
	 }
		            
    if (event.drag)
	 {
	   var distance = (event.dragX - event.dragY) / 50;
	   var newVal = this.data.downValue + Math.round(distance);
	   newVal = Math.range(newVal, 0, 3);
				this.setValue(newVal);
				
			    this.changed();
	 }
});
	  
selK1.setTimerCallback(function()
{
	this.repaint();
});

selK1.startTimer(30);

//PARAMETER CALLBACKS
//Knob control
inline function onselK1Control(component, value)
{
	if(value == 0)
	{
		Button6.setValue(1);
		Button7.setValue(0);
		Button8.setValue(0);
		Button9.setValue(0);
	
	}
	
	else if(value == 1)
	{
		Button6.setValue(0);
		Button7.setValue(1);
		Button8.setValue(0);
		Button9.setValue(0);
	
	}
	
	else if(value == 2)
	{
		Button6.setValue(0);
		Button7.setValue(0);
		Button8.setValue(1);
		Button9.setValue(0);
	
	}
	else if(value == 3)
	{
		Button6.setValue(0);
		Button7.setValue(0);
		Button8.setValue(0);
		Button9.setValue(1);

	}
};

selK1.setControlCallback(onselK1Control);



//Pvolume
inline function onKnob10Control(component, value)
{
	EKeys.setAttribute(EKeys.Gain, value);
};

Knob10.setControlCallback(onKnob10Control);

//Pattack
inline function onKnob6Control(component, value)
{
	AHDSREnvelope2.setAttribute(2, value);
};

Knob6.setControlCallback(onKnob6Control);

//Pdecay
inline function onKnob7Control(component, value)
{
	AHDSREnvelope2.setAttribute(5, value);
};

Knob7.setControlCallback(onKnob7Control);

//PSustain
inline function onKnob8Control(component, value)
{
	AHDSREnvelope2.setAttribute(6, value);
};

Knob8.setControlCallback(onKnob8Control);

//Prelease
inline function onKnob9Control(component, value)
{
	AHDSREnvelope2.setAttribute(7, value);
};

Knob9.setControlCallback(onKnob9Control);

//Switch
inline function onButton10Control(component, value)
{
	EKeys.setBypassed(value);
};

Button10.setControlCallback(onButton10Control);


//ButtonsCallback
//Sound1
inline function onButton6Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK1.setValue(0);
	}
	
	
};

Button6.setControlCallback(onButton6Control);


//Sound2
inline function onButton7Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK1.setValue(1);
	}
	
};

Button7.setControlCallback(onButton7Control);

//Sound3
inline function onButton8Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK1.setValue(2);
	}
	
};

Button8.setControlCallback(onButton8Control);


//Sound4
inline function onButton9Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK1.setValue(3);
	}
	
};

Button9.setControlCallback(onButton9Control);

