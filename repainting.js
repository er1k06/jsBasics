function repainting(nailon, paint, thinner, hours)
{
    let nailonPrice= (nailon + 2) * 1.50;
    let paintPrice = (paint + (paint * 0.10)) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let materialPrice = nailonPrice + paintPrice + thinnerPrice + 0.40;
    let laborPrice = (materialPrice * 0.30) * hours;
    let totalPrice = materialPrice + laborPrice;
    console.log(totalPrice);
}