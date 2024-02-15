export const fetchData = () => {
    return async dispatch => {
        dispatch({ type: 'FETCH_PENDING' });
        setTimeout(async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({ type: 'FETCH_SUCCESS', payload: data });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        }
    }, 1000)
    };
};