var canvas = document.getElementsByTagName('canvas')[0];  // キャンバス
var ctx = canvas.getContext('2d'); // コンテクスト
var width = 300, height = 600;  // キャンバスのサイズ
var blockWidth = width / column, blockHeight = height / row;  // マスの幅を設定

function drawBlock(x, y) {
    ctx.fillRect(blockWidth * x, blockHeight * y, blockWidth - 1, blockHeight - 1);
    ctx.strokeRect(blockWidth * x, blockHeight * y, blockWidth - 1, blockHeight - 1);
}

function render() {
    ctx.clearRect(0, 0, width, height);  // 一度キャンバスを真っさらにする
    ctx.strokeStyle = 'black';  // えんぴつの色を黒にする

    // 盤面を描画する
    for (var x = 0; x < column; ++x) {
        for (var y = 0; y < row; ++y) {
            if (board[y][x]) {  // マスが空、つまり0ではなかったら
                ctx.fillStyle = colors[board[y][x] - 1];  // マスの種類に合わせて塗りつぶす色を設定
                drawBlock(x, y);  // マスを描画
            }
        }
    }
    // 操作ブロックを描画する
    for (var y = 0; y < 4; ++y) {
        for (var x = 0; x < 4; ++x) {
            if (current[y][x]) {
                ctx.fillStyle = colors[current[y][x] - 1];  // マスの種類に合わせて塗りつぶす色を設定
                drawBlock(currentX + x, currentY + y);  // マスを描画
            }
        }
    }
}

// 30ミリ秒ごとに状態を描画する関数を呼び出す
setInterval(render, 30);


