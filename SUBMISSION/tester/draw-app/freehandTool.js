

function FreehandTool() {
    // Set an icon and a name for the object
    this.icon = "assets/freehand.jpg";
    this.name = "freehand";

    // Initialize line thickness with a default value
    this.lineThickness = 2;

    // Slider for controlling line thickness
    this.thicknessSlider = createSlider(1, 10, this.lineThickness);
    this.thicknessSlider.hide(); // Initially hide the slider

    // Create a label for the slider
    this.sliderLabel = createDiv('Line Thickness');
    this.sliderLabel.position(340, height + 5);

    // Function to toggle slider visibility
    this.toggleSliderVisibility = function (visible) {
        if (visible) {
            this.thicknessSlider.show();
            this.sliderLabel.show(); // Show the label
            this.thicknessSlider.position(450, height + 5);
        } else {
            this.thicknessSlider.hide();
            this.sliderLabel.hide(); // Hide the label
        }
    };

    this.draw = function () {
        // Update line thickness from the slider value
        this.lineThickness = this.thicknessSlider.value();
        this.toggleSliderVisibility(true);

        // Set line thickness
        strokeWeight(this.lineThickness);

        // If the mouse is pressed
        if (mouseIsPressed) {
            // Check if previousX and Y are -1. Set them to the current
            // mouse X and Y if they are.
            if (previousMouseX == -1) {
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            // If we already have values for previousX and Y, draw a line from 
            // there to the current mouse location
            else {
                line(previousMouseX, previousMouseY, mouseX, mouseY);
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        // If the user has released the mouse, set the previousMouse values 
        // back to -1.
        else {
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };
}








