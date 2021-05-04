import React, { FC, ReactElement, useState } from 'react';

import { Redirect } from 'react-router-dom';

import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const resetPasswordConfirm: FC = (): ReactElement => {
    const [form] = Form.useForm();
    const [requestSent, setRequestSent] = useState(false);

    const onFinish = () => {
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to="/" />;
    }

    return (
        <div>
            <h1>Reset Password</h1>
            <Form name="Reset Password" className="resetPasswordConfirm-form" form={form} onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="resetPasswordConfirm-button">
                        Request Password Reset
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default resetPasswordConfirm;
