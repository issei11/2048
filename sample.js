var canvas = document.querySelector('.canvas'); // Canvasの取得
var context = canvas.getContext('2d'); // Canvasからコンテキスを取得
context.fillStyle = 'green'; // 描画の塗り色を決める
context.fillRect(10, 10, 100, 100); // 位置とサイズを決めて描画
