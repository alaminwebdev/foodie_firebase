import * as actionTypes from "./actionTypes";

//reducer for admin add item functionality

const itemInitialState = {
    name: "",
    image: "",
    varients: ["small", "medium", "large"],
    price: [
        {
            small: 100,
            medium: 200,
            large: 400,
        },
    ],
    label: "",
    description: "",
};

export const adminReducer = (adminState = { itemState: itemInitialState, adminToken: null }, action) => {
    //console.log(action);
    switch (action.type) {
        case actionTypes.ADMIN_ACTION:
            const token = Math.random(0).toString(32).substring(2);
            if (action.payload.email === "abir@gmail.com" && action.payload.password === "123456789") {
                //set token into localStorage
                localStorage.setItem("email", action.payload.email);
                localStorage.setItem("adminToken", token);
                return {
                    ...adminState,
                    adminToken: token,
                };
            } else {
                return {
                    ...adminState,
                };
            }
        case actionTypes.ADMIN_CHECK:
            return {
                ...adminState,
                adminToken: action.payload,
            };
        case actionTypes.ADMIN_LOGOUT:
            return {
                ...adminState,
                adminToken: null,
            };
        case actionTypes.ADD_DISH:
            //console.log(itemName)
            return {
                ...adminState,
                itemState: {
                    // copy the other item fields
                    ...adminState.itemState,
                    // And replace the item field with the new value
                    name: action.payload.name,
                    label: action.payload.label,
                    description: action.payload.description,
                },
            };
        case actionTypes.ADD_VARIENT:
            //sorting in reverse order
            let updateVarients = action.payload;
            // First sort the array
            updateVarients.sort();
            // Then reverse it:
            updateVarients.reverse();
            return {
                ...adminState,
                itemState: {
                    ...adminState.itemState,
                    varients: action.payload,
                },
            };
        case actionTypes.ADD_PRICE:
            let updatePrice = action.payload;
            return {
                ...adminState,
                itemState: {
                    ...adminState.itemState,
                    price: [updatePrice],
                },
            };
        case actionTypes.ADD_IMAGE:
            let url = action.payload;
            return {
                ...adminState,
                itemState: {
                    ...adminState.itemState,
                    image: url,
                },
            };
        case actionTypes.RESET_MENU:
            return {
                ...adminState,
                itemState: {
                    name: "",
                    image: "",
                    varients: ["small", "medium", "large"],
                    price: [
                        {
                            small: 100,
                            medium: 200,
                            large: 400,
                        },
                    ],
                    label: "",
                    description: "",
                },
            };
        default:
            return adminState;
    }
};
