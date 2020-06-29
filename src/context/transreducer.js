const TransactionReducer = (state, action) => {
    console.log(state.initialTransactions);
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state]
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.initialTransactions.filter(transaction => transaction.ind !== action.payload)}
        default:
            return state;
    };

}

export default TransactionReducer;