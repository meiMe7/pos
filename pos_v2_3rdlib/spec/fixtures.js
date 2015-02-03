function loadAllItems() {
    return [
        new Item('ITEM000000', '可口可乐', '瓶', 3.00),
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000002', '苹果', '斤', 5.50),
        new Item('ITEM000003', '荔枝', '斤', 15.00),
        new Item('ITEM000004', '电池', '个', 2.00),
        new Item('ITEM000005', '方便面', '袋', 4.50)
    ];
}
function create_loadAllItems(){
    var collection = loadAllItems();
    var result = [];

    for(var i in collection){
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0.00
        };
        obj.barcode = collection[i].barcode;
        obj.name = collection[i].name;
        obj.unit = collection[i].unit;
        obj.price = collection[i].price;
        result.push(obj);
    }
    return result;
}
function loadPromotions() {
    return [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ];
}
function create_loadPromotions() {
    var collection = loadPromotions();
    var result = [];

    for(var i in collection){
        var obj = {
            barcode: '',
            type: []
        };
        obj.barcode = collection[i].barcode;
        obj.type = collection[i].type;
        result.push(obj);
    }
    return result;
}
function data_show(){
    var dateDigitToString;
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date();
    var year = dateDigitToString(currentDate.getFullYear());
    var month  = dateDigitToString(currentDate.getMonth() + 1);
    var date = dateDigitToString(currentDate.getDate());
    var hour = currentDate.getHours();
    var minute =  currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return formattedDateString;
}
