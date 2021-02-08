export const signIn= ()=> {
    return {
        type: "SIGN_IN"
    };
}

export const setIsLogged= (value)=>{
    return {
        type: 'SET_IS_LOGGED',
        payload: value
    }
}