/**
 * Created by csc on 15-2-3.
 */
function PrintShoppingList(barcodeObject) {
    var strHeader = '***<没钱赚商店>购物清单***' + '\n';
    var strFootA = '----------------------' + '\n';
    var strSailTitle = '挥泪赠送商品：\n';
    var strFootB= '**********************';
    var strBody = '';
    var allCount = 0;
    var strBodySail = '';
    var sailCount = 0;
    barcodeObject.forEach(function (objI) {
        var count = parseFloat(objI.price * objI.count_temp).toFixed(2);
        var price = parseFloat(objI.price).toFixed(2);

        allCount = allCount + objI.price * objI.count_temp;
        var promotions = loadPromotions();

        promotions[0].barcode.forEach(function (barcodeJ) {
            if (barcodeJ == objI.barcode) {
                count = parseFloat(objI.price * (objI.count_temp - 1)).toFixed(2);
                strBodySail = strBodySail + '名称：' + objI.name + '，数量：1' + objI.unit + '\n';
                sailCount = sailCount + objI.price;
            }
        });
        strBody = strBody + '名称：' + objI.name + '，' + '数量：' + objI.count_temp + objI.unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
    });
    var strCount = '总计：' + parseFloat(allCount - sailCount).toFixed(2) + '(元)\n';
    var strSail = '节省：' + parseFloat(sailCount).toFixed(2) + '(元)\n';
    var strData = '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n';
    var strAll = strHeader + strData + strFootA + strBody + strFootA + strSailTitle + strBodySail + strFootA + strCount + strSail + strFootB;
    console.log(strAll);
}
//function DateShow() {
//    return moment().format('YYYY年MM月DD日 HH:mm:ss');
//}