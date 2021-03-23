const { transact } = require('../api')
const { ACCOUNT, ACCOUNT_PERMISSION } = require('../constants')

const createToken = async ({ maximumSupply }) => {
    await transact([{
        account: ACCOUNT,
        name: 'create',
        data: {
            issuer: ACCOUNT,
            maximum_supply: maximumSupply
        },
        authorization: [{ actor: ACCOUNT, permission: ACCOUNT_PERMISSION }]
    }])
}

module.exports = {
    createToken
}