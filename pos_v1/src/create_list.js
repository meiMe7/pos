/**
 * Created by csc on 15-2-3.
 */
function createList(collectionA, collectionB) {
    var result = [];

    for (var i = 0; i < collectionA.length; i++) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        for (var j = 0; j < collectionB.length; j++) {

            if (collectionA[i].barcode == collectionB[j].barcode) {
                obj.barcode = collectionA[i].barcode;
                obj.name = collectionA[i].name;
                obj.unit = collectionA[i].unit;
                obj.price = collectionA[i].price;
                obj.count_temp = collectionB[j].count_temp;

            }
        }
        if (obj.barcode != '')result.push(obj);
    }

    return result;
}