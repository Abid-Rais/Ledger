import React, { FC, ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import { Form, Button } from 'antd';
import { VERIFY_USER } from '../graphql/mutations';

const activateUser: FC<RouteComponentProps> = ({ match }): ReactElement => {
    const [requestSent, setRequestSent] = useState(false);
    const [verifyAccount, { data, loading, error }] = useMutation(VERIFY_USER);

    const onFinish = () => {
        verifyAccount({
            variables: {
                token: match.params,
            },
        });
        setRequestSent(true);
    };

    if (data) console.log(data);

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
