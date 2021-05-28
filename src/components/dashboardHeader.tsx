import React, { ReactElement, useEffect } from 'react';

import { changeAccount } from '../actions/data';
import { GlobalState, Account } from '../interfaces';
import { connect } from 'react-redux';

import { Statistic, Row, Col } from 'antd';

interface DashboardHeaderProps {
    currentAccount: Account;
    changeAccount(accountUID: number): void;
}

const DashboardHeader = ({ currentAccount }: DashboardHeaderProps): ReactElement => {
    // useEffect(() => {
    //     changeAccount(1);
    // });

    if (currentAccount) {
        return (
            <div className="Dashboard-Header">
                {/* <Row gutter={16}>
                    <Col span={12}> */}
                <Statistic
                    title="Current Balance"
                    // value={parseFloat(currentAccount.currentBalance)}
                    value={110}
                    precision={2}
                />
                {/* </Col>
                </Row> */}
            </div>
        );
    } else {
        return (
            <div>
                <h1>Empty</h1>
            </div>
        );
    }
};

const mapStateToProps = (state: GlobalState) => ({
    currentAccount: state.data.currentAccount,
});

export default connect(mapStateToProps, { changeAccount })(DashboardHeader);
