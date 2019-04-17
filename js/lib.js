export function calculateBonus(sales, thresholdValue, bonusPersent) {

    let bonusAmount = 0;

    for (const sale of sales){

        let difference = sale - thresholdValue;

        if (difference > 0) {

            const bonus = difference * (bonusPersent/100);

            bonusAmount += bonus;
        }
    }

    return bonusAmount;

}
