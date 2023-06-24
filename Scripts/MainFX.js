const var MainFX = Content.getComponent("MainFX");

//REVERB
const var Button16 = Content.getComponent("Button16");
const var Knob16 = Content.getComponent("Knob16");
const var Knob17 = Content.getComponent("Knob17");
const var Knob18 = Content.getComponent("Knob18");
const var Knob19 = Content.getComponent("Knob19");
const var SimpleReverb1 = Synth.getEffect("Simple Reverb1");

//DELAY
const var Button17 = Content.getComponent("Button17");
const var Knob20 = Content.getComponent("Knob20");
const var Knob21 = Content.getComponent("Knob21");
const var Knob22 = Content.getComponent("Knob22");
const var Knob23 = Content.getComponent("Knob23");
const var Knob24 = Content.getComponent("Knob24");
const var Delay1 = Synth.getEffect("Delay1");

//EQ
const var Button18 = Content.getComponent("Button18");
const var Knob25 = Content.getComponent("Knob25");
const var Knob26 = Content.getComponent("Knob26");
const var Knob27 = Content.getComponent("Knob27");
const var Knob28 = Content.getComponent("Knob28");
const var Filter1 = Synth.getEffect("Filter1");

MainFX.setPaintRoutine(function(g)
{
	
	//Gradient(LayerBlur later)
	g.setColour(0x59000000);
	g.fillRect([0, 0, 800, 195]);
	g.setGradientFill([0x1CFFFFFF, 0, 0, 0x0DFFFFFF, 800, 195]);
	g.fillRect([0, 0, 800, 195]);

	
	//Separators
	g.setColour(0xFF676767);
	g.drawLine(250, 250, 10, 185, 0.5);
	g.drawLine(550, 550, 10, 185, 0.5);
	
	//RVERB PARAM TEXT

	if(Button16.getValue() == 0)
	{
		g.setColour(0xFFFFFFFF);
		g.setFont("Roboto", 20);
		g.drawAlignedText("REVERB", [80, 15, 90, 15], 				"centred");		
	}
	
	else
	{
		g.setColour(0x23FFFFFF);
		g.setFont("Roboto", 20);
		g.drawAlignedText("REVERB", [80, 15, 90, 15], "centred");		
	}

	
	
	
	g.setColour(0xFFFFFFFF);
	g.setFont("Roboto", 10);
	g.drawAlignedText("SIZE", [55, 80, 30, 15], "centred");
	g.drawAlignedText("WIDTH", [155, 80, 40, 15], "centred");
	g.drawAlignedText("DAMPING", [50, 160, 55, 15], "centred");
	g.drawAlignedText("WET/MIX", [150, 160, 55, 15], "centred");
	
	//DLAY PARAM TEXT
	if(Button17.getValue() == 0)
	{
		g.setColour(0xFFFFFFFF);
		g.setFont("Roboto", 20);
		g.drawAlignedText("DELAY", [355, 15, 90, 15], "centred");
	}
	else
	{
		g.setColour(0x26FFFFFF);
		g.setFont("Roboto", 20);
		g.drawAlignedText("DELAY", [355, 15, 90, 15], "centred");
	}

	
	
	
	
	
	g.setColour(0xFFFFFFFF);
	g.setFont("Roboto", 10);
	g.drawAlignedText("LEFT", [330, 80, 30, 15], "centred");
	g.drawAlignedText("DELAY", [325, 90, 40, 15], "centred");
	g.drawAlignedText("RIGHT", [425, 80, 40, 15], "centred");
	g.drawAlignedText("DELAY", [425, 90, 40, 15], "centred");	
	g.drawAlignedText("LEFT", [275, 160, 40, 15], "centred");
	g.drawAlignedText("FEEDBACK", [270, 170, 55, 15], "centred");
	g.drawAlignedText("RIGHT", [375, 160, 40, 15], "centred");
	g.drawAlignedText("FEEDBACK", [370, 170, 55, 15], "centred");
	g.drawAlignedText("MIX", [468, 160, 30, 15], "centred");
	
	
	//EQ PARAM TEXT
	if(Button18.getValue() == 0)
	{
		g.setColour(0xFFFFFFFF);
		g.setFont("Roboto", 20);
		g.drawAlignedText("EQ", [635, 15, 30, 15], "centred");
	}
	else
	{
		g.setColour(0x26FFFFFF);
		g.setFont("Roboto", 20);
		g.drawAlignedText("EQ", [635, 15, 30, 15], "centred");	
	}


	g.setColour(0xFFFFFFFF);
	g.setFont("Roboto", 10);
	g.drawAlignedText("FREQUENCY", [575, 80, 70, 15], "centred");
	g.drawAlignedText("Q", [685, 80, 40, 15], "centred");
	g.drawAlignedText("INTENSITY", [580, 160, 55, 15], "centred");
	g.drawAlignedText("WET/MIX", [680, 160, 55, 15], "centred");
	
});


