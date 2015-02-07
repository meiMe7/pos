//TODO: Please write code in this file.
function printInventory(inputs) {
    var collection_a = loadAllItems();
    var collection_b = createBarcodeList(inputs);
    var result = createShoppingList(collection_a, collection_b);
    printShoppingList(result);
}

function createShoppingList(collection_a, collection_b) {
    console.log(collection_a);
    var result = [];

    for (var object_i in collection_a) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        for (var object_j in collection_b) {
            if (collection_a[object_i].barcode == collection_b[object_j].barcode) {
                obj.barcode = collection_a[object_i].barcode;
                obj.name = collection_a[object_i].name;
                obj.unit = collection_a[object_i].unit;
                obj.price = collection_a[object_i].price;
                obj.count_temp = collection_b[object_j].count_temp;
                result.push(obj);
            }
        }
    }

    return result;
}

function createBarcodeList(collection_a) {
    var result = [];

    for (var i = 0; i < collection_a.length; i++) {
        var sum = 0;
        var obj = {};
        for (var j = 0; j < collection_a.length; j++) {
            if (collection_a[i] == collection_a[j]) {
                sum++;
                i = j;
            }
        }

        obj = {barcode: collection_a[i], count_temp: sum};

        obj.count_temp = sum;
        result.push(obj);
    }

    return result;
}
function printShoppingList(inputs) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;

    for (var i in inputs) {
        var count = parseFloat(inputs[i].price * inputs[i].count_temp).toFixed(2);
        var price = parseFloat(inputs[i].price).toFixed(2);
        stringBody = stringBody + '名称：' + inputs[i].name + '，' + '数量：' + inputs[i].count_temp + inputs[i].unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
        allCount = allCount + inputs[i].price * inputs[i].count_temp;
    }
    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}