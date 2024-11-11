
function Toolbox() {

    var self = this;

    this.tools = [];
    this.selectedTool = null;
    this.starTrailTool = null;
    this.sprayCanTool = null;
    this.lineToTool = null;
    this.eraserTool = null;
    this.freehandTool = null;
    this.blurTool = null;


    var toolbarItemClick = function () {
        // Remove any existing borders
        var items = selectAll(".sideBarItem");
        for (var i = 0; i < items.length; i++) {
            items[i].style('border', '0');
        }

        var toolName = this.id().split("sideBarItem")[0];
        self.selectTool(toolName);

        // Call loadPixels to make sure most recent changes are saved to pixel array
        loadPixels();
    };

    // Add a new tool icon to the html page
    var addToolIcon = function (icon, name) {
        var sideBarItem = createDiv("<img src='" + icon + "'></div>");
        sideBarItem.class("sideBarItem");
        sideBarItem.id(name + "sideBarItem");
        sideBarItem.parent("sidebar");
        sideBarItem.mouseClicked(toolbarItemClick);
    };

    // Add a tool to the tools array
    this.addTool = function (tool) {
        // Check that the object tool has an icon and a name
        if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
            alert("Make sure your tool has both a name and an icon");
        }
        this.tools.push(tool);
        addToolIcon(tool.icon, tool.name);
        // If no tool is selected (i.e., none have been added so far),
        // make this tool the selected one.
        if (this.selectedTool == null) {
            this.selectTool(tool.name);
        }

        if (tool.constructor === StarTrailTool) {
            this.starTrailTool = tool;
        } else if (tool.constructor === SprayCanTool) {
            this.sprayCanTool = tool;
        } else if (tool.constructor === LineToTool) {
            this.lineToTool = tool;
        } else if (tool.constructor === EraserTool) {
            this.eraserTool = tool;
        } else if (tool.constructor === FreehandTool) {
            this.freehandTool = tool;
        } else if (tool.constructor === BlurTool) {
            this.blurTool = tool;
        }
    };

    this.selectTool = function (toolName) {
        // Search through the tools for one that's name matches toolName
        for (var i = 0; i < this.tools.length; i++) {
            if (this.tools[i].name == toolName) {
                // If the tool has an unselectTool method, run it.
                if (this.selectedTool != null && this.selectedTool.hasOwnProperty(
                    "unselectTool")) {
                    this.selectedTool.unselectTool();
                }
                // Select the tool and highlight it on the toolbar
                this.selectedTool = this.tools[i];
                select("#" + toolName + "sideBarItem").style("border", "2px solid blue");

                // If the tool has an options area, populate it now.
                if (this.selectedTool.hasOwnProperty("populateOptions")) {
                    this.selectedTool.populateOptions();
                }

                // Hide the sliders if the selected tool is not selected
                if ((this.selectedTool.constructor !== StarTrailTool && this.starTrailTool) ||
                    (this.selectedTool.constructor !== SprayCanTool && this.sprayCanTool) ||
                    (this.selectedTool.constructor !== LineToTool && this.lineToTool) ||
                    (this.selectedTool.constructor !== EraserTool && this.eraserTool) ||
                    (this.selectedTool.constructor !== FreehandTool && this.freehandTool) ||
                    (this.selectedTool.constructor !== BlurTool && this.blurTool)) {
                    if (this.starTrailTool) this.starTrailTool.toggleSliderVisibility(false);
                    if (this.sprayCanTool) this.sprayCanTool.toggleSliderVisibility(false);
                    if (this.lineToTool) this.lineToTool.toggleSliderVisibility(false);
                    if (this.eraserTool) this.eraserTool.toggleSliderVisibility(false);
                    if (this.freehandTool) this.freehandTool.toggleSliderVisibility(false);
                    if (this.blurTool) this.blurTool.toggleSliderVisibility(false);
                } else {
                    // Show the sliders if the selected tool is selected
                    if (this.starTrailTool) this.starTrailTool.toggleSliderVisibility(true);
                    if (this.sprayCanTool) this.sprayCanTool.toggleSliderVisibility(true);
                    if (this.lineToTool) this.lineToTool.toggleSliderVisibility(true);
                    if (this.eraserTool) this.eraserTool.toggleSliderVisibility(true);
                    if (this.freehandTool) this.freehandTool.toggleSliderVisibility(true);
                    if (this.blurTool) this.blurTool.toggleSliderVisibility(true);
                }
            }
        }
    };
}

