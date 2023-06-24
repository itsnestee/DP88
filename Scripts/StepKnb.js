inline function SelK(name, x, y)
{
	local frame = Content.addPanel(name, x, y);
    
    Content.setPropertiesFromJSON(name,  
    {
    	"width" : 100,
    	"height" : 100,
    	"saveInPreset" : 1,
    	"allowCallbacks" : "Clicks, Hover & Dragging"
    });
    
    frame.setPaintRoutine(function(g)
    {
		g.setColour(Colours.yellow);

    	g.drawEllipse([2.5, 2.5, this.getWidth()-5, this.getHeight()-5], 5);
    	
    	var angle = Math.PI/4 - this.getValue()*Math.PI/6;
    	var lineX = Math.cos(angle);
    	var lineY = Math.sin(angle);
    	
    	g.drawLine(this.getWidth()/2,
    			   this.getWidth()/2 + lineX * this.getWidth()/2,
    			   this.getHeight()/2,
    			   this.getHeight()/2 - lineY * this.getHeight()/2, 5);
    });
    
    
    frame.setMouseCallback(function(event)
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
    
    return frame;
};


const var SelKnob = SelK("SelKnob", 100, 200);


inline function onSelKnobControl(component, value)
{
	Console.print(value);
};
SelKnob.setControlCallback(onSelKnobControl);