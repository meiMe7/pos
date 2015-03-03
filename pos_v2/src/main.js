//TODO: Please write code in this file.
function printInventory(inputs) {
    var turnBarcode = new TurnedBarcodeToList();
    turnBarcode.collection = inputs;
    turnBarcode.countBarcode();//统计相同条形码的数量
    turnBarcode.splitBarcode();//按照特殊分隔符统计条形码的数量
    turnBarcode.collection_message = loadAllItems();
    turnBarcode.createList();//建立购买商品对象信息数组
    turnBarcode.sail_collection_message = loadPromotions();
    printShoppingList(turnBarcode.collection, turnBarcode.sumCountPrice());//将商品信息和总计价格输入打印机
}


