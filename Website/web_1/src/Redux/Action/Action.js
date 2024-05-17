export const ADD = (item)=>{
    return {
        type:"ADD_TO_CART",
        payload:item
    }
}
export const REMOVE = (id)=>{
    return {
        type:"REMOVE_TO_CART",
        payload:id
    }
}
export const WADD = (item) => {
    return {
        type:"WADD_TO_CART",
        payload:item
    }
}
export const WREMOVE = (id)=>{
    return {
        type:"WREMOVE_TO_CART",
        payload:id
    }
}

