import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Result, Button } from 'antd';

const { Content } = Layout;

const NotAuthenticated = (): ReactElement => {
    return (
        <Layout>
            <Content>
                <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page"
                    extra={
                        <Button type="primary">
                            <Link to="/">Return to Login</Link>
                        </Button>
                    }
                />
            </Content>
        </Layout>
    );
};

export default NotAuthenticated;
