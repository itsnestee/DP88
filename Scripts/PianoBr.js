
//PIANO

const var piano = Content.getComponent("piano");
const var selK = Content.getComponent("selK");
//SOUNDSLABEL
const var Button1 = Content.getComponent("Button1");
const var Button2 = Content.getComponent("Button2");
const var Button3 = Content.getComponent("Button3");
const var Button4 = Content.getComponent("Button4");
//SAMPLER
const var Knob5 = Content.getComponent("Knob5");
const var Pianos = Synth.getChildSynth("Pianos");
const var Button5 = Content.getComponent("Button5");
//ADSR
const var AHDSREnvelope1 = Synth.getModulator("AHDSR Envelope1");
const var Knob1 = Content.getComponent("Knob1");
const var Knob2 = Content.getComponent("Knob2");
const var Knob3 = Content.getComponent("Knob3");
const var Knob4 = Content.getComponent("Knob4");





//PIANO
//glass
piano.setPaintRoutine(function(g)
{		

	
	//Stroke
	if(Button5.getValue() == 0)
	{
		g.setGradientFill([0x26FFFFFF, 0, 0, 0x0DFFFFFF, 230, 170]);
		g.fillRoundedRectangle([0, 0, 230, 170], 8);
		g.setGradientFill([0xFFFFF652, 0, 0, 0xFF000000, 230, 170]);
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
	
piano.setTimerCallback(function()
{
	this.repaint();
});

piano.startTimer(30);
	
//SelectionKnob
selK.setPaintRoutine(function(g)
{
	if(Button5.getValue() == 0)
	{
	  g.setColour(0xFFFFF652); //yellow
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

	if(Button5.getValue() == 0)
	{
		g.setColour(0xFFFFF652); //yellow
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
selK.setMouseCallback(function(event)
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
	  
selK.setTimerCallback(function()
{
	this.repaint();
});

selK.startTimer(30);

//PARAMETER CALLBACKS
//Knob control
inline function onselKControl(component, value)
{
	if(value == 0)
	{
		Button1.setValue(1);
		Button2.setValue(0);
		Button3.setValue(0);
		Button4.setValue(0);
		Pianos.asSampler().loadSampleMap("C7");
	
	}
	
	else if(value == 1)
	{
		Button1.setValue(0);
		Button2.setValue(1);
		Button3.setValue(0);
		Button4.setValue(0);
		Pianos.asSampler().loadSampleMap("CFX Premium");
	
	}
	
	else if(value == 2)
	{
		Button1.setValue(0);
		Button2.setValue(0);
		Button3.setValue(1);
		Button4.setValue(0);
		Pianos.asSampler().loadSampleMap("PwerGrand");
	
	}
	else if(value == 3)
	{
		Button1.setValue(0);
		Button2.setValue(0);
		Button3.setValue(0);
		Button4.setValue(1);
		Pianos.asSampler().loadSampleMap("Upright CP");

	}
};

selK.setControlCallback(onselKControl);



//Pvolume
inline function onKnob5Control(component, value)
{
	Pianos.setAttribute(Pianos.Gain, value);
};

Knob5.setControlCallback(onKnob5Control);

//Pattack
inline function onKnob1Control(component, value)
{
	AHDSREnvelope1.setAttribute(2, value);
};

Knob1.setControlCallback(onKnob1Control);

//Pdecay
inline function onKnob2Control(component, value)
{
	AHDSREnvelope1.setAttribute(5, value);
};

Knob2.setControlCallback(onKnob2Control);

//PSustain
inline function onKnob3Control(component, value)
{
	AHDSREnvelope1.setAttribute(6, value);
};

Knob3.setControlCallback(onKnob3Control);

//Prelease
inline function onKnob4Control(component, value)
{
	AHDSREnvelope1.setAttribute(7, value);
};

Knob4.setControlCallback(onKnob4Control);

//Switch
inline function onButton5Control(component, value)
{
	Pianos.setBypassed(value);
};

Button5.setControlCallback(onButton5Control);


//ButtonsCallback
//Sound1
inline function onButton1Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK.setValue(0);
		Pianos.asSampler().loadSampleMap("C7");
	}
	
	
};

Button1.setControlCallback(onButton1Control);


//Sound2
inline function onButton2Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK.setValue(1);
		Pianos.asSampler().loadSampleMap("CFX Premium");
	}
	
};

Button2.setControlCallback(onButton2Control);

//Sound3
inline function onButton3Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK.setValue(2);
		Pianos.asSampler().loadSampleMap("PwerGrand");
	}
	
};

Button3.setControlCallback(onButton3Control);


//Sound4
inline function onButton4Control(component, value)
{
	//CallSampleMAp
	if(value == 1)
	{
		selK.setValue(3);
		Pianos.asSampler().loadSampleMap("Upright CP");
	}
	
};

Button4.setControlCallback(onButton4Control);

