export type Action = {type: "AddToken"|"ADD_ID"; payload:string};


export const AddToken = (token: string) : Action => ({
    type: "AddToken",
    payload:token,
})
