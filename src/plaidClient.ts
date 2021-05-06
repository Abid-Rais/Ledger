import { Client } from 'plaid';

const { PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENVIRONEMNT } = process.env;

export const plaidClient = new Client({
    clientID: PLAID_CLIENT_ID || '',
    secret: PLAID_SECRET || '',
    env: PLAID_ENVIRONEMNT || '',
    options: {
        version: '2020-09-14',
    },
});
