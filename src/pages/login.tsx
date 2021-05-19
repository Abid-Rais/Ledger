import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { login } from '../actions/auth';

import { Form, Input, Button, Spin } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';

import { GlobalState, User } from '../interfaces';

interface LoginProps {
    login: any;
    isAuthenticated: boolean;
    user: any;
    isLoading: boolean;
}

const Login = ({ login, isAuthenticated, user, isLoading }: LoginProps): ReactElement => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => login(values.email, values.password);

    // If loading, insert Spinner
    if (isLoading) {
        return <LoadingOutlined style={{ fontSize: 24 }} spin />;
    }

    // If signed in successfully, redirect to Dashboard
    if (isAuthenticated && user) {
        return <Redirect to="/dashboard/" />;
    }

    // If error, insert tooltop
    // if (error) {
    //     return <div></div>;
    // }

    return (
        <Form name="Login" className="login-form" form={form} onFinish={onFinish}>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email',
                    },
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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

const mapStateToProps = (state: GlobalState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, { login })(Login);
