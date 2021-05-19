import React, { ReactElement, useState } from 'react';

import { Redirect } from 'react-router-dom';

import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

import { reset_password } from '../actions/auth';

interface ResetPasswordProps {
    reset_password: any;
}

const resetPassword = ({ reset_password }: ResetPasswordProps): ReactElement => {
    const [requestSent, setRequestSent] = useState(false);

    const onFinish = (e: any) => {
        reset_password(e.email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <Form name="Reset Password" className="resetPassword-form" onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="resetPassword-button">
                        Request Password Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default connect(null, { reset_password })(resetPassword);
