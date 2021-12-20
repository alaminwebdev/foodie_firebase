import * as actionTypes from "./actionTypes";

// reducer for custom burger builder

const initialState = {
    ingredients: [
        { type: "salad", amount: 0 },
        { type: "cheese", amount: 0 },
        { type: "meat", amount: 0 },
    ],
    ingredientPrice: {
        salad: 20,
        cheese: 40,
        meat: 90,
    },

    totalPrice: 80,
    purchasAble: false,

    orders: [],
    orderLoading: true,
    orderError: false,
};

export const burgerbuildReducer = (buildState = initialState, action) => {
    const ingredients = [...buildState.ingredients];
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    item.amount++;
                }
            }
            return {
                ...buildState,
                ingredients: ingredients,
                totalPrice: buildState.totalPrice + buildState.ingredientPrice[action.payload],
            };
        case actionTypes.REMOVE_INGREDIENT:
            for (let item of ingredients) {
                if (item.type === action.payload) {
                    if (item.amount <= 0) {
                        return buildState;
                    } else {
                        item.amount--;
                    }
                }
            }
            return {
                ...buildState,
                ingredients: ingredients,
                totalPrice: buildState.totalPrice - buildState.ingredientPrice[action.payload],
            };
        case actionTypes.PURCHASABLE:
            //this will allow when at least one item are selected
            const sum = ingredients.reduce((sum, item) => {
                return sum + item.amount;
            }, 0);
            return {
                ...buildState,
                purchasAble: sum > 0,
            };
        case actionTypes.RESET_INGREDIENT:
            return {
                ...buildState,
                ingredients: [
                    { type: "salad", amount: 0 },
                    { type: "cheese", amount: 0 },
                    { type: "meat", amount: 0 },
                ],
                totalPrice: 80,
                purchasAble: false,
            };
        case actionTypes.LOAD_ORDER:
            //console.log(action.payload)
            let orders = [];
            for (const orderKey in action.payload) {
                //console.log(action.payload[orderKey])
                orders.push({
                    ...action.payload[orderKey],
                    id: orderKey,
                });
            }
            //console.log(orders)
            return {
                ...buildState,
                orders: orders,
                orderLoading: false,
            };
        default:
            return buildState;
    }
};
