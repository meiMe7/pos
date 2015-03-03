//TODO: Please write code in this file.
function printInventory(inputs) {
    var turnBarcode = new TurnedBarcodeToList();
    turnBarcode.collection = inputs;
    turnBarcode.SplitBarcode();//按照特殊分隔符统计条形码的数量
    var weight = turnBarcode.Weight();//将条形码中计数单位为"斤"的商品选择出来组成单独数组,采用称重的方式得到称重商品条形码重量对象数组
    turnBarcode.CountBarcode();//统计除称重商品意外的普通商品相同条形码的数量
    turnBarcode.AllGoods(weight);//合并称重商品和普通商品
    turnBarcode.collectionMessage = loadAllItems();//引入商品信息
    turnBarcode.CreateList();//建立购买商品对象与商品信息对应的购物信息数组
    turnBarcode.sailCollectionMessage = loadPromotions();//引入减价商品信息
    PrintShoppingList(turnBarcode.collection, turnBarcode.SumCountPrice());//将购物信息和总计价格输出打印

}