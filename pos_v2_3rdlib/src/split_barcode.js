/**
 * Created by csc on 15-2-3.
 */
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