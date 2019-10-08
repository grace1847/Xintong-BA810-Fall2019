//returns total value (sum of the value of the items plus the sales tax)
function TotalSaleValue(saletax, SaleOrderItem){
    let TotalSaleValue = {};
    TotalSaleValue.saletax = saletax ? saletax : [];

    TotalSaleValue.addSaletax = function (saletax) {
        TotalSaleValue.saletax.push(saletax)
    }

    TotalSaleValue.add = function(){
        return SaleOrderItem + (1 + this.saletax);
    }
    return TotalSaleValue;
}

console.log(TotalSaleValue);
module.exports = TotalSaleValue;

