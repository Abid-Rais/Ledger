import React, { FC, ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { Form, Button } from 'antd';

const activateUser: FC = (): ReactElement => {
    const [requestSent, setRequestSent] = useState(false);
    const onFinish = () => {
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Confirm Account Creation</h1>
            <div>
                <Form name="activateUser" className="activateUser-form" onFinish={onFinish}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="activateUser-form-button">
                            Activate Account
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default activateUser;
