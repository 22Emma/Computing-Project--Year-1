

function StarTrailTool() {
    this.name = "starTrailTool";
    this.icon = "assets/star.jpg";
    this.size = 10;

    // Add a slider for controlling the size
    this.sizeSlider = createSlider(1, 50, this.size); // set the min, max, and initial value
    this.sizeSlider.position(450, height + 5); // adjust position based on your layout
    var starLabel = createDiv('starSize'); //inbuilt p5 function that accepts a string
    starLabel.position(380, height + 5);

    this.toggleSliderVisibility = function (visible) {
        if (visible) {
            this.sizeSlider.show();
            starLabel.show();
        } else {
            this.sizeSlider.hide();
            starLabel.hide();
        }
    };

    // Initially hide the slider
    this.toggleSliderVisibility(false);

    this.draw = function () {
        this.size = this.sizeSlider.value();
        this.toggleSliderVisibility(true);

        if (mouseIsPressed) {


            var fixedAngle = PI / 5; //Angle between the star points
            var outerRadius = this.size;//Outer radius of the star
            var innerRadius = this.size / 2;//Inner radius of the star

            beginShape();
            for (var i = 0; i < 10; i++) { //Iterate over the 10 points of the star
                var radius;
                if (i % 2 === 0) {
                    radius = outerRadius;//Use the outer radius for even points
                } else {
                    radius = innerRadius;//Use inner radius for odd points
                }
                var angle = fixedAngle * i;//Calculate angle for current point
                var x = mouseX + radius * cos(angle);//Calculate x coordinate of the point
                var y = mouseY + radius * sin(angle);// Calculate y coordinate of the point
                vertex(x, y);//Add the vertex to the shape
            }
            endShape(CLOSE);
        }
    };
}






