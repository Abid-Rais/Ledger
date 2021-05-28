import React, { ReactElement } from 'react';
import { connect } from 'react-redux';

import TransactionModal from './transactionsModal';

import { Table } from 'antd';

import { loadTransactions } from '../actions/data';

import { GlobalState, Transaction } from '../interfaces';

interface TransactionTableProps {
    allTransactions: Transaction[];
}

const TransactionTable = ({ allTransactions }: TransactionTableProps): ReactElement => {
    return (
        <div className="transactions-table">
            <Table
                className="table"
                columns={columns}
                dataSource={allTransactions}
                pagination={{ pageSize: 7 }}
                title={() => <h2 style={{ marginBottom: '-5pt' }}>Transactions</h2>}
                bordered
            />
        </div>
    );
};

const columns = [
    {
        title: 'ID',
        dataIndex: 'transactionID',
        key: 'transactionID',
    },
    {
        title: 'Merchant',
        dataIndex: 'merchantName',
        key: 'merchantName',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '',
        key: 'more_info',
        // eslint-disable-next-line react/display-name
        render: (record: Transaction) => <TransactionModal transactionData={record} />,
    },
];

const mapStateToProps = (state: GlobalState) => ({
    user: state.auth.user,
    allTransactions: state.data.allTransactions,
});

export default connect(mapStateToProps, { loadTransactions })(TransactionTable);
