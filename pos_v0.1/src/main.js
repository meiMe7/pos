function printInventory(inputs) {
    var temp = CreateBarcodeCount(inputs);
    var output = uniqueArray(temp);
    PrintShoppingList(output);
}
function uniqueArray(barcode) {
    var arrayTemp = [];

    for (var j = 0; j < barcode.length; j++) {
        var flag = false;
        for (var k = 0; k < arrayTemp.length; k++) {
            if (arrayTemp[k].name.indexOf(barcode[j].name) > -1) {
                flag = true;
                break;
            }
        }
        if (!flag) arrayTemp.push(barcode[j])
    }

    return arrayTemp
}
function CreateBarcodeCount(barcode) {
    var output = [];

    for (var object_i in barcode) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        obj.barcode = barcode[object_i].barcode;
        obj.name = barcode[object_i].name;
        obj.unit = barcode[object_i].unit;
        obj.price = barcode[object_i].price;
        obj.count_temp = 0;
        for (var object_j in barcode) {
            if (barcode[object_i].barcode == barcode[object_j].barcode) {
                obj.count_temp = obj.count_temp + 1;

            }
        }
        output.push(obj);
    }
    return output;
}
function PrintShoppingList(barcode) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;
    for (var i in barcode) {
        var count = parseFloat(barcode[i].price * barcode[i].count_temp).toFixed(2);
        var price = parseFloat(barcode[i].price).toFixed(2);
        stringBody = stringBody + '名称：' + barcode[i].name + '，' + '数量：' + barcode[i].count_temp + barcode[i].unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
        allCount = allCount + barcode[i].price * barcode[i].count_temp;
    }
    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}