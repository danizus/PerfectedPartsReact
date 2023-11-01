import { createSlice,current } from "@reduxjs/toolkit"




const cartSlice =createSlice({
    name: 'cart',
    initialState :{
        cart:[]
    },
   
    reducers:{
        add(state,action){
          const productId = action.payload.id
          const sameItem = state.cart.find(item=>item.id ===productId )
          if(sameItem){
            sameItem.quantity +=1
            console.log(sameItem.quantity)
          }else{
            state.cart.push({
                id:action.payload.id,
                name:action.payload.name,
                image:action.payload.image,
                price:action.payload.price,
                quantity:action.payload.quantity
            });

          }
         

          
            
        },
        remove(state,action){
          const productToRemove =  state.cart.find(item => item.id===action.payload)
            if(productToRemove.quantity===1){
                return state.filter(item=>item.id!==action.payload);

            }else {
                productToRemove.quantity-=1

            }

            
        }
    }

})

export const {add , remove }=cartSlice.actions;
export default cartSlice.reducer;