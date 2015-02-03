//TODO: Please write code in this file.
function  printInventory(inputs){
    var collection =create_barcode(inputs);
    var collection_b = split_barcode(collection);
    var collection_a = create_loadAllItems();
    var collection = create_list(collection_a,collection_b);
    print_shopping_list(collection);
}