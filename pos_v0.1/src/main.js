//TODO: Please write code in this file.
function printInventory(inputs) {
    var output=create_count(inputs);
    var temp = unique_arr(output);
    print_shoping_list(temp);
}
function unique_arr(inputs){
    var arr_temp = [];
    for (var j = 0; j <inputs.length; j++) {
        var flag = false;
        for (var k = 0; k < arr_temp.length; k++) {
            if (arr_temp[k].name.indexOf(inputs[j].name) > -1) {
                            flag = true; break;
            }
        }
        if (!flag) {
            arr_temp.push(inputs[j])
        }
    }
    return arr_temp;
    for(var i =0;i<inputs.length;i++) {
        for(var j =1;j<inputs.length;j++){}
}}
function create_count(inputs){
    var output=[];

    for(var i =0;i<inputs.length;i++){
        var obj ={
            barcode: '',
            name: '',
            unit: '',
            price:0,
            count_temp:1};
        obj.barcode=inputs[i].barcode;
        obj.name=inputs[i].name;
        obj.unit=inputs[i].unit;
        obj.price=inputs[i].price;
        obj.count_temp = 0;
         for(var j =-0;j<inputs.length;j++){
            if(inputs[i].barcode==inputs[j].barcode){
                obj.count_temp =  obj.count_temp+1;
               // i=j;
               }}
        output.push(obj);
    }
    return output;
}
function print_shoping_list(inputs) {
    var str_header = '***<没钱赚商店>购物清单***'+'\n';
    var str_foot_a = '----------------------'+'\n';
    var str_foot_b = '**********************';
    var str_body ='';
    var all_count = 0;
    for(var i in inputs){
        var count = parseFloat(inputs[i].price*inputs[i].count_temp).toFixed(2);
        var price = parseFloat(inputs[i].price).toFixed(2);
        str_body = str_body+'名称：'+inputs[i].name+'，'+'数量：'+inputs[i].count_temp+inputs[i].unit+'，'+'单价：'+price+'(元)，小计：'+count+'(元)\n';
        all_count = all_count+inputs[i].price*inputs[i].count_temp;
    }
    var str_count = '总计：'+parseFloat(all_count).toFixed(2)+'(元)\n';
    var str_all = str_header+str_body+str_foot_a+str_count+str_foot_b;
    console.log(str_all);
}