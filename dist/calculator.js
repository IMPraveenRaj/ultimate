"use strict";
//data
//initial amount
//annual contribution
//what will the return of investment for 1 year 5 years and 10 years expected return
//duration
Object.defineProperty(exports, "__esModule", { value: true });
function calcualteInvestment(data) {
    console.log("return of investment in processsig");
    //lets build a logic by destructuring the investment data objects and get all the value from that
    const { initialAmout, annualContribution, expectedReturn, duration } = data;
    if (initialAmout < 0) {
        return "Initial amount must be at least zero";
    }
    if (duration < 0) {
        return "No valid amount of years provided";
    }
    if (expectedReturn < 0) {
        return "Expected return must be alteast zero";
    }
    let total = initialAmout;
    let totalContributions = 0;
    let totalInterestEarned = 0;
    const annualResults = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterestEarned = total - totalContributions - initialAmout;
        totalContributions = totalContributions + annualContribution;
        total = total + totalContributions;
        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterestEarned,
            totalContributions,
        });
    }
    return annualResults;
}
//lets print the investment resuluts
function printInvestmentResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResults.totalAmount.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearEndResults.totalInterestEarned.toFixed(0)}`);
        console.log("-------------------------------------------------");
    }
}
const investmentData = {
    initialAmout: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
const results = calcualteInvestment(investmentData);
printInvestmentResults(results);
//# sourceMappingURL=calculator.js.map