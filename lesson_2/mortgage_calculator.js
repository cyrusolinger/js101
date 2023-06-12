// inputs
// loan amount
// Annual Percentage Rate (APR)
// loan duration

// output
// monthly payment in dollars and cents

const loanAmount = 100000;
const APR = .07;
const loanDurationInYears = 30;

const monthlyInterestRate = APR / 12;
const loanDurationInMonths = loanDurationInYears * 12;


// formula for monthly payment
let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));

console.log('This is your monthly payment: $' + monthlyPayment.toFixed(2));

