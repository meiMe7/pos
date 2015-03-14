//TODO: Please write code in this file.
function printInventory(inputs) {
    var turnBarcode = BarcodeScanner(inputs);//扫描仪扫描商品条形码
    PrintShoppingList(turnBarcode.collection, turnBarcode.SumCountPrice());//将商品信息和总计价格输入打印机
}


