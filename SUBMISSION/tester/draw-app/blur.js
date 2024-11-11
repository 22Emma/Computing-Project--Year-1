
function BlurTool() {
    // Properties of the BlurTool object
    this.name = "blur"; // Name of the tool
    this.icon = "assets/blur.jpeg"; // Path to the tool icon image
    this.blurRadius = 1; // Initial blur radius
    this.slider; // Slider element for controlling blur radius
    this.blurLabel; // Label element for the slider

    // Method to set up the slider for controlling blur radius
    this.setupSlider = function () {
        this.slider = createSlider(0, 10, this.blurRadius); // Create slider with specified min, max, and initial values
        this.blurLabel = createDiv('blur Size'); // Create a label for the slider
        this.blurLabel.position(390, height + 5); // Position for the label
        this.slider.position(450, height + 5); // Position for the slider
        this.slider.input(this.updateBlurRadius.bind(this)); // Update blur radius when slider value changes
        this.toggleSliderVisibility(false); // Initially hide the slider
    };

    this.applyBlur = function () {
        // Apply blur effect with the current blur radius
        filter(BLUR, this.blurRadius);
    };

    // Method to toggle visibility of the slider
    this.toggleSliderVisibility = function (visible) {
        if (visible) {
            this.slider.show();
            this.blurLabel.show();
        } else {
            this.slider.hide();
            this.blurLabel.hide();
        }
    };

    // Method to update blur radius when slider value changes
    this.updateBlurRadius = function () {
        this.blurRadius = this.slider.value(); // Update blur radius property
        this.applyBlur(); // Apply the blur effect with the new radius
    };

    // Empty draw method to satisfy console message (not used in this tool)
    this.draw = function () {
        this.toggleSliderVisibility(true);
    };

    // Call setupSlider in the constructor to initialize the slider
    this.setupSlider();
}




