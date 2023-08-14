//Subs

//KEYS
const var Subor = Content.getComponent("Subor");
const var selK2 = Content.getComponent("selK2");
//SOUNDSLABEL
const var Button11 = Content.getComponent("Button-11");
const var Button12 = Content.getComponent("Button-12");
const var Button13 = Content.getComponent("Button-13");
const var Button14 = Content.getComponent("Button-14");
//SAMPLER
const var Knob15 = Content.getComponent("Knob15");
const var Subs = Synth.getChildSynth("Subs");
const var Button15 = Content.getComponent("Button15");
//ADSR
const var AHDSREnvelope3 = Synth.getModulator("AHDSR Envelope3");
const var Knob11 = Content.getComponent("Knob11");
const var Knob12 = Content.getComponent("Knob12");
const var Knob13 = Content.getComponent("Knob13");
const var Knob14 = Content.getComponent("Knob14");
//FX
const var HardcodedMasterFX2 = Synth.getEffect("HardcodedMasterFX2");




//PIANO
//glass
Subor.setPaintRoutine(function(g)
{		
	
	//Stroke
if(Button15.getValue() == 0)
{
	g.setGradientFill([0x26FFFFFF, 0, 0, 0x0DFFFFFF, 230, 170]);
	g.fillRoundedRectangle([0, 0, 230, 170], 8);
	g.setGradientFill([0xFF009176, 0, 0, 0xFF000000, 230, 170]);
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
	g.drawText("SHIMMER", [115, 155, 40, 10]);
	g.drawText("RELEASE", [165, 155, 40, 10]);
});
	
Subor.setTimerCallback(function()
{
	this.repaint();
});	
Subor.startTimer(30);
	
//SelectionKnob
selK2.setPaintRoutine(function(g)
{
if(Button15.getValue() == 0)
{
  g.setColour(0xFF009176); //Green
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

if(Button15.getValue() == 0)
{
	g.setColour(0xFF009176); //Green
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
selK2.setMouseCallback(function(event)
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
	  
selK2.setTimerCallback(function()
{
	this.repaint();
});

selK2.startTimer(30);

//PARAMETER CALLBACKS
//Knob control
inline function onselK2Control(component, value)
{
	if(value == 0)
	{
		Button11.setValue(1);
		Button12.setValue(0);
		Button13.setValue(0);
		Button14.setValue(0);
		Subs.asSampler().loadSampleMap("Bells");
	
	}
	
	else if(value == 1)
	{
		Button11.setValue(0);
		Button12.setValue(1);
		Button13.setValue(0);
		Button14.setValue(0);
		Subs.asSampler().loadSampleMap("LS Organ");
	
	}
	
	else if(value == 2)
	{
		Button11.setValue(0);
		Button12.setValue(0);
		Button13.setValue(1);
		Button14.setValue(0);
		Subs.asSampler().loadSampleMap("Strings");
	
	}
	else if(value == 3)
	{
		Button11.setValue(0);
		Button12.setValue(0);
		Button13.setValue(0);
		Button14.setValue(1);
		Subs.asSampler().loadSampleMap("Worship Pad");

	}
};

selK2.setControlCallback(onselK2Control);



//Pvolume
inline function onKnob15Control(component, value)
{
	Subs.setAttribute(Subs.Gain, value);
};

Knob15.setControlCallback(onKnob15Control);

//Pattack
inline function onKnob11Control(component, value)
{
	AHDSREnvelope3.setAttribute(2, value);
};

Knob11.setControlCallback(onKnob11Control);

//Pdecay
inline function onKnob12Control(component, value)
{
	AHDSREnvelope3.setAttribute(5, value);
};

Knob12.setControlCallback(onKnob12Control);

//PShimmer
inline function onKnob13Control(component, value)
{
	HardcodedMasterFX2.setAttribute(0, value);
};

Knob13.setControlCallback(onKnob13Control);

//Prelease
inline function onKnob14Control(component, value)
{
	AHDSREnvelope3.setAttribute(7, value);
};

Knob14.setControlCallback(onKnob14Control);

//Switch
inline function onButton15Control(component, value)
{
	Subs.setBypassed(value);
};

Button15.setControlCallback(onButton15Control);


//ButtonsCallback
//Sound1
inline function onButton11Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK2.setValue(0);
		Subs.asSampler().loadSampleMap("Bells");
	}
	
	
};

Button11.setControlCallback(onButton11Control);


//Sound2
inline function onButton12Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK2.setValue(1);
		Subs.asSampler().loadSampleMap("LS Organ");
	}
	
};

Button12.setControlCallback(onButton12Control);

//Sound3
inline function onButton13Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK2.setValue(2);
		Subs.asSampler().loadSampleMap("Strings");
	}
	
};

Button13.setControlCallback(onButton13Control);


//Sound4
inline function onButton14Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK2.setValue(3);
		Subs.asSampler().loadSampleMap("Worship Pad");
	}
	
};

Button14.setControlCallback(onButton14Control);


