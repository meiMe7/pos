//TODO: Please write code in this file.
function printInventory(inputs) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;

    inputs.forEach(function (object) {
        var count = parseFloat(object.price * object.count).toFixed(2);
        var price = parseFloat(object.price).toFixed(2);
        stringBody = stringBody + '名称：' + object.name + '，' + '数量：' + object.count + object.unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
        allCount = allCount + object.price * object.count;
    });

    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}