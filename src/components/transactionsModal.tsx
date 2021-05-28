import React, { ReactElement, useState } from 'react';

import { Modal, Descriptions, Menu, Button } from 'antd';

import { Transaction } from '../interfaces';

interface TransactionModalProps {
    transactionData: Transaction;
}

const TransactionModal = ({ transactionData }: TransactionModalProps): ReactElement => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="transactions-modal">
            <Button type="primary" onClick={() => setVisible(true)}>
                View More
            </Button>

            <Modal
                title={`Transaction ID. ${transactionData.transactionID}`}
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                width={850}
            >
                <Descriptions bordered>
                    <Descriptions.Item label="ID" span={1.5}>
                        {transactionData.transactionID}
                    </Descriptions.Item>
                    <Descriptions.Item label="Amount" span={1.5}>
                        {transactionData.amount}
                    </Descriptions.Item>

                    <Descriptions.Item label="Merchant" span={1.5}>
                        {transactionData.merchantName}
                    </Descriptions.Item>
                    <Descriptions.Item label="Location" span={1.5}>
                        {transactionData.merchantLocation}
                    </Descriptions.Item>

                    <Descriptions.Item label="Date" span={1.5}>
                        {transactionData.date}
                    </Descriptions.Item>
                </Descriptions>
            </Modal>
        </div>
    );
};

export default TransactionModal;
