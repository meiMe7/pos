/**
 * Created by csc on 15-2-3.
 */
function print_shopping_list(collection,sum) {
    var str_header = '***<没钱赚商店>购物清单***'+'\n';
    var str_foot_a = '----------------------'+'\n';
    var str_sail_title = '挥泪赠送商品：\n';
    var str_foot_b = '**********************';
    var str_body ='';
    var str_body_sail = '';
    var promotions = loadPromotions();
    var str_count = '总计：'+parseFloat(sum[0]).toFixed(2)+'(元)\n';
    var str_sail = '节省：'+parseFloat(sum[1]).toFixed(2)+'(元)\n';
    var str_date = '打印时间：'+date_show()+'\n';
    for(var i in collection){
        var count = parseFloat(collection[i].price*collection[i].count_temp).toFixed(2);
        var price = parseFloat(collection[i].price).toFixed(2);
        for(var j in promotions[0].barcode){
            if(promotions[0].barcode[j] == collection[i].barcode){
                count = parseFloat(collection[i].price*(collection[i].count_temp-1)).toFixed(2);
                str_body_sail = str_body_sail +'名称：'+collection[i].name+'，数量：1'+collection[i].unit+'\n'; }        }
        str_body = str_body+'名称：'+collection[i].name+'，'+'数量：'+collection[i].count_temp+collection[i].unit+'，'+'单价：'+price+'(元)，小计：'+count+'(元)\n';
    }
    var str_all = str_header+str_date+str_foot_a+str_body+str_foot_a+str_sail_title+str_body_sail+str_foot_a+str_count+str_sail+str_foot_b;
    console.log(str_all);
}
function date_show(){
    var dateDigitToString;
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
    var currentDate = new Date();
    var year = dateDigitToString(currentDate.getFullYear());
    var month  = dateDigitToString(currentDate.getMonth() + 1);
    var date = dateDigitToString(currentDate.getDate());
    var hour = currentDate.getHours();
    var minute =  dateDigitToString(currentDate.getMinutes());
    var second = dateDigitToString(currentDate.getSeconds());
    var  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return formattedDateString;
}