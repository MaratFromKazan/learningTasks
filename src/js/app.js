import {calculateBonus} from "./lib.js";

const sales = [12000, 8000, 10000, 15000, 2000];
const thresholdValue = 10000;

const bonus = calculateBonus(sales, thresholdValue);

console.log(bonus);