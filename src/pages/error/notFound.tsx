import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Layout, Result, Button } from 'antd';

const { Content } = Layout;

const NotFound = (): ReactElement => {
    return (
        <Layout>
            <Content>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist"
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

export default NotFound;
