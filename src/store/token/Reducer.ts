export interface UserState {
    tokens: string,
}

const initialState = {
    tokens: "",
}

export const reducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case "AddToken": {
            return {
                tokens: action.payload
            }

        };

        case "ADD_ID":{
            return{id: action.payload,tokens: state.tokens}
        };


        default:
            return state
    }
}