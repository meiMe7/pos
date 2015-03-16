//TODO: Please write code in this file.
function printInventory(inputs) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var tempCount = [];

    _.each(inputs, function (object) {
        var count = parseFloat(object.price * object.count).toFixed(2);
        tempCount.push(object.price * object.count);
        var price = parseFloat(object.price).toFixed(2);
        stringBody = stringBody + '名称：' + object.name + '，' + '数量：' + object.count + object.unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
    });

    var allCount = _.reduce(tempCount,function(memo,num){return memo+num;},0);

    var stringCount = '总计：' + parseFloat(allCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringCount + stringFootB;
    console.log(stringAll);
}