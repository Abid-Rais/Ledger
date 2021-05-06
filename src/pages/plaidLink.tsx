import React, { FC, ReactElement, useEffect } from 'react';
import { PlaidLink } from 'react-plaid-link';

import { Layout } from 'antd';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const { PLAID_PUBLIC_KEY } = process.env;

const { Content } = Layout;

const Link: FC = (): ReactElement => {
    // (Optional): Load new link_token
    // Doing publicKey method
    useEffect(() => {
        console.log();
    });

    // Send the public_token to app server
    // The onSuccess function is called when the user has successfully
    // authenticated and selected an account to use.
    const onSuccess = (token: string, metadata: any) => {
        console.log();
    };

    // Gracefully handle the invalid link token error. A link token
    // can become invalidated if it expires, has already been used
    // for a link session, or is associated with too many invalid logins.
    const onExit = () => {
        console.log();
    };

    return (
        <Layout>
            <Navbar />
            <Content>
                <PlaidLink
                    clientName="Ledger"
                    env="sandbox"
                    product={['auth', 'transactions']}
                    publicKey={PLAID_PUBLIC_KEY || '668a83c8171c9519018c53afa0242b'}
                    onExit={onExit}
                    onSuccess={onSuccess}
                >
                    Open Link and connect your bank!
                </PlaidLink>
            </Content>
            <Footer />
        </Layout>
    );
};

export default Link;
