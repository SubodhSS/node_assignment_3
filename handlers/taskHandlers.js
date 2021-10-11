const { get, sortBy } = require('lodash');

const { accountBalanceHistorySchema } = require('./schemas/taskSchema');
const accountTypeChecker = (req, res) => {
    console.log('req body ====>', req.body);
    const { accountBalanceHistory } = req.body;
    let { error, value } = accountBalanceHistorySchema.validate(
        accountBalanceHistory
    );
    if (error) {
        const { details } = error;
        return res.status(400).send({
            details
        });    
    }

    // sort by month
    const sortedAccountBalanceHistoryByMonth = sortBy(accountBalanceHistory, ['monthNumber']);
    let diff = 0;
    let isChange = 0;
    sortedAccountBalanceHistoryByMonth.forEach((data, index) => {
        // Skip 1st record and find difference 0th & 1st array element
        if(index === 1) {
            const amount = get(data, 'account.balance.amount', 0);
            const prevAmount = get(sortedAccountBalanceHistoryByMonth, `[${index - 1}].account.balance.amount`, 0);
            if((amount - prevAmount) > 0) {
                diff = amount - prevAmount;
            } else {
                return res.status(400).send('Bad Data');
            }
        }
        if(index > 1) {
            const amount = get(data, 'account.balance.amount', 0);
            const prevAmount = get(sortedAccountBalanceHistoryByMonth, `[${index - 1}].account.balance.amount`, 0);
            if((amount - prevAmount) !== diff) {
                isChange += 1;
            } else {
                return res.status(400).send('Bad Data');
            }
        }
    });
    if(isChange) {
        return res.status(200).send('A balance history where the balance amount decreases by varying amounts each month.');
    }
    return res.status(200).send('The balance amount changes by the same amount each month');
}

module.exports = { accountTypeChecker };