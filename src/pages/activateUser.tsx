import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { verify } from '../actions/auth';

import { Form, Button } from 'antd';

interface ActivateUserProps {
    match: any;
    verify: any;
}

const activateUser = ({ match, verify }: ActivateUserProps): ReactElement => {
    const [requestSent, setRequestSent] = useState(false);

    const onFinish = (values: any) => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setRequestSent(true);
    };

    // If loading, insert Spinner
    // if (loading) {
    //     return <div></div>;
    // }

    // After sending request successfully, redirect back to Login
    if (requestSent) {
        return <Redirect to="/" />;
    }

    // // If error, insert tooltop
    // if (error) {
    //     return <div></div>;
    // }

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

export default connect(null, { verify })(activateUser);
