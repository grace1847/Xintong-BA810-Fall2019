//return the value of the items (sum the item price times quantity)
function SaleOrderItem(name, quantity, price){
    let SaleOrderItem = {};
    SaleOrderItem.name = name;
    SaleOrderItem.quantity = quantity;

    SaleOrderItem.addQuantity = function (quantity) {
        SaleOrderItem.quantity.push(quantity)
    }

    SaleOrderItem.price = price ? price : [];

    SaleOrderItem.addPrice = function (price) {
        SaleOrderItem.price.push(price)
    }

    SaleOrderItem.Value = function(){
        return quantity * this.price;
    }
    return SaleOrderItem;
}

console.log(SaleOrderItem);
module.exports = SaleOrderItem;

