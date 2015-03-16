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
        var arr = (collection[i]).split("-");
        if (arr[1] != undefined) {
            collection[i] = collection[++i];
            collection.length = collection.length - 1;
            for (var i = 0; i < arr[1]; i++) {
                collection.push(arr[0]);
            }
        }
    }
    this.collection = collection;
};
//将条形码中计数单位为"斤"的商品选择出来组成单独数组,采用称重的方式得到称重商品条形码重量对象数组result[{barcode:,count_temp:}],turn_barcode.collection中不包括称重商品的条形码
TurnedBarcodeToList.prototype.Weight = function () {
    var collectionA = this.collection;
    var result = [];
    _.each(collectionA, function (objA) {
        var collectionB = loadAllItems();
        _.each(collectionB, function (objB) {
            if (objA == objB.barcode && objB.unit == "斤") {
                result.push(objA);
            }
        });
    });
    collectionA.forEach(function (objA) {
        var collectionC = loadAllItems();
        result.forEach(function (objTemp) {
            if (objA == objTemp) {
                objA = collectionA[++objA];
                --objA;
                collectionA.length = collectionA.length - 1;
            }
        });
    });
    this.collection = collectionA;
    var collectionD = result;
    var resultB = [];
    for (var i = 0; i < collectionD.length; i++) {
        var sum = 1;
        var obj = {};
        for (var j = i + 1; j < collectionD.length; j++) {
            if (collectionD[i] == collectionD[j]) {
                sum++;
                i = j;
            }
        }
        obj = {barcode: collectionD[i], count_temp: sum};
        obj.count_temp = sum;
        resultB.push(obj);
    }
    return resultB;
};
//称重商品与普通商品合并得到商品数量对象数组[{barcode:,count_temp:}];
TurnedBarcodeToList.prototype.AllGoods = function (weight) {

    var collectionA = this.collection;
    _.each(weight, function (element) {
        collectionA.push(element);
    });
    this.collection = collectionA;
};
//按照条形码对象数组,条形码与商品信息相对应，得到购买商品信息对象数组
TurnedBarcodeToList.prototype.CreateList = function () {
    var collectionA = this.collectionMessage;
    var collectionB = this.collection;
    var result = [];
    _.each(collectionA, function (objA) {
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp: 0
        };
        _.each(collectionB, function (objB) {
            if (objA.barcode == objB.barcode) {
                obj.barcode = objA.barcode;
                obj.name = objA.name;
                obj.unit = objA.unit;
                obj.price = objA.price;
                obj.count_temp = objB.count_temp;
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

    _.each(collectionA, function (objectA) {
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
//条形码扫描仪
function BarcodeScanner(collection) {
    var turnBarcode = new TurnedBarcodeToList();
    turnBarcode.collection = collection;
    turnBarcode.SplitBarcode();//按照特殊分隔符统计条形码的数量
    var weight = turnBarcode.Weight();//将条形码中计数单位为"斤"的商品选择出来组成单独数组,采用称重的方式得到称重商品条形码重量对象数组
    turnBarcode.CountBarcode();//统计除称重商品意外的普通商品相同条形码的数量
    turnBarcode.AllGoods(weight);//合并称重商品和普通商品
    turnBarcode.collectionMessage = loadAllItems();//引入商品信息
    turnBarcode.CreateList();//建立购买商品对象与商品信息对应的购物信息数组
    turnBarcode.sailCollectionMessage = loadPromotions();//引入减价商品信息
    return turnBarcode
}