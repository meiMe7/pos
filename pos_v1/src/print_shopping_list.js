/**
 * Created by csc on 15-2-3.
 */
function print_shopping_list(inputs) {
    var str_header = '***<没钱赚商店>购物清单***'+'\n';
    var str_foot_a = '----------------------'+'\n';
    var str_sail_title = '挥泪赠送商品：\n';
    var str_foot_b = '**********************';
    var str_body ='';
    var all_count = 0;
    var str_body_sail = '';
    var sail_count = 0;
    for(var i in inputs){
        var count = parseFloat(inputs[i].price*inputs[i].count_temp).toFixed(2);
        var price = parseFloat(inputs[i].price).toFixed(2);

        all_count = all_count+inputs[i].price*inputs[i].count_temp;
        var promotions = loadPromotions();

        for(var j in promotions[0].barcode){
            if(promotions[0].barcode[j] == inputs[i].barcode){
                count = parseFloat(inputs[i].price*(inputs[i].count_temp-1)).toFixed(2);
                str_body_sail = str_body_sail +'名称：'+inputs[i].name+'，数量：1'+inputs[i].unit+'\n';
                sail_count = sail_count + inputs[i].price;
            }
        }
        str_body = str_body+'名称：'+inputs[i].name+'，'+'数量：'+inputs[i].count_temp+inputs[i].unit+'，'+'单价：'+price+'(元)，小计：'+count+'(元)\n';
    }
    var str_count = '总计：'+parseFloat(all_count-sail_count).toFixed(2)+'(元)\n';
    var str_sail = '节省：'+parseFloat(sail_count).toFixed(2)+'(元)\n';
    var str_all = str_header+str_body+str_foot_a+str_sail_title+str_body_sail+str_foot_a+str_count+str_sail+str_foot_b;
    console.log(str_all);
}