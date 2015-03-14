/**
 * Created by csc on 15-2-3.
 */
function createList(collectionA, collectionB) {
    var result = [];

    _.filter(collectionA,function (objectA) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        _.filter(collectionB,function (objectB) {

            if (objectA.barcode == objectB.barcode) {
                obj.barcode = objectA.barcode;
                obj.name = objectA.name;
                obj.unit = objectA.unit;
                obj.price = objectA.price;
                obj.count_temp = objectB.count_temp;

            }
        });
        if (obj.barcode != '')result.push(obj);
    });

    return result;
}