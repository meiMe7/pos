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
    for (var i in barcodeObject) {
        var count = parseFloat(barcodeObject[i].price * barcodeObject[i].count_temp).toFixed(2);
        var price = parseFloat(barcodeObject[i].price).toFixed(2);

        allCount = allCount + barcodeObject[i].price * barcodeObject[i].count_temp;
        var promotions = loadPromotions();

        for (var j in promotions[0].barcode) {
            if (promotions[0].barcode[j] == barcodeObject[i].barcode) {
                count = parseFloat(barcodeObject[i].price * (barcodeObject[i].count_temp - 1)).toFixed(2);
                stringBodySail = stringBodySail + '名称：' + barcodeObject[i].name + '，数量：1' + barcodeObject[i].unit + '\n';
                sailCount = sailCount + barcodeObject[i].price;
            }
        }
        stringBody = stringBody + '名称：' + barcodeObject[i].name + '，' + '数量：' + barcodeObject[i].count_temp + barcodeObject[i].unit + '，' + '单价：' + price + '(元)，小计：' + count + '(元)\n';
    }
    var stringCount = '总计：' + parseFloat(allCount - sailCount).toFixed(2) + '(元)\n';
    var stringSail = '节省：' + parseFloat(sailCount).toFixed(2) + '(元)\n';
    var stringAll = stringHeader + stringBody + stringFootA + stringSailTitle + stringBodySail + stringFootA + stringCount + stringSail + stringFootB;
    console.log(stringAll);
}