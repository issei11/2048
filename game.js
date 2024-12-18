var base = document.getElementById("base");
var baseContext = base === null || base === void 0 ? void 0 : base.getContext("2d");
if (!baseContext) {
    console.error("Canvas not found");
}
else {
    var rows = 4;
    var cols = 4;
    var margin = 10;
    var totalMarginWidth = (cols + 1) * margin;
    var totalMarginHeight = (rows + 1) * margin;
    var baseWidth = base === null || base === void 0 ? void 0 : base.width;
    var baseHeight = base === null || base === void 0 ? void 0 : base.height;
    var cellWidth = (baseWidth - totalMarginWidth) / cols;
    var cellHeight = (baseHeight - totalMarginHeight) / rows;
    baseContext.strokeStyle = "black";
    baseContext.strokeRect(0, 0, baseWidth, baseHeight);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var x = margin + j * (cellWidth + margin);
            var y = margin + i * (cellHeight + margin);
            baseContext.strokeRect(x, y, cellWidth, cellHeight);
        }
    }
}
