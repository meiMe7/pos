function printInventory(inputs) {
    var temp=CreateBarcodeCount(inputs);
    var output = uniqueArray(temp);
    PrintShoppingList(output);
}
function uniqueArray(inputs){
    var arrayTemp = [];

    for (var j = 0; j <inputs.length; j++) {
        var flag = false;
        for (var k = 0; k < arrayTemp.length; k++) {
            if (arrayTemp[k].name.indexOf(inputs[j].name) > -1) {
                flag = true;
                break;  }        }
        if (!flag) arrayTemp.push(inputs[j])
    }

    return arrayTemp
    }
function CreateBarcodeCount(inputs){
    var output=[];

    for(var object_i in inputs){
        var obj ={
            barcode: '',
            name: '',
            unit: '',
            price:0,
            count_temp:0};
        obj.barcode=inputs[object_i].barcode;
        obj.name=inputs[object_i].name;
        obj.unit=inputs[object_i].unit;
        obj.price=inputs[object_i].price;
        obj.count_temp = 0;
        for(var object_j in inputs){
            if(inputs[object_i].barcode==inputs[object_j].barcode){
                obj.count_temp =  obj.count_temp+1;

            }}
        output.push(obj);
    }
    return output;
}
function PrintShoppingList(inputs) {
    var stringHeader = '***<没钱赚商店>购物清单***'+'\n';
    var stringFootA = '----------------------'+'\n';
    var stringFootB = '**********************';
    var stringBody ='';
    var allCount = 0;
    for(var i in inputs){
        var count = parseFloat(inputs[i].price*inputs[i].count_temp).toFixed(2);
        var price = parseFloat(inputs[i].price).toFixed(2);
        stringBody = stringBody+'名称：'+inputs[i].name+'，'+'数量：'+inputs[i].count_temp+inputs[i].unit+'，'+'单价：'+price+'(元)，小计：'+count+'(元)\n';
        allCount = allCount+inputs[i].price*inputs[i].count_temp;
    }
    var stringCount = '总计：'+parseFloat(allCount).toFixed(2)+'(元)\n';
    var stringAll = stringHeader+stringBody+stringFootA+stringCount+stringFootB;
    console.log(stringAll);
}