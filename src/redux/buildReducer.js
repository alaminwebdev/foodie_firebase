export const initialState = {
    ingredients: [
        { type: 'salad', amount: 0 },
        { type: 'cheese', amount: 0 },
        { type: 'meat', amount: 0 }
    ],
    ingredientPrice: {
        salad: 20,
        cheese: 40,
        meat: 90
    },
    totalPrice: 80,
    purchasAble: false,
    orders:[],
    orderLoading:true,
    orderError:false
}


