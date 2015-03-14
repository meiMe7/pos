//TODO: Please write code in this file.
function printInventory(inputs) {
    var collection_a = loadAllItems();
    var collection_b = createBarcodeList(inputs);
    var result = createShoppingList(collection_a, collection_b);
    printShoppingList(result);
}

function createShoppingList(collectionA, collectionB) {
    console.log(collectionA);
    var result = [];

    _.filter(collectionA,function (objectI) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        _.filter(collectionB,function(objectJ) {
            if (objectI.barcode == objectJ.barcode) {
            obj.barcode = objectI.barcode;
            obj.name = objectI.name;
            obj.unit = objectI.unit;
            obj.price = objectI.price;
            obj.count_temp = objectJ.count_temp;
            result.push(obj);
        }});
    });
    return result;
}

function createBarcodeList(collectionA) {
    var result = [];

    for (var i = 0; i < collectionA.length; i++) {
        var sum = 0;
        var obj = {};
        for (var j = 0; j < collectionA.length; j++) {
            if (collectionA[i] == collectionA[j]) {
                sum++;
                i = j;
            }
        }

        obj = {barcode: collectionA[i], count_temp: sum};

        obj.count_temp = sum;
        result.push(obj);
    }

    return result;
}
function printShoppingList(barcode) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;

    _.filter(barcode,function (object) {
        var count = parseFloat(object.price * object.count_temp).toFixed(2);
        var price = parseFloat(object.price).toFixed(2);
        stringBody = stringBody + '名称：' + object.name + '，' + '数量：' + object.count_temp + object.unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
        allCount = allCount + object.price * object.count_temp;
    });
    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}