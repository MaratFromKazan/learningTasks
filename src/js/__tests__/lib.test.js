
import {calculateBonus} from "../lib.js";

test('it should calculate bonus', () => {
    const sales = [12000, 8000, 10000, 15000, 2000];
    const thrasholdValue = 10000;
    const expected = 350;

    const result = calculateBonus(sales, thrasholdValue);

    expect(result).toBe(expected);
})
