const base = document.getElementById("base") as HTMLCanvasElement | null;
const baseContext = base?.getContext("2d");

if (!baseContext) {
    console.error("Canvas not found");
}
else {
    const rows: number = 4;
    const cols: number = 4;
    const margin: number = 10;
    const totalMarginWidth: number = (cols + 1) * margin;
    const totalMarginHeight: number = (rows + 1) * margin;
    const baseWidth: number = base?.width!;
    const baseHeight: number = base?.height!;
    const cellWidth: number = (baseWidth - totalMarginWidth) / cols;
    const cellHeight: number = (baseHeight - totalMarginHeight) / rows;

    baseContext.strokeStyle = "black";
    baseContext.strokeRect(0, 0, baseWidth, baseHeight);

    for (let i: number = 0; i < rows; i++) {
        for (let j: number = 0; j < cols; j++) {
            const x = margin + j * (cellWidth + margin);
            const y = margin + i * (cellHeight + margin);
            baseContext.strokeRect(x, y, cellWidth, cellHeight);
        }
    }
}