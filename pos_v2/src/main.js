//TODO: Please write code in this file.
function  printInventory(inputs){
    var turn_barcode = new TurnedBarcodeToList();
    turn_barcode.collection  = inputs;
    turn_barcode.countBarcode();//统计相同条形码的数量
    turn_barcode.splitBarcode();//按照特殊分隔符统计条形码的数量
    turn_barcode.collection_message = loadAllItems();
    turn_barcode.createList();//建立购买商品对象信息数组
    turn_barcode.sail_collection_message = loadPromotions();
    printShoppingList(turn_barcode.collection,turn_barcode.sumCountPrice());//将商品信息和总计价格输入打印机
}


