module.exports = function printReceipt(inputs) {
    console.log("Debug Info");

    var sum = inputs.map(input => input.Price).reduce((prev, next) => prev + next, 0);
    var products = new Array(3);
    var cokeCount = 0;
    var cokeSubTotal = 0.00;
    var cokeUnitPrice = 0.00;
    var spriteCount = 0;
    var spriteSubTotal = 0.00;
    var spriteUnitPrice = 0.00;
    var batteryCount = 0;
    var batterySubTotal = 0.00;
    var batteryUnitPrice = 0.00;

    var i;

    for(i = 0; i < inputs.length; i++)
    {
        if(inputs[i].Barcode == 'ITEM000000')
        {
            cokeCount = cokeCount + 1;
            cokeSubTotal = cokeSubTotal + inputs[i].Price;
            cokeUnitPrice = inputs[i].Price;
            products[0] = inputs[i].Name;
        }
        else if (inputs[i].Barcode == 'ITEM000001')
        {
            spriteCount = spriteCount + 1;
            spriteSubTotal = spriteSubTotal + inputs[i].Price;
            spriteUnitPrice = inputs[i].Price;
            products[1] = inputs[i].Name;
        }
        else if (inputs[i].Barcode == 'ITEM000004')
        {
            batteryCount = batteryCount + 1;
            batterySubTotal = batterySubTotal + inputs[i].Price;
            batteryUnitPrice = inputs[i].Price;
            products[2] = inputs[i].Name;
        }
    }


    return   '***<store earning no money>Receipt ***\n' +
                         'Name: '+products[0]+', Quantity: '+cokeCount+' bottles, Unit price: '+parseFloat(String(cokeUnitPrice)).toFixed(2)+' (yuan), Subtotal: '+parseFloat(String(cokeSubTotal)).toFixed(2)+' (yuan)\n' +
                         'Name: '+products[1]+', Quantity: '+spriteCount+' bottles, Unit price: '+parseFloat(String(spriteUnitPrice)).toFixed(2)+' (yuan), Subtotal: '+parseFloat(String(spriteSubTotal)).toFixed(2)+' (yuan)\n' +
                         'Name: '+products[2]+', Quantity: '+batteryCount+', Unit price: '+parseFloat(String(batteryUnitPrice)).toFixed(2)+' (yuan), Subtotal: '+parseFloat(String(batterySubTotal)).toFixed(2)+' (yuan)\n' +
                         '----------------------\n' +
                         'Total: '+parseFloat(String(sum)).toFixed(2)+' (yuan)\n' +
                         '**********************\n';


};