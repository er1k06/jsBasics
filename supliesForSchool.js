function supliesForSchool(pens,markers,preparation,percentDiscount)
{
let pensPrice = pens * 5.80;
let markersPrice = markers * 7.20;
let preparationPrice = preparation * 1.20;
let totalPrice = pensPrice + markersPrice + preparationPrice;
let discount = totalPrice * percentDiscount / 100;
let finalPrice = totalPrice - discount;
console.log(finalPrice);
}