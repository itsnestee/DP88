Processor 
Type SynthChain ID InstFx Bypassed Gain 	      �?Balance 	        VoiceLimit 	      P@KillFadeTime 	      4@IconColour 0 packageName  BuildVersion �  EditorStates BodyShown 0 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type ScriptProcessor ID Interface Bypassed Script �Content.makeFrontInterface(800, 550);

include("BlackKeys.js");
include("PathAssets.js");
include("Navbar.js");
include("LandGui.js");

//PIANO

namespace SoundBank
{
	inline function glass(name, x, y)
	{
		local widget = Content.addPanel(name, x , y);
		Content.setPropertiesFromJSON(name, 
		{
			"width" : 230,
			"height" : 170
			
		});
		
		widget.setPaintRoutine(function(g)
		{	
				g.fillAll(0x09FFFFFF);
				g.beginLayer(1);
				g.boxBlur(1);
				g.endLayer();
			
				g.setGradientFill([0x26FFFFFF, 0, 0, 0x0DFFFFFF, 230, 170]);
				g.fillRoundedRectangle([0, 0, 230, 170], 8);
				g.setGradientFill([0xFFFFF562, 0, 0, 0xFF000000, 230, 170]);
				g.drawRoundedRectangle(this.getLocalBounds(1), 8, 1);
		
		});
		
		return widget;
	};
	
	SoundBank.glass("piano", 10, 40);
	
	
	
	
	
	
	
}function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
  EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1  ChildProcessors   Content   UIData  ContentProperties DeviceType 	Desktop Component 
type ScriptPanel id 	SpacerL x 	        y 	     `}@width 	      T@height 	      T@borderSize 	        borderRadius 	        itemColour 4279571733 itemColour2 1075123477  Component type ScriptFloatingTile id Keys x 	      T@y 	     `}@width 	      �@height 	      T@ContentType 
Keyboard bgColour 4284769380 itemColour 452984831 itemColour2 4294967295 textColour 0 Data ^{
  "KeyWidth": 14.0,
  "DisplayOctaveNumber": false,
  "LowKey": 24,
  "HiKey": 101,
  "CustomGraphics": true,
  "DefaultAppearance": false,
  "BlackKeyRatio": 0.699999988079071,
  "ToggleMode": false,
  "MidiChannel": 1,
  "UseVectorGraphics": true,
  "UseFlatStyle": false,
  "MPEKeyboard": false,
  "MPEStartChannel": 2,
  "MPEEndChannel": 16
}  Component 
type ScriptPanel id 	SpacerR x 	     ��@y 	     `}@width 	      T@height 	      T@borderSize 	        borderRadius 	        itemColour 4279571733 itemColour2 1075123477  Component 	type ScriptImage id ScriptImage1 x 	        y 	      �?width 	      �@height 	     `}@fileName {PROJECT_FOLDER}Main.png alpha 	   �Q��?visible 0  Component type ScriptPanel id LandingUi x 	        y 	        width 	      �@height 	     �k@borderSize 	        itemColour 0 itemColour2 0 bgColour 0 borderRadius 	        Component type ScriptPanel id SoundLine x 	      E@y 	      G@width 	     `�@height 	     `e@bgColour 0 itemColour 0 itemColour2 0 textColour 0 borderSize 	        parentComponent LandingUi Component type ScriptPanel id SlineLayer x 	      �?y 	      �?width 	     P�@height 	      e@parentComponent SoundLine borderSize 	        itemColour 4279374354 bgColour 
51515922 itemColour2 4279374354 locked 1  Component 	type ScriptPanel id RotImg x 	        y 	        width 	     �r@height 	     �k@parentComponent LandingUi borderSize 	        borderRadius 	         Component 	type ScriptPanel id 	RotImg1 x 	     @@y 	        width 	     �r@height 	     �k@parentComponent LandingUi borderSize 	        borderRadius 	         Component type ScriptPanel id 	RotImg2 x 	     �t@y 	        width 	      _@height 	      i@parentComponent LandingUi borderSize 	        borderRadius 	        itemColour 0 bgColour 0 itemColour2 0 textColour 0 Component 
type ScriptPanel id 	Lowercp x 	        y 	     �a@width 	      _@height 	      N@parentComponent 	RotImg2 text Lower borderSize 	        borderRadius 	         Component 	type ScriptPanel id Midcp x 	        y 	      T@width 	      _@height 	      N@parentComponent 	RotImg2 borderSize 	        borderRadius 	         Component 	type ScriptPanel id Hicp1 x 	        y 	      4@width 	      _@height 	      N@parentComponent 	RotImg2 borderSize 	        borderRadius 	         Component type ScriptPanel id 	DpTitle x 	     �Z@y 	      I@width 	     ��@height 	     @b@parentComponent LandingUi bgColour 0 itemColour 0 itemColour2 0 textColour 0 borderSize 	        borderRadius 	         Component type ScriptPanel id LayerBlur x 	        y 	        width 	      �@height 	      :@borderSize 	        borderRadius 	         Component type ScriptPanel id Navbar x 	        y 	        width 	      �@height 	      :@borderSize 	        borderRadius 	        bgColour 0 itemColour 0 itemColour2 0 Component type ScriptPanel id Home x 	     �p@y 	        width 	      I@height 	      :@bgColour 0 itemColour 0 itemColour2 0 textColour 0 borderSize 	        borderRadius 	        allowCallbacks Clicks & Hover parentComponent Navbar  Component type ScriptPanel id 	FxTitle x 	     �v@y 	        width 	     �R@height 	      :@parentComponent Navbar bgColour 0 itemColour 0 itemColour2 0 textColour 0 borderSize 	        borderRadius 	        allowCallbacks Clicks & Hover  Component type ScriptPanel id 
SetTitle x 	     @~@y 	        width 	     �U@height 	      :@parentComponent Navbar bgColour 0 itemColour 0 itemColour2 0 textColour 0 borderSize 	        borderRadius 	        allowCallbacks Clicks & Hover  Component type ScriptPanel id ContactsTitle x 	     8�@y 	        width 	     �S@height 	      :@parentComponent Navbar bgColour 0 itemColour 0 itemColour2 0 textColour 0 borderSize 	        borderRadius 	        allowCallbacks Clicks & Hover  Component 
type ScriptPanel id InstFx x 	        y 	     �k@borderSize 	        borderRadius 	        width 	      �@height 	     �o@itemColour 4279571733 itemColour2 4279571733 Component type ScriptPanel id piano x 
   y (   width 	�       height 	�       parentComponent InstFx  Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� macro_controls  macro name 	Macro 1 value 0.0 midi_cc -1  macro name 	Macro 2 value 0.0 midi_cc -1  macro name 	Macro 3 value 0.0 midi_cc -1  macro name 	Macro 4 value 0.0 midi_cc -1  macro name 	Macro 5 value 0.0 midi_cc -1  macro name 	Macro 6 value 0.0 midi_cc -1  macro name 	Macro 7 value 0.0 midi_cc -1  macro name 	Macro 8 value 0.0 midi_cc -1  MidiAutomation   MPEData Enabled  