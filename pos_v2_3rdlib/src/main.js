//TODO: Please write code in this file.
function  printInventory(inputs){
    var turn_barcode = new Turned_barcode_to_list();
    turn_barcode.collection  = inputs;
    turn_barcode.count_barcode();//统计相同条形码的数量
    turn_barcode.split_barcode();//按照特殊分隔符统计条形码的数量
    turn_barcode.collection_message = loadAllItems();
    turn_barcode.create_list();//建立购买商品对象信息数组
    turn_barcode.sail_collection_message = loadPromotions();
    print_shopping_list(turn_barcode.collection,turn_barcode.sum_count_price());//将商品信息和总计价格输入打印机

}