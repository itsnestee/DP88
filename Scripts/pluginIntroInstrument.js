Content.makeFrontInterface(800, 550);

//Main Panels
const var wrappingPanel = Content.getComponent("wrappingPanel");
const var instrumentPanel = Content.getComponent("instrumentPanel");
const var Keys = Content.getComponent("Keys");


//Values
wrappingPanel.data.secs = 601;
wrappingPanel.data.checker = 600;

wrappingPanel.showControl(1);
instrumentPanel.showControl(0);
Keys.showControl(0);



wrappingPanel.setTimerCallback(function()
{

	if(wrappingPanel.data.secs > wrappingPanel.data.checker)
	{
		wrappingPanel.showControl(0);
		instrumentPanel.showControl(1);
		Keys.showControl(1);
		wrappingPanel.stopTimer();	
	}	
});

wrappingPanel.startTimer(wrappingPanel.data.secs); 







			

