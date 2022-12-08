export const fname=(state='',action)=>{
    switch(action.type){
        case 'FName':
            return action.payload
        default:
            return state
    }
}

export const lname=(state='',action)=>{
    switch(action.type){
        case 'LName':
            return action.payload
        default:
            return state
    }
}

export const age=(state='',action)=>{
    switch(action.type){
        case 'Age':
            return action.payload
        default:
            return state
    }
}
export const gender=(state='',action)=>{
    switch(action.type){
        case 'Gender':
            return action.payload
        default:
            return state
    }
}
export const profession=(state='',action)=>{
    switch(action.type){
        case 'Profession':
            return action.payload
        default:
            return state
    }
}