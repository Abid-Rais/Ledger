import React, { ReactElement, useState } from 'react';

import { Redirect } from 'react-router-dom';

import { Form, Input, Button, Card } from 'antd';
import { LockOutlined } from '@ant-design/icons';

import { connect } from 'react-redux';

import { reset_password_confirm } from '../actions/auth';

interface ResetPasswordConfirmProps {
    match: any;
    reset_password_confirm: any;
}

const resetPasswordConfirm = ({ match, reset_password_confirm }: ResetPasswordConfirmProps): ReactElement => {
    const [requestSent, setRequestSent] = useState(false);

    const onFinish = (e: any) => {
        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, e.new_password, e.re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <Card style={{ width: '50%' }}>
                <div>
                    <Form
                        name="resetPasswordConfirm"
                        className="resetPasswordConfirm-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="new_password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="New Password"
                            />
                        </Form.Item>
                        <Form.Item
                            name="re_new_password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Confirm New Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="resetPasswordConfirm-form-button">
                                Reset Password
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Card>
        </div>
    );
};

export default connect(null, { reset_password_confirm })(resetPasswordConfirm);
