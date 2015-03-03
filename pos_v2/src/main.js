//TODO: Please write code in this file.
function printInventory(inputs) {
    var turnBarcode = new TurnedBarcodeToList();
    turnBarcode.collection = inputs;
    turnBarcode.CountBarcode();//统计相同条形码的数量
    turnBarcode.SplitBarcode();//按照特殊分隔符统计条形码的数量
    turnBarcode.collectionMessage = loadAllItems();
    turnBarcode.CreateList();//建立购买商品对象信息数组
    turnBarcode.sailCollectionMessage = loadPromotions();
    PrintShoppingList(turnBarcode.collection, turnBarcode.SumCountPrice());//将商品信息和总计价格输入打印机
}


