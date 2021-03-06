import { compose } from "@material-ui/system";

export const initialState = {
    basket: [],
    user: {}
};

export const getBasketTotal = basket =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type) {
    case "SET__USER":
        return {
        ...state,
        user: action.user
        };
    case "ADD_TO_BASKET":
        return {
        ...state,
        basket: [...state.basket, action.item]
        };
        break;
    case "REMOVE_FROM_BASKET":
        let newBasket = [...state.basket];
        const index = state.basket.findIndex(item => item.id === action.id);
        if (index >= 0) {
            newBasket.splice(index, 1);
        }
        return { ...state, basket: newBasket };
        break;
    default:
        return state;
    }
};

export default reducer;
