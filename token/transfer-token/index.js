const { transact } = require('../../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../../constants')

const transferToken = async ({ to, quantity, memo }) => {
    await transact([{
        account: ACCOUNT,
        name: 'transfer',
        data: {
            from: ACCOUNT,
            to,
            quantity,
            memo
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }]
    }])
}

module.exports = {
    transferToken
}