function fishTank(length, width, height, percentFilled) {
    let volumeInCm3 = length * width * height;
    let volumeInLiters = volumeInCm3 / 1000;
    let filledVolume = volumeInLiters * (1 - percentFilled / 100);
    console.log(filledVolume);
}