import React, { FC, ReactElement } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { userID } from '../cache';

const Login: FC = (): ReactElement => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {};

    // If loading, insert Spinner
    if (loading) {
        return <div></div>;
    }

    // If signed in successfully, redirect to Dashboard
    if (data && data.tokenAuth.success) {
        userID(data.tokenAuth.user.id);
        return <Redirect to="/dashboard/" />;
    }

    // If error, insert tooltop
    if (error) {
        return <div></div>;
    }

    return (
        <Form name="Login" className="login-form" form={form} onFinish={onFinish}>
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password' }]}>
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                Or <Link to="/signup/">register now!</Link>
            </Form.Item>
        </Form>
    );
};

export default Login;
