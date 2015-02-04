/**
 * Created by csc on 15-2-3.
 */
var turned_barcode_to_list =function() {
    var collection = [];
    var collection_message =[];
    var sail_collection_message = [];
    this.count_barcode = function(){
        var collection_a = this.collection;
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
        this.collection = result;
    };
    this.split_barcode = function(){
        var collection = this.collection;
        for (var i=0;i<collection.length;i++) {
            var arr =  new String(collection[i].barcode).split("-");
            if(arr[1]!=undefined)
            {   collection[i].barcode =arr[0];
                collection[i].count_temp=Number(arr[1]);
            }
        }
       this.collection = collection;
    },
    this.create_list = function (){
        var collection_a = this.collection_message;
        var collection_b = this.collection;
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
    this.collection = result;
}
    this.sum_count_price = function(){
        var collection_a = this.collection;
        var collection_b = this.sail_collection_message;
    var all_count = 0;
    var sail_count = 0.00;
    for(var i in collection_a){
        all_count = all_count+collection_a[i].price*collection_a[i].count_temp;
        for(var k in  collection_b){
            for(var j in collection_b[k].barcode){
                if(collection_b[k].barcode[j] == collection_a[i].barcode){
                    sail_count = sail_count + collection_a[i].price;
                }
            }
        }
    }     all_count = parseFloat(all_count-sail_count).toFixed(2);
    return [all_count,sail_count];
}

};