MainFX.setTimerCallback(function()
{
	this.repaint();
});

MainFX.startTimer(30);

//FX CALLBACKS

//REVERB

//Size
inline function onKnob16Control(component, value)
{
	SimpleReverb1.setAttribute(0, value);
};

Knob16.setControlCallback(onKnob16Control);

//Width
inline function onKnob17Control(component, value)
{
	SimpleReverb1.setAttribute(4, value);
};

Knob17.setControlCallback(onKnob17Control);

//Damping
inline function onKnob18Control(component, value)
{
	SimpleReverb1.setAttribute(1, value);
};

Knob18.setControlCallback(onKnob18Control);


//Wet/Mix

inline function onKnob19Control(component, value)
{
	SimpleReverb1.setAttribute(2, value);
};

Knob19.setControlCallback(onKnob19Control);

//Bypass

inline function onButton16Control(component, value)
{
	SimpleReverb1.setBypassed(value);
};

Button16.setControlCallback(onButton16Control);


//DELAY

//Left Delay

inline function onKnob20Control(component, value)
{
	Delay1.setAttribute(0, value);
};

Knob20.setControlCallback(onKnob20Control);

//Right Delay

inline function onKnob21Control(component, value)
{
	Delay1.setAttribute(1, value);
};

Content.getComponent("Knob21").setControlCallback(onKnob21Control);

//Left  Feedback

inline function onKnob22Control(component, value)
{
	Delay1.setAttribute(2, value);
};

Knob22.setControlCallback(onKnob22Control);


//Right Feedback

inline function onKnob23Control(component, value)
{
	Delay1.setAttribute(3, value);
};

Knob23.setControlCallback(onKnob23Control);

//Wet Mix
inline function onKnob24Control(component, value)
{
	Delay1.setAttribute(6, value);
};

Knob24.setControlCallback(onKnob24Control);

//Bypass

inline function onButton17Control(component, value)
{
	Delay1.setBypassed(value);
};

Content.getComponent("Button17").setControlCallback(onButton17Control);



//EQ
//FREQUENCY
inline function onKnob25Control(component, value)
{
	Filter1.setAttribute(1, value);
};

Knob25.setControlCallback(onKnob25Control);

//Q
inline function onKnob26Control(component, value)
{
	Filter1.setAttribute(2, value);
};

Knob26.setControlCallback(onKnob26Control);

//Intensity
inline function onKnob27Control(component, value)
{
	Filter1.setAttribute(5, value);
};

Knob27.setControlCallback(onKnob27Control);


//Gain
inline function onKnob28Control(component, value)
{
	Filter1.setAttribute(0, value);
};

Knob28.setControlCallback(onKnob28Control);

//Bypass

inline function onButton18Control(component, value)
{
	Filter1.setBypassed(value);
};

Button18.setControlCallback(onButton18Control);
