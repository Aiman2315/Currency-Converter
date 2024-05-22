#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
]);
let fromCurrency = currency[answer.from]; // Exchange rate
let toCurrency = currency[answer.to]; // Exchange rate
let amount = answer.amount;
let baseAmount = amount / fromCurrency;
let convertedAmount = baseAmount * toCurrency;
// console.log(fromCurrency);
// console.log(toCurrency);
// console.log(amount);
console.log(convertedAmount);
