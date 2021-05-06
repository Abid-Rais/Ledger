import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { LOGIN } from '../graphql/mutations';

const Login: FC = (): ReactElement => {
    const [form] = Form.useForm();
    const [tokenAuth, { data, loading, error }] = useMutation(LOGIN);

    const onFinish = (values: any) => {
        console.log(values);
        tokenAuth({
            variables: {
                username: values.username,
                password: values.password,
            },
        });
    };

    // if (data) console.log(data);
    // if (error) console.log(error);

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
