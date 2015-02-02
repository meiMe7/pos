//TODO: Please write code in this file.
function printInventory(inputs) {
    var str_header = '***<没钱赚商店>购物清单***'+'\n';
    var str_foot_a = '----------------------'+'\n';
    var str_foot_b = '**********************';
    var str_body ='';
    var all_count = 0;
    for(var i in inputs){
        var count = parseFloat(inputs[i].price*inputs[i].count).toFixed(2);
        var price = parseFloat(inputs[i].price).toFixed(2);
        str_body = str_body+'名称：'+inputs[i].name+'，'+'数量：'+inputs[i].count+inputs[i].unit+'，'+'单价：'+price+'(元)，小计：'+count+'(元)\n';
        all_count = all_count+inputs[i].price*inputs[i].count;
    }
    var str_count = '总计：'+parseFloat(all_count).toFixed(2)+'(元)\n';
    var str_all = str_header+str_body+str_foot_a+str_count+str_foot_b;
    console.log(str_all);
}