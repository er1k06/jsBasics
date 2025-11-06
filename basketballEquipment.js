function equipmentBasketball(annualTax)
{
let basketballSneakers = annualTax - (annualTax * 0.40);
let basketballKit= basketballSneakers - (basketballSneakers * 0.20);
let basketballBall = basketballKit / 4;
let basketballAccessories = basketballBall / 5;
let totalPrice = annualTax + basketballSneakers + basketballKit + basketballBall + basketballAccessories;
console.log(totalPrice);
}

