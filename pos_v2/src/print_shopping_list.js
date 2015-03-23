/**
 * Created by csc on 15-2-3.
 */
function PrintShoppingList(barcodeObject,collection) {
    var strHeader = '***<没钱赚商店>购物清单***' + '\n';
    var strFootA = '----------------------' + '\n';
    var strSailTitle = '挥泪赠送商品：\n';
    var strFootB= '**********************';
    var strBody = '';
    var strBodySail = '';

    _.each(barcodeObject,function (objI) {


        var promotions = loadPromotions();
        promotions[0].barcode.forEach(function (barcodeJ) {
            if (barcodeJ == objI.barcode) {
                strBodySail = strBodySail + '名称：' + objI.name + '，数量：1' + objI.unit + '\n';
            }
        });
        strBody = strBody + '名称：' + objI.name + '，' + '数量：' + objI.count_temp
        + objI.unit + '，' + '单价：' + objI.price + '(元)，小计：' + objI.countPrice + '(元)\n';
    });


    var strCount = '总计：' + parseFloat(collection[0]).toFixed(2) + '(元)\n';
    var strSail = '节省：' + parseFloat(collection[1]).toFixed(2) + '(元)\n';
    var strData = '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n';
    var strAll = strHeader + strData + strFootA + strBody + strFootA + strSailTitle + strBodySail + strFootA + strCount + strSail + strFootB;

    console.log(strAll);
}