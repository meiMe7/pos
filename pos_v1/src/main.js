//TODO: Please write code in this file.
function printInventory(inputs) {
    var collection = createBarcode(inputs);
    var collectionA = splitBarcode(collection);
    var collectionB = loadAllItems();
    var collectionC = createList(collectionA, collectionB);
    printShoppingList(collectionC);
}