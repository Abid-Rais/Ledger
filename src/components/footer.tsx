import React, { FC, ReactElement } from 'react';

import { Layout } from 'antd';

const { Footer } = Layout;

const Footer_: FC = (): ReactElement => {
    return (
        <Layout>
            <Footer style={{ textAlign: 'center', position: 'absolute', left: 0, right: 0 }}>
                Ledger ©2021 | Created by Abid
            </Footer>
        </Layout>
    );
};

export default Footer_;
