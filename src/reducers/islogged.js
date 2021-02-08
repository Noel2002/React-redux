const islogged = (state= false, action)=>{
    switch (action.type) {
        case 'SIGN_IN':
            return state= true;

        case 'SET_IS_LOGGED':
            return state=action.payload;

        default:
            return state;
    }
}

export default islogged;