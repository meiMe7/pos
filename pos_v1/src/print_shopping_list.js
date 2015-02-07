/**
 * Created by csc on 15-2-3.
 */
function printShoppingList(inputs) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringSailTitle = '挥泪赠送商品：\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;
    var stringBodySail = '';
    var sailCount = 0;
    for (var i in inputs) {
        var count = parseFloat(inputs[i].price * inputs[i].count_temp).toFixed(2);
        var price = parseFloat(inputs[i].price).toFixed(2);

        allCount = allCount + inputs[i].price * inputs[i].count_temp;
        var promotions = loadPromotions();

        for (var j in promotions[0].barcode) {
            if (promotions[0].barcode[j] == inputs[i].barcode) {
                count = parseFloat(inputs[i].price * (inputs[i].count_temp - 1)).toFixed(2);
                stringBodySail = stringBodySail + '名称：' + inputs[i].name + '，数量：1' + inputs[i].unit + '\n';
                sailCount = sailCount + inputs[i].price;
            }
        }
        stringBody = stringBody + '名称：' + inputs[i].name + '，' + '数量：' + inputs[i].count_temp + inputs[i].unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
    }
    var stringCount = '总计：' + parseFloat(allCount - sailCount).toFixed(2) + '(元)\n';
    var stringSail = '节省：' + parseFloat(sailCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringSailTitle + stringBodySail + stringFootA + stringCount + stringSail + stringFootB;
    console.log(stringAll);
}