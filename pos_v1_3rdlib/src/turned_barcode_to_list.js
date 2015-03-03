/**
 * Created by csc on 15-2-3.
 */
//条形码转换成购买商品的信息
function TurnedBarcodeToList() {
    var collection = [];
    var collectionMessage = [];
    var sailCollectionMessage = [];
}
//将条形码，按照条形码号统计出数量，返回条形码对象数组［｛barcode:'',count:''｝］
TurnedBarcodeToList.prototype.CountBarcode = function () {
    var collectionA = this.collection;
    var result = [];

    for (var i = 0; i < collectionA.length; i++) {
        var sum = 1;
        var obj = {};
        for (var j = i + 1; j < collectionA.length; j++) {
            if (collectionA[i] == collectionA[j]) {
                sum++;
                i = j;
            }
        }
        obj = {barcode: collectionA[i], count_temp: sum};
        obj.count_temp = sum;
        result.push(obj);
    }

    this.collection = result;
};
//将条形码，按照条形码号特殊符号＂－＂统计出数量，返回条形码对象数组［｛barcode:'',count:''｝］
TurnedBarcodeToList.prototype.SplitBarcode = function () {
    var collection = this.collection;

    for (var i = 0; i < collection.length; i++) {
        var arr = (collection[i].barcode).split("-");
        if (arr[1] != undefined) {
            collection[i].barcode = arr[0];
            collection[i].count_temp = Number(arr[1]);
        }
    }

    this.collection = collection;
};
//按照条形码对象数组，将条形码与商品信息相对应，得到购买商品信息对象数组
TurnedBarcodeToList.prototype.CreateList = function () {
    var collectionA = this.collectionMessage;
    var collectionB = this.collection;
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
    this.collection = result;
};
//按照商品信息，和买一送一商品信息条形码相等，得到购买商品总价格即：总计，和购买商品中赠送的商品的总价格即：节省
TurnedBarcodeToList.prototype.SumCountPrice = function () {
    var collectionA = this.collection;
    var collectionB = this.sailCollectionMessage;
    var allCount = 0;
    var sailCount = 0.00;

    for (var i in collectionA) {
        allCount = allCount + collectionA[i].price * collectionA[i].count_temp;
        for (var k in  collectionB) {
            for (var j in collectionB[k].barcode) {
                if (collectionB[k].barcode[j] == collectionA[i].barcode) {
                    sailCount = sailCount + collectionA[i].price;
                }
            }
        }
    }

    allCount = parseFloat(allCount - sailCount).toFixed(2);
    return [allCount, sailCount];
};
