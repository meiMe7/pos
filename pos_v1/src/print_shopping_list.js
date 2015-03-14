/**
 * Created by csc on 15-2-3.
 */
function PrintShoppingList(barcodeObject) {
    var stringHeader = '***<没钱赚商店>购物清单***' + '\n';
    var stringFootA = '----------------------' + '\n';
    var stringSailTitle = '挥泪赠送商品：\n';
    var stringFootB = '**********************';
    var stringBody = '';
    var allCount = 0;
    var stringBodySail = '';
    var sailCount = 0;
    _.filter(barcodeObject,function (objI) {
        var count = parseFloat(objI.price * objI.count_temp).toFixed(2);
        var price = parseFloat(objI.price).toFixed(2);

        allCount = allCount + objI.price * objI.count_temp;
        var promotions = loadPromotions();

        _.filter(promotions[0].barcode,function(j) {
            if (j == objI.barcode) {
                count = parseFloat(objI.price * (objI.count_temp - 1)).toFixed(2);
                stringBodySail = stringBodySail + '名称：' + objI.name + '，数量：1' + objI.unit + '\n';
                sailCount = sailCount + objI.price;
            }
        });
        stringBody = stringBody + '名称：' + objI.name + '，' + '数量：' + objI.count_temp + objI.unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
    });
    var stringCount = '总计：' + parseFloat(allCount - sailCount).toFixed(2) + '(元)\n';
    var stringSail = '节省：' + parseFloat(sailCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringSailTitle + stringBodySail + stringFootA + stringCount + stringSail + stringFootB;
    console.log(stringAll);
}