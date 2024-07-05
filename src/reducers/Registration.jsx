export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export function RegistrationReducer(state,action) {
    switch(action.type){

        case "update":
            return {...state,[action.propName]:action.propValue}

        default:
        return state;
        
    }
};

