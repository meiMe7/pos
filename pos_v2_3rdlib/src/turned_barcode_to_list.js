/**
 * Created by csc on 15-2-3.
 */
//条形码转换成购买商品的信息
function Turned_barcode_to_list() {
    var collection = [];
    var collection_message = [];
    var sail_collection_message = [];
}
//将条形码，按照条形码号统计出数量，返回条形码对象数组［｛barcode:'',count:''｝］
Turned_barcode_to_list.prototype.count_barcode = function () {
    var collection_a = this.collection;
    var result = [];
    for (var i = 0; i < collection_a.length; i++) {
        var sum = 1;
        var obj = {};
        for (var j = i + 1; j < collection_a.length; j++) {
            if (collection_a[i] == collection_a[j]) {
                sum++;
                i = j;
            }
        }
        obj = {barcode: collection_a[i], count_temp: sum};
        obj.count_temp = sum;
        result.push(obj);
    }
    this.collection = result;
};
//将条形码，按照条形码号特殊符号＂－＂统计出数量，返回条形码对象数组［｛barcode:'',count:''｝］
Turned_barcode_to_list.prototype.split_barcode = function () {
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
Turned_barcode_to_list.prototype.weight = function () {
    var collection_a = this.collection;
    var result = [];
    for (var i in collection_a) {
        var collection_b = loadAllItems();
        for (var j in collection_b) {
            if (collection_a[i] == collection_b[j].barcode && collection_b[j].unit == "斤") {
                result.push(collection_a[i]);
            }
        }
    }
    for (var i in collection_a) {
        var collection_b = loadAllItems();
        for (var j in result) {
            if (collection_a[i] == result[j]) {
                collection_a[i] = collection_a[++i];
                --i;
                collection_a.length = collection_a.length - 1;
            }
        }
    }
    this.collection = collection_a;
    var collection_a = result;
    var result_b = [];
    for (var i = 0; i < collection_a.length; i++) {
        var sum = 1;
        var obj = {};
        for (var j = i + 1; j < collection_a.length; j++) {
            if (collection_a[i] == collection_a[j]) {
                sum++;
                i = j;
            }
        }
        obj = {barcode: collection_a[i], count_temp: sum};
        obj.count_temp = sum;
        result_b.push(obj);
    }
    return result_b;
};
//称重商品与普通商品合并得到商品数量对象数组[{barcode:,count_temp:}];
Turned_barcode_to_list.prototype.all_goods = function (weight) {

    var collection_a = this.collection;
    var collection_b = weight;
    for (var i in weight) {
        collection_a.push(weight[i]);
    }
    this.collection = collection_a;
};
//按照条形码对象数组,条形码与商品信息相对应，得到购买商品信息对象数组
Turned_barcode_to_list.prototype.create_list = function () {
    var collection_a = this.collection_message;
    var collection_b = this.collection;
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
    this.collection = result;
};
//按照商品信息，和买一送一商品信息条形码相等，得到购买商品总价格即：总计，和购买商品中赠送的商品的总价格即：节省
Turned_barcode_to_list.prototype.sum_count_price = function () {
    var collection_a = this.collection;
    var collection_b = this.sail_collection_message;
    var all_count = 0;
    var sail_count = 0.00;

    for (var i in collection_a) {
        all_count = all_count + collection_a[i].price * collection_a[i].count_temp;
        for (var k in  collection_b) {
            for (var j in collection_b[k].barcode) {
                if (collection_b[k].barcode[j] == collection_a[i].barcode) {
                    sail_count = sail_count + collection_a[i].price;
                }
            }
        }
    }
    all_count = parseFloat(all_count - sail_count).toFixed(2);
    return [all_count, sail_count];
};
