//TODO: Please write code in this file.
function  printInventory(inputs){
    var turn_barcode = new Turned_barcode_to_list();
    turn_barcode.collection  = inputs;
    turn_barcode.count_barcode();
    turn_barcode.split_barcode();
    turn_barcode.collection_message = loadAllItems();
    turn_barcode.create_list();
    turn_barcode.sail_collection_message = loadPromotions();
    print_shopping_list(turn_barcode.collection,turn_barcode.sum_count_price());

}