export function calculateBonus(sales, thresholdValue) {

    let bonusAmount = 0;

    for (const sale of sales){

        let difference = sale - thresholdValue;

        if (difference > 0) {

            const bonus = difference * 0.05;

            bonusAmount += bonus;
        }
    }

    return bonusAmount;

}
