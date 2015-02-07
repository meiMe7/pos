//TODO: Please write code in this file.
function  printInventory(inputs){
    var collection =createBarcode(inputs);
    var collection_b = splitBarcode(collection);
    var collection_a = loadAllItems();
    var collection = createList(collection_a,collection_b);
    printShoppingList(collection);
}