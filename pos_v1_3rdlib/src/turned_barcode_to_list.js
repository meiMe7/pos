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

    _.filter(collection,function (obj) {
        var arr = (obj.barcode).split("-");
        if (arr[1] != undefined) {
            obj.barcode = arr[0];
            obj.count_temp = Number(arr[1]);
        }
    });

    this.collection = collection;
};
//按照条形码对象数组，将条形码与商品信息相对应，得到购买商品信息对象数组
TurnedBarcodeToList.prototype.CreateList = function () {
    var collectionA = this.collectionMessage;
    var collectionB = this.collection;
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
    this.collection = result;
};
//按照商品信息，和买一送一商品信息条形码相等，得到购买商品总价格即：总计，和购买商品中赠送的商品的总价格即：节省
TurnedBarcodeToList.prototype.SumCountPrice = function () {
    var collectionA = this.collection;
    var collectionB = this.sailCollectionMessage;
    var allCount = 0;
    var sailCount = 0.00;

    _.filter(collectionA,function (objectA) {
        allCount = allCount + objectA.price * objectA.count_temp;
        collectionB.forEach(function (objectB) {
            objectB.barcode.forEach(function (barcodeJ) {
                if (barcodeJ == objectA.barcode) {
                    sailCount = sailCount + objectA.price;
                }
            });
        });
    });

    allCount = parseFloat(allCount - sailCount).toFixed(2);
    return [allCount, sailCount];
};
function BarcodeScanner (collection){
    var turnBarcode = new TurnedBarcodeToList();
    turnBarcode.collection = collection;
    turnBarcode.CountBarcode();//统计相同条形码的数量
    turnBarcode.SplitBarcode();//按照特殊分隔符统计条形码的数量
    turnBarcode.collectionMessage = loadAllItems();
    turnBarcode.CreateList();//建立购买商品对象信息数组
    turnBarcode.sailCollectionMessage = loadPromotions();
    return turnBarcode
}