
function EraserTool(size) {
    this.name = "eraserTool";
    this.icon = "assets/eraser.jpg";
    this.size = 20; // Set the default size of the eraser


    // Function to erase
    this.erase = function () {
        noStroke();
        fill(255); // Fill with the background color (white) to simulate erasing
        this.toggleSliderVisibility(true);
        if (mouseIsPressed) {
            ellipse(mouseX, mouseY, this.size, this.size); // Draw white circle to erase
        }
    };


    // Function to show size options
    this.showSizeOptions = function () {
        var sizeSlider = createSlider(5, 50, this.size, 1);
        var sizeLabel = createDiv('Eraser Size'); // Create label

        sizeLabel.position(360, height + 5);
        sizeSlider.position(450, height + 5);

        // Input event handler for slider
        sizeSlider.input(() => {
            this.size = sizeSlider.value();
        });

        // Function to toggle slider visibility
        this.toggleSliderVisibility = function (visible) {
            if (visible) {
                sizeSlider.show();
                sizeLabel.show();
            } else {
                sizeSlider.hide();
                sizeLabel.hide();
            }
        };

        // Initially hide the slider
        this.toggleSliderVisibility(false);
    };
}



