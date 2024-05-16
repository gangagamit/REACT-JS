const initial_state = {
    carts: [],
    wish:[]
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
            // console.log(id, "=====");
            return {
                ...state,
                carts: Data,
            };
        default:
            return state;
    }
}
//whishlist add and remove part

export const   wishreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                wish: [...state.wish, action.payload]
            };
        case "REMOVE_TO_CART":
            const Data = state.wish.filter((el) => el.cvalue.id !== action.payload);
            console.log(Data, "=====");
            // console.log(id, "=====");
            return {
                ...state,
                wish: Data,
            };
        default:
            return state;
    }
}