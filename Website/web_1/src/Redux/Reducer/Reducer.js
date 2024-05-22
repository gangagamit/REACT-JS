const initial_state = {
    carts: [],
    wish:[],
};
//cart add and remove part
export const Cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            };
        case "REMOVE_TO_CART":
            const Data = state.carts.filter((el) => el.cvalue.id !== action.payload);
            console.log(Data, "=====");
            return {
                ...state,
                carts: Data,
            };

        // case "UPDATE_QUANTITY":
        //         return {
        //             ...state,
        //             quantities: {
        //                 ...state.quantities,
        //                 [action.payload.id]: action.payload.quantity
        //             }
        //         }

        case "CART_ITEM_ICREAMENT":{
            let updateQunty =  state.carts.map(item =>{
                if(item.id === action.payload.id){
                    return{
                        ...item,
                        quantity: item.quantity+1
                    };
                }
                return item;
            })
            return{
                ...state,
                carts:updateQunty
            };
        }

        case "CART_ITEM_DECREAMENT":{
            let updateQunty = state.carts;
            if(action.payload.quantity !== 1){
                updateQunty = state.carts.map(item =>{
                    if(item.id === action.payload.id){
                        return{
                            ...item,
                            quantity: item.quantity -1
                        };
                    }
                    return item;
                });
            }
            return {
                ...state,
                carts:updateQunty
            };
        }
            default:
            return state;
    }
}
//whishlist add and remove part

export const   wishreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "WADD_TO_CART":
            return {
                ...state,
                wish: [...state.wish, action.payload]
            };
        case "WREMOVE_TO_CART":
            const wData = state.wish.filter((el) => el.cvalue.id !== action.payload);
            console.log(wData, "=====");
            // console.log(id, "=====");
            return {
                ...state,
                wish: wData,
            };
        default:
            return state;
    }
}