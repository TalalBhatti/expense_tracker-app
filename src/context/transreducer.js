const TransactionReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state]
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction: state.filter(transaction => transaction.id !== action.payload)}
        default:
            return state;
    };

}

export default TransactionReducer;