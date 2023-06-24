Synth.deferCallbacks(true);

//Balls
const var pnlAni = Content.getComponent("pnlAni");
const var pnlAni1 = Content.getComponent("pnlAni1");
const var pnlAni2 = Content.getComponent("pnlAni2");
const var pnlAni3 = Content.getComponent("pnlAni3");
const var pnlAni4 = Content.getComponent("pnlAni4");


pnlAni.setPosition(10, 10, 100, 100);
pnlAni1.setPosition(130, 120, 120, 120);
pnlAni2.setPosition(340, 50, 120, 120);
pnlAni3.setPosition(530, 120, 120, 120);
pnlAni4.setPosition(670, 10, 100, 100);




//PaintRoutines

pnlAni.setPaintRoutine(function(g)
{
	g.setGradientFill([0xFF595959, 1, 1, 0xFF191919, 60, 60]);
	g.fillEllipse([1, 1, 100, 100]);
});


pnlAni1.setPaintRoutine(function(g)
{
	g.setGradientFill([0xFFFFE652, 1, 1, 0xFF191919, 80, 80]);
	g.fillEllipse([1, 1, 118, 118]);
	g.setColour(0x1D000000);
	g.fillEllipse([1, 1, 118, 118]);
});


pnlAni2.setPaintRoutine(function(g)
{
	g.setGradientFill([0xFFFF5959, 1, 1, 0xFF191919, 80, 80]);
	g.fillEllipse([1, 1, 118, 118]);
	g.setColour(0x1D000000);
	g.fillEllipse([1, 1, 118, 118]);
});

pnlAni3.setPaintRoutine(function(g)
{
	g.setGradientFill([0xFF009176, 1, 1, 0xFF191919, 80, 80]);
	g.fillEllipse([1, 1, 118, 118]);
	g.setColour(0x1D000000);
	g.fillEllipse([1, 1, 118, 118]);
});

pnlAni4.setPaintRoutine(function(g)
{
	g.setGradientFill([0xFF595959, 1, 1, 0xFF191919, 60, 60]);
	g.fillEllipse([1, 1, 100, 100]);
});
