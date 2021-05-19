import React, { useState } from 'react';
import { connect } from 'react-redux';

import {} from 'antd';

import { loadTransactions } from '../actions/data';
import { GlobalState, User } from '../interfaces';

interface HeaderProps {
    isAuthenticated: boolean;
    user: User | null;
}

const Header = ({ isAuthenticated, user }: HeaderProps) => {
    return <div></div>;
};

const mapStateToProps = (state: GlobalState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
});

export default connect(mapStateToProps, {})(Header);
