const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
    saveForLater: []
}



const CartReducer = (state = initState, action) => {
    let findPro;
    let index;
    switch (action.type) {
        case 'ADD_TO_CART':
            const { prod, quantity } = action.payload;

            const cartCheck = state.products.find(pr => pr.id === prod.id);
            const saveCheck = state.saveForLater.find(pr => pr.id === prod.id)
            if (cartCheck || saveCheck) {
                return state;
            }
            else {
                const Tprice = state.totalPrice + prod.price;
                const Tquantities = state.totalQuantities + quantity;
                prod.quantity = quantity;

                return {
                    ...state, products: [...state.products, prod], totalPrice: Tprice, totalQuantities: Tquantities
                }
            }

        case 'INC':
            findPro = state.products.find(prod => prod.id === action.payload);
            index = state.products.findIndex(prod => prod.id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;

            return {
                ...state,
                totalPrice: state.totalPrice + findPro.price,
                totalQuantities: state.totalQuantities + 1
            }

        case 'DEC':
            findPro = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findPro.quantity > 1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;

                return {
                    ...state,
                    totalPrice: state.totalPrice - findPro.price,
                    totalQuantities: state.totalQuantities - 1
                }
            }
            else {
                return state;
            }

        case 'REMOVE':
            findPro = state.products.find(product => product.id === action.payload);
            const filtered = state.products.filter(product => product.id !== action.payload)
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity,
                totalQuantities: state.totalQuantities - findPro.quantity
            }

        case 'EMPTY':
            return { products: [], totalPrice: 0, totalQuantities: 0 }

        case 'SAVE_FOR_LATER':
            findPro = state.products.find(product => product.id === action.payload);
            const saved = state.products.filter(product => product.id !== action.payload)
            return {
                ...state, products: saved,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity,
                totalQuantities: state.totalQuantities - findPro.quantity,
                saveForLater: [...state.saveForLater,findPro]
            }

            case 'MOVE_TO_CART':
                findPro = state.saveForLater.find(product => product.id === action.payload);
                const move = state.saveForLater.filter(product => product.id !== action.payload)
                return {
                    ...state, products: [...state.products,findPro],
                    totalPrice: state.totalPrice + findPro.price * findPro.quantity,
                    totalQuantities: state.totalQuantities + findPro.quantity,
                    saveForLater: move
                }    
        default:
            return state;
    }

}

export default CartReducer
