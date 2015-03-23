//TODO: Please write code in this file.
function printInventory(inputs) {
    var turnBarcode = BarcodeScanner(inputs);//将商品信息用条形码扫描仪扫描
    PrintShoppingList(turnBarcode.collection,turnBarcode.SumCountPrice());//将购物信息和总计价格输出打印
}
