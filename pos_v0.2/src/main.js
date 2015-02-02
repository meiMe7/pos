//TODO: Please write code in this file.
function printInventory(inputs) {
    var collection_a = create_Product_barcode_list();
    var collection_b = create_barcode(inputs);
    var result = create_list(collection_a,collection_b);
    print_shopping_list(result);
}

function create_list(collection_a,collection_b){
    var result = [];
    for(var i = 0;i<collection_a.length;i++){
        var obj = {
            barcode: '',
            name: '',
            unit: '',
            price: 0,
            count_temp:0
        };
        for(var j=0;j<collection_b.length;j++){

            if(collection_a[i].barcode == collection_b[j].barcode){
                obj.barcode = collection_a[i].barcode;
                obj.name = collection_a[i].name;
                obj.unit = collection_a[i].unit;
                obj.price = collection_a[i].price;
                obj.count_temp = collection_b[j].count_temp;

            }
        } result.push(obj);
    }
    return result;
}
function create_Product_barcode_list(){
    var Product_barcode_list = [{
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00

    },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        }];
    return Product_barcode_list;
}
function create_barcode(collection_a){
    var result =[];

    for (var i=0;i< collection_a.length;i++) {
        var  sum = 1;
        var obj = {};
        for (var j=i+1;j< collection_a.length;j++){
            if(collection_a[i] == collection_a[j]) {
                sum ++;
                i=j;
            }
        }

        obj = {barcode:collection_a[i],count_temp:sum};

        obj.count_temp = sum;
        result.push(obj);
    }
    return result;
}
function print_shopping_list(inputs) {
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