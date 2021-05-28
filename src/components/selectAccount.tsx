import React, { ReactElement, useEffect } from 'react';

import { Select } from 'antd';

const { Option } = Select;

import { connect } from 'react-redux';
import { GlobalState, User, Account } from '../interfaces';

import { loadAccounts, changeAccount } from '../actions/data';

interface SelectAccountProps {
    loadAccounts(userID: number): void;
    user: User;
    allAccounts: Account[];
    changeAccount(accountUID: number): void;
}

const SelectAccount = ({ loadAccounts, user, allAccounts, changeAccount }: SelectAccountProps): ReactElement => {
    useEffect(() => {
        if (user) {
            loadAccounts(user.id);
        }
    }, []);

    const onChange = (value: any) => {
        changeAccount(value);
    };

    return (
        <div className="selectAccount">
            <Select defaultValue="All" style={{ width: 120 }} onChange={onChange}>
                {allAccounts.map((value: Account, index: number) => {
                    return (
                        <Option key={index} value={value.AccountUID}>
                            {value.name}
                        </Option>
                    );
                })}
            </Select>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    user: state.auth.user,
    allAccounts: state.data.allAccounts,
});

export default connect(mapStateToProps, { loadAccounts, changeAccount })(SelectAccount);
