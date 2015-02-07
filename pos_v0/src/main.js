//TODO: Please write code in this file.
function printInventory(inputs) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;

    for (var object in inputs) {
        var count = parseFloat(inputs[object].price * inputs[object].count).toFixed(2);
        var price = parseFloat(inputs[object].price).toFixed(2);
        stringBody = stringBody + '名称：' + inputs[object].name + '，' + '数量：' + inputs[object].count + inputs[object].unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
        allCount = allCount + inputs[object].price * inputs[object].count;
    }

    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}