//test Item value
let SaleOrderItem = require('./itemModule');

let SaleOrderItem1 = new SaleOrderItem('Widget', 10, 2.5);
console.log(item1.Value());

let SaleOrderItem2 = new SaleOrderItem('./itemModule');

let SaleOrderItem2 = new SaleOrderItem('Gidget', 20, 1);
console.log(item2.Value());

//test Total value
const SaleOrderItem = require('./itemModule');
const TotalSaleValue = require('./valueModule');

let SaleOrderItem1 = new SaleOrderItem('Widget', 10, 2.5);
let SaleOrderItem2 = new SaleOrderItem('Gidget', 20, 1);

let TotalSaleValueAddTax = ('Customer', 0.1, [SaleOrderItem1, SaleOrderItem2])

let TotalValue = TotalSaleValueAddTax. TotalValue()
let TotalValueTax = TotalSaleValueAddTax. TotalValueTax()

console.log(TotalValue);
console.log(TotalValueTax);
