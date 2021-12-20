import * as actionTypes from "./actionTypes";

// reducer for deafult dish menu
export const dishReducer = (dishState = { isLoading: false, dishes: [], defaultOrders: [], orderLoading: true }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: [],
            };
        case actionTypes.LOAD_DISHES:
            //console.log(action.payload)
            const updateDish = [];
            for (const dishKey in action.payload) {
                //console.log(action.payload[dishKey])
                updateDish.push({
                    ...action.payload[dishKey],
                    id: dishKey,
                });
            }
            //console.log(dish)
            return {
                ...dishState,
                isLoading: false,
                dishes: updateDish,
            };
        case actionTypes.DEFAULT_ORDER:
            //console.log(action.payload);
            const defaultOrders = [];
            for (const orderKey in action.payload) {
                //console.log(action.payload[orderKey])
                defaultOrders.push({
                    ...action.payload[orderKey],
                    id: orderKey,
                });
            }
            //console.log(defaultOrders)
            return {
                ...dishState,
                orderLoading: false,
                defaultOrders: defaultOrders,
            };
        case actionTypes.ORDER_LOADING:
            return {
                ...dishState,
                isLoading: true,
            };

        default:
            return dishState;
    }
};

// reducer for cart functionality

export const cartReducer = (cartState = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let newCart = action.payload;
            const newcartItems = cartState.cartItems.concat(newCart);
            localStorage.setItem("cartItems", JSON.stringify(newcartItems));
            return {
                ...cartState,
                cartItems: newcartItems,
            };

        case actionTypes.FETCH_CART:
            let cartItems = action.payload;

            if (cartItems == null) {
                return cartState;
            } else {
                return {
                    ...cartState,
                    cartItems: cartItems,
                };
            }

        case actionTypes.DELETE_CART:
            //console.log(action.payload)
            const updatedcartItems = [...cartState.cartItems];
            updatedcartItems.splice(action.payload, 1);

            localStorage.setItem("cartItems", JSON.stringify(updatedcartItems));

            return {
                ...cartState,
                cartItems: updatedcartItems,
            };
        case actionTypes.RESET_CART:
            let resetCartItems = cartState.cartItems;
            resetCartItems = [];

            localStorage.setItem("cartItems", JSON.stringify(resetCartItems));
            return {
                ...cartState,
                cartItems: resetCartItems,
            };
        default:
            return cartState;
    }
};

//ruducer for dish comment funtionality
export const commentReducer = (commentState = { isLoading: true, comments: [] }, action) => {
    //console.log(action);
    switch (action.type) {
        case actionTypes.COMMENT_LOADING:
            return {
                ...commentState,
                isLoading: true,
                comments: [],
            };
        case actionTypes.LOAD_COMMENT:
            const updatedComments = [];
            for (const commentKey in action.payload) {
                //console.log(action.payload[commentKey])
                updatedComments.push({
                    ...action.payload[commentKey],
                    commentId: commentKey,
                });
            }
            return {
                ...commentState,
                isLoading: false,
                comments: updatedComments,
            };

        //since we use firebase db so we dont want to concat new comment beacuse redux state will auto update , thats why this code converted to comment, but now its doesn't work , so code are converted !
        case actionTypes.ADD_COMMENT:
            //new comment received in payload
            let comment = action.payload;
            //comment.id = commentState.length;
            //console.log(comment);
            return {
                ...commentState,
                comments: commentState.comments.concat(comment),
            };

        default:
            return commentState;
    }
};
