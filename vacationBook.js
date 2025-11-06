function vacationBooks(pages, pagesRidenPerHour, days) {
    let totalTime = pages / pagesRidenPerHour;
    let hoursPerDay = totalTime / days;
    console.log(hoursPerDay);
}