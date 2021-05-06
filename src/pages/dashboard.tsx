import React, { FC, ReactElement } from 'react';

import { Layout } from 'antd';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

const { Content } = Layout;

const Dashboard: FC = (): ReactElement => {
    return (
        <Layout>
            <Navbar />
            <Content></Content>
            <Footer />
        </Layout>
    );
};

export default Dashboard;
