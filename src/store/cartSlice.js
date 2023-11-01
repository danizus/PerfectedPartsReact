import { createSlice,current } from "@reduxjs/toolkit"




const cartSlice =createSlice({
    name: 'cart',
    initialState :{
        cart:[],
        count:0
    },
   
    reducers:{
        add(state,action){
          const productId = action.payload.id
          const sameItem = state.cart.find(item=>item.id ===productId )
          if(sameItem){
            sameItem.quantity +=1
            console.log(sameItem.quantity)
            state.count+=1
          }else{
            state.cart.push({
                id:action.payload.id,
                name:action.payload.name,
                image:action.payload.image,
                price:action.payload.price,
                quantity:action.payload.quantity
            });
            state.count+=1

          }
         

          
            
        },
        remove(state,action){
          const productToRemove =  state.cart.find(item => item.id===action.payload)
            if(productToRemove.quantity>1){
                return state.cart.filter(item=>item.id!==action.payload);

            }
            productToRemove.quantity-=1

            
        }
    }

})

export const {add , remove }=cartSlice.actions;
export default cartSlice.reducer;