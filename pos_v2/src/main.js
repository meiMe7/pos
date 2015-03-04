//TODO: Please write code in this file.
function printInventory(inputs) {
    var turnBarcode = BarcodeScanner(inputs);//条形码扫描仪扫描商品信息
    PrintShoppingList(turnBarcode.collection, turnBarcode.SumCountPrice());//将商品信息和总计价格输入打印机
}


