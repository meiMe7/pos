/**
 * Created by csc on 15-2-3.
 */
function createBarcode(collection_a){
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