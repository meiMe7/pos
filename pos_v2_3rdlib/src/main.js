//TODO: Please write code in this file.
function printInventory(inputs) {
    var turn_barcode = new Turned_barcode_to_list();
    turn_barcode.collection = inputs;
    turn_barcode.split_barcode();//按照特殊分隔符统计条形码的数量
    var weight = turn_barcode.weight();//将条形码中计数单位为"斤"的商品选择出来组成单独数组,采用称重的方式得到称重商品条形码重量对象数组
    turn_barcode.count_barcode();//统计除称重商品意外的普通商品相同条形码的数量
    turn_barcode.all_goods(weight);//合并称重商品和普通商品
    turn_barcode.collection_message = loadAllItems();//引入商品信息
    turn_barcode.create_list();//建立购买商品对象与商品信息对应的购物信息数组
    turn_barcode.sail_collection_message = loadPromotions();//引入减价商品信息
    print_shopping_list(turn_barcode.collection, turn_barcode.sum_count_price());//将购物信息和总计价格输出打印

}