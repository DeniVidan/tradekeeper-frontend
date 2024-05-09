const { RestClientV5 } = require('bybit-api');

// Function to retrieve execution list data
async function getExecutionList() {
    const client = new RestClientV5({
        testnet: true,
        key: '1L1ELXPqtd3bSCYgjA',
        secret: 'MQmAr3jmtQYrsgn9bnU8dPeQpapJwpSstA9C',
    });

    try {
        const response = await client.getExecutionList({
            category: 'linear',
            symbol: 'BTCUSDT',
            margin: '10',
        });
        return response;
    } catch (error) {
        console.error('Error retrieving execution list:', error);
        throw error;
    }
}

module.exports = { getExecutionList };