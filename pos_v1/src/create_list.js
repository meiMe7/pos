/**
 * Created by csc on 15-2-3.
 */
function createList(collection_a, collection_b) {
    var result = [];

    for (var i = 0; i < collection_a.length; i++) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        for (var j = 0; j < collection_b.length; j++) {

            if (collection_a[i].barcode == collection_b[j].barcode) {
                obj.barcode = collection_a[i].barcode;
                obj.name = collection_a[i].name;
                obj.unit = collection_a[i].unit;
                obj.price = collection_a[i].price;
                obj.count_temp = collection_b[j].count_temp;

            }
        }
        if (obj.barcode != '')result.push(obj);
    }

    return result;
}