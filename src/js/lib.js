export function calculateBonus(sales, thresholdValue) {

    let bonusAmount = 0;

    for (let sale of sales){

        let difference = sale - thresholdValue;

        if (difference > 0) {

            let bonus = difference * 0.05;

            bonusAmount += bonus;
        }
    }

    return bonusAmount;

}
