const Joi = require('joi')

// const accountBalanceHistory = [
//     {
//       monthNumber: 0, // current month
//       account: {
//         balance: { amount: 0 },
//       },
//     },
//     {
//       monthNumber: 1, // last month
//       account: {
//         balance: { amount: 100 },
//       },
//     },
//     {
//       monthNumber: 2, // two months ago
//       account: {
//         balance: { amount: 200 },
//       },
//     }
//   ]
let balanceSchema = Joi.object().keys({
    amount: Joi.number().required().label('Amount is required field').messages({
        'any.required': `"amount" is a required field`
      }),
}).required().label('Balance is required field').messages({
    'any.required': `"balance" is a required field`
});;

let accountSchemas = Joi.object().keys({
    balance: balanceSchema,
}).required().label('Account is required field').messages({
    'any.required': `"account" is a required field`
});

let accountBalanceSchema = Joi.object().keys({
    account: accountSchemas,
    monthNumber: Joi.number().required(),
})



let accountBalanceHistorySchema = Joi.array().items(accountBalanceSchema);

module.exports = { accountBalanceHistorySchema };