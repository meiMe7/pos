/**
 * Created by csc on 15-2-3.
 */
function splitBarcode(collection) {
    for (var i in collection) {
        var arrayTemp = new String(collection[i].barcode).split("-");

        if (arrayTemp[1] != undefined) {
            collection[i].barcode = arrayTemp[0];
            collection[i].count_temp = Number(arrayTemp[1]);
        }

    }
    return collection;
}