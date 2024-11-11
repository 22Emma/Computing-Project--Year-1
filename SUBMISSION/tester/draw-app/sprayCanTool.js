
function SprayCanTool() {
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";
    this.points = 13;
    this.spread = 10;
    this.intensitySlider = createSlider(1, 30, this.spread);
    this.intensitySlider.position(450, height + 5);

    // Create a label for the slider
    this.intensityLabel = createDiv('Intensity');
    this.intensityLabel.position(390, height + 5);

    this.toggleSliderVisibility = function (visible) {
        if (visible) {
            this.intensitySlider.show();
            this.intensityLabel.show(); // Show the label
        } else {
            this.intensitySlider.hide();
            this.intensityLabel.hide(); // Hide the label
        }
    };

    // Initially hide the slider and label
    this.toggleSliderVisibility(false);

    this.draw = function () {
        this.spread = this.intensitySlider.value(); // Update intensity based on the slider value
        this.toggleSliderVisibility(true);

        if (mouseIsPressed) {
            for (var i = 0; i < this.points; i++) {
                point(random(mouseX - this.spread, mouseX + this.spread), random(mouseY - this.spread, mouseY + this.spread));
            }
        }
    };
}

