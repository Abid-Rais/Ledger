import React, { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Navbar: FC = (): ReactElement => {
    return (
        <Layout>
            <Header>
                <Menu
                    style={{ position: 'fixed', top: '0px' }}
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
                    <Menu.Item key="4" style={{ float: 'right' }}>
                        <Link to="/">Logout</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};

export default Navbar;
