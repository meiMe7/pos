/**
 * Created by csc on 15-2-3.
 */
function splitBarcode(collection) {
    collection.forEach(function (object) {
        var arrayTemp = object.barcode.split("-");

        if (arrayTemp[1] != undefined) {
            object.barcode = arrayTemp[0];
            object.count_temp = Number(arrayTemp[1]);
        }

    });
    return collection;
}