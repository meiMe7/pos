function printInventory(inputs) {
    var temp = CreateBarcodeCount(inputs);
    var output = uniqueArray(temp);
    PrintShoppingList(output);
}
function uniqueArray(barcode) {
    var arrayTemp = [];

    barcode.forEach(function (j){
        var flag = false;
        for (var k = 0; k < arrayTemp.length; k++) {
            if (arrayTemp[k].name.indexOf(j.name) > -1) {
                flag = true;
                break;
            }
        }
        if (!flag) arrayTemp.push(j);
    });

    return arrayTemp
}
function CreateBarcodeCount(barcode) {
    var output = [];

    barcode.forEach(function (objectI) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        obj.barcode = objectI.barcode;
        obj.name = objectI.name;
        obj.unit = objectI.unit;
        obj.price = objectI.price;
        obj.count_temp = 0;
        barcode.forEach(function (objectJ) {
            if (objectI.barcode == objectJ.barcode) {
                obj.count_temp = obj.count_temp + 1;

            }
        });
        output.push(obj);
    });
    return output;
}
function PrintShoppingList(barcode) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;
    barcode.forEach(function (object) {
        var count = parseFloat(object.price * object.count_temp).toFixed(2);
        var price = parseFloat(object.price).toFixed(2);
        stringBody = stringBody + '名称：' + object.name + '，' + '数量：' + object.count_temp + object.unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
        allCount = allCount + object.price * object.count_temp;
    });
    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}