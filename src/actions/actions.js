const addToCart= (id)=>{
    return{
        type: 'ADD_TO_CART',
        id
    }
}

const removeItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id
    }
}
const subtractQuantity=(id)=>{
    return{
        type:'SUB_QUANTITY',
        id
    }
}
const addQuantity=(id)=>{
    return{
        type: 'ADD_QUANTITY',
        id
    }
}

export {addQuantity,addToCart,removeItem,subtractQuantity}