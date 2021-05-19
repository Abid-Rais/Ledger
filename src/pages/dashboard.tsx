import React, { FC, ReactElement } from 'react';

import { Layout } from 'antd';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TransactionTable from '../components/transactionsTable';

const { Content } = Layout;

const Dashboard: FC = (): ReactElement => {
    return (
        <Layout>
            <Navbar />
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <TransactionTable />
            </Content>
            <Footer />
        </Layout>
    );
};

export default Dashboard;
