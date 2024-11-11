
// Global variables that will store the toolbox, colour palette, and helper functions.
var toolbox = null;
var colourP = null;
var helpers = null;
var blurTool = null;

function setup() {
    // Create a canvas to fill the content div from index.html
    canvasContainer = select('#content');
    var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
    c.parent("content");

    // Create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();

    // Create a toolbox for storing the tools
    toolbox = new Toolbox();

    // Add the tools to the toolbox
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
    var sprayCan = new SprayCanTool();
    toolbox.addTool(sprayCan);
    toolbox.addTool(new mirrorDrawTool());
    var eraser = new EraserTool();
    eraser.showSizeOptions();
    toolbox.addTool(eraser);
    var starTrail = new StarTrailTool();
    toolbox.addTool(starTrail);
    blurTool = new BlurTool();
    toolbox.addTool(blurTool);

    background(255);
}



function draw() {
    // Handle drawing based on the selected tool
    if (toolbox.selectedTool.constructor === StarTrailTool) {
        toolbox.selectedTool.draw();
    } else if (toolbox.selectedTool.constructor === EraserTool) {
        toolbox.selectedTool.erase();
    } else if (toolbox.selectedTool.hasOwnProperty("draw")) {
        // Draw on the canvas
        toolbox.selectedTool.draw();
    } else {
        alert("It doesn't look like your tool has a draw method!");
    }
}















