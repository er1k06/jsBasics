function foodDelivery(chickenMenu, fishMenu, vegetarianMenu)
{
let chickenPrice = chickenMenu * 10.35;
let fishPrice = fishMenu * 12.40;
let vegetarianPrice = vegetarianMenu * 8.15;
let totalMenuPrice = chickenPrice + fishPrice + vegetarianPrice;
let dessertPrice = totalMenuPrice * 0.20;
let totalPrice = totalMenuPrice + dessertPrice + 2.50;
console.log(totalPrice);
}