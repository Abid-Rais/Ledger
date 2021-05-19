import React, { ReactElement, useState } from 'react';

import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import { signup } from '../actions/auth';

import { GlobalState } from '../interfaces';

import { Form, Input, Checkbox, Button } from 'antd';

interface RegisterUsersProps {
    signup: any;
    isLoading: boolean;
}

const Register = ({ signup }: RegisterUsersProps): ReactElement => {
    const [userCreated, setUserCreated] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        const { email, username, password, confirm_password } = values;
        signup(email, username, password, confirm_password);
        setUserCreated(true);
    };

    // if (loading) return <div></div>;

    // Insert tooltip to check email for verifcation link
    if (userCreated) {
        return <div></div>;
    }

    // if (error) return <div></div>;

    return (
        <Form {...formItemLayout} form={form} name="Register" scrollToFirstError onFinish={onFinish}>
            {/* Username */}
            <Form.Item
                name="username"
                label="Username"
                rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
            >
                <Input />
            </Form.Item>

            {/* Email */}
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            {/* Password */}
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
                name="confirm_password"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            {/* Agreement Checkbox */}
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>

            {/* Register Button */}
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

export default connect(null, { signup })(Register);
