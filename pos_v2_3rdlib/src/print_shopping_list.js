/**
 * Created by csc on 15-2-3.
 */
function PrintShoppingList(barObject) {
    var strHeader = '***<没钱赚商店>购物清单***' + '\n';
    var strFootA = '----------------------' + '\n';
    var strSailTitle = '挥泪赠送商品：\n';
    var strFootB = '**********************';
    var strBody = '';
    var allCount = 0;
    var strBodySail = '';
    var sailCount = 0;
    for (var i in barObject) {
        var count = parseFloat(barObject[i].price * barObject[i].count_temp).toFixed(2);
        var price = parseFloat(barObject[i].price).toFixed(2);

        allCount = allCount + barObject[i].price * barObject[i].count_temp;
        var promotions = loadPromotions();

        for (var j in promotions[0].barcode) {
            if (promotions[0].barcode[j] == barObject[i].barcode) {
                count = parseFloat(barObject[i].price * (barObject[i].count_temp - 1)).toFixed(2);
                strBodySail = strBodySail + '名称：' + barObject[i].name + '，数量：1' + barObject[i].unit + '\n';
                sailCount = sailCount + barObject[i].price;
            }
        }
        strBody = strBody + '名称：' + barObject[i].name + '，' + '数量：' + barObject[i].count_temp + barObject[i].unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
    }
    var strCount = '总计：' + parseFloat(allCount - sailCount).toFixed(2) + '(元)\n';
    var strSail = '节省：' + parseFloat(sailCount).toFixed(2) + '(元)\n';
    var strData = '打印时间：' + DateShow() + '\n';
    var strAll = strHeader + strData + strFootA + strBody + strFootA + strSailTitle + strBodySail + strFootA + strCount + strSail + strFootB;
    console.log(strAll);
}
function DateShow() {
    return moment().format('YYYY年MM月DD日 HH:mm:ss');
}