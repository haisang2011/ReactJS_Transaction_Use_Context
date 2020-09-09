import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import PropTypes from 'prop-types';
import Transaction from './Transaction';

TransactionList.propTypes = {
    
};

function TransactionList(props) {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
}

export default TransactionList;