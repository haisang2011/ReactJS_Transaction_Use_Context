import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';

Balance.propTypes = {
    
};

function Balance(props) {

    const { transactions } = useContext(GlobalContext);

    const total = transactions.map(transaction => transaction.amount)
                              .reduce((acc, item) => acc += item ,0)
                              .toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    );
}

export default Balance;