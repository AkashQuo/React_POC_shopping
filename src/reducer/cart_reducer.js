import Item1 from '../images/image1.jpg'
import Item2 from '../images/image2.jpg'
import Item3 from '../images/image3.jpg'
import Item4 from '../images/image4.jpg'
import Item5 from '../images/image5.jpg'
import Item6 from '../images/image6.jpg'


const initState = {
    items: [
        {id:1,title:'Dark Fantasy', desc: "Sunfeast Dark Fantasy Choco Fills, 600 g", price:110,img:Item1,count:0},
        {id:2,title:'Unibic', desc: "Unibic Cashew Badam Cookies, 500 g", price:60,img: Item2,count:0},
        {id:3,title:'Grain Cookies', desc: "Hey Grain Cookies Home Combo-1 (Chocolate and Oats Cookies Besan & Chocolate Chips Cookies)",price:120,img: Item3,count:0},
        {id:4,title:'Dukes Cookie', desc: "Dukes Cookie Empire Premium Assorted Cookies, 400 g", price:260,img:Item4,count:0},
        {id:5,title:'Oreo', desc: "Oreo Peanut Butter & Chocolate Cream Flavoured Sandwich Cookies, 137g [Pack of 2, Imported]", price:60,img: Item5,count:0},
        {id:6,title:'M & M Cookie', desc: "M & M MARS Double Chocolate Cookies, 180 g",price:390,img: Item6,count:0}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    if(action.type === 'ADD_TO_CART'){
        let addedItem = state.items.find(item=> item.id === action.id)
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === 'REMOVE_ITEM'){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== 'ADD_QUANTITY'){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== 'SUB_QUANTITY'){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    
  else{
    return state
    }
    
}

export default cartReducer