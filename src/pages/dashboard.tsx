import React, { ReactElement, useEffect } from 'react';

import { Layout, Row, Col } from 'antd';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TransactionTable from '../components/transactionsTable';
import SelectAccounts from '../components/selectAccount';
import DashboardHeader from '../components/dashboardHeader';

import { loadTransactions, changeAccount } from '../actions/data';
import { GlobalState, User } from '../interfaces';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const { Content } = Layout;

interface DashboardProps {
    isAuthenticated: boolean;
    loadTransactions(accountID: number): void;
    user: User;
    currentAccount: Account;
    changeAccount(accountUID: number): void;
}

const Dashboard = ({ isAuthenticated, loadTransactions, user, changeAccount }: DashboardProps): ReactElement => {
    useEffect(() => {
        if (user) {
            loadTransactions(1);
            changeAccount(1);
        }
    }, []);

    if (!isAuthenticated) return <Redirect to="/error/notAuthenticated/" />;

    return (
        <Layout>
            <Navbar />
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <Row gutter={16}>
                    <Col span={12}>
                        <DashboardHeader />
                    </Col>
                    <Col span={12}>
                        <SelectAccounts />
                    </Col>
                </Row>

                <TransactionTable />
            </Content>
            <Footer />
        </Layout>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    user: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
    currentAccount: state.data.currentAccount,
});

export default connect(mapStateToProps, { loadTransactions, changeAccount })(Dashboard);
