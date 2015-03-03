//TODO: Please write code in this file.
function printInventory(inputs) {
    var collection = createBarcode(inputs);
    var collectionB = splitBarcode(collection);
    var collectionA = loadAllItems();
    var collectionC = createList(collectionA, collectionB);
    PrintShoppingList(collectionC);
}