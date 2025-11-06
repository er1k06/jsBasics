function depositCalculator(deposit, period, yearAnnualPercent)
{
    let yearIncome = deposit * yearAnnualPercent / 100;
    let monthIncome = yearIncome / 12;
    let finalIncome= deposit + period * monthIncome;
    console.log(finalIncome);
}