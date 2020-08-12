export const initialState = {
    basket : [{
        title : "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        image : "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
        price : 11.96,
        rating : 4,
    }],
    user : null
}

const reducer = (state,action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item]
                };
            break;
        case 'REMOVE_FROM_BASKET':
            return state;
            break;
        default :
            return state;
    }
}

export default reducer;