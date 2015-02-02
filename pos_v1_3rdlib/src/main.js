//TODO: Please write code in this file.
function  printInventory(inputs){
    var collection =create_barcode(inputs);
    var collection_b = split_barcode(collection);
    var collection_a = loadAllItems();
    var collection = create_list(collection_a,collection_b);
    print_shopping_list(collection);
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
        } if(obj.barcode != '')result.push(obj);
    }
    return result;
}
function loadAllItems() {
    return [
        {
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
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}
function split_barcode(collection){
    for (var i=0;i<collection.length;i++) {
        var arr =  new String(collection[i].barcode).split("-");

        if(arr[1]!=undefined)
        {   collection[i].barcode =arr[0];
            collection[i].count_temp=Number(arr[1]);

        }

    }
    return collection;
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
function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcode: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}
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