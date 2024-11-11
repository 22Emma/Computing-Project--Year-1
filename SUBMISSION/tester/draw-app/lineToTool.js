//LineToTool Constructor function
function LineToTool() {
  // Properties of the tool
  this.icon = "assets/lineTo.jpg";
  this.name = "LineToTool";

  // Variables to store the starting coordinates of the mouse and the drawing state
  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  // Line thickness and slider
  this.lineThickness = 2;
  this.thicknessSlider = createSlider(1, 10, this.lineThickness);
  var thickLabel = createDiv('linetool Thickness'); //inbuilt p5 function that acceots a string

  thickLabel.position(330, height + 5);

  // Display the slider for controlling line thickness
  this.thicknessSlider.position(450, height + 5);
  this.toggleSliderVisibility = function (visible) {
    if (visible) {
      this.thicknessSlider.show();
      thickLabel.show();
    } else {
      this.thicknessSlider.hide();
      thickLabel.hide();
    }
  };

  // Initially hide the slider
  this.toggleSliderVisibility(false);



  // Draw method for the line tool
  this.draw = function () {
    // Update line thickness from the slider value
    this.lineThickness = this.thicknessSlider.value();
    this.toggleSliderVisibility(true);

    // Set line thickness
    strokeWeight(this.lineThickness);

    // Check if the mouse has been pressed
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        // Set the start coordinates for the mouse, set the drawing state to true,
        // and load the pixels
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      } else {
        // Update the pixels and draw a line from the starting coordinates
        // of the mouse to the current position of the mouse
        updatePixels();
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    } else if (drawing) {
      // If the mouse has not been pressed and the drawing is not happening,
      // finish the process
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }


  };
}


