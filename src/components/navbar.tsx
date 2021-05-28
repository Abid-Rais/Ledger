import React, { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

import { logout } from '../actions/auth';
import { connect } from 'react-redux';

interface NavbarProps {
    logout: any;
}

const Navbar = ({ logout }: NavbarProps): ReactElement => {
    const handleLogout = () => {
        logout();
    };

    return (
        <Layout>
            <Header>
                <Menu
                    style={{ position: 'relative', top: '0px' }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1">
                        <Link to="/dashboard/">Dashboard</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/graphs/">Graphs</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/connectPlaid/">Connect Bank Account</Link>
                    </Menu.Item>
                    <Menu.Item key="4" style={{ float: 'right' }} onClick={handleLogout}>
                        <Link to="/">Logout</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};

export default connect(null, { logout })(Navbar);
