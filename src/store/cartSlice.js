import { createSlice,current } from "@reduxjs/toolkit";





const cartSlice =createSlice({
    name: 'cart',
    initialState :[],
   
    reducers:{
        add(state,action){
          
          const productId = action.payload.id
          const sameItem = state.find(item=>item.id ===productId )
          if(sameItem){
            sameItem.quantity+=action.payload.quantity
          
           
          }else{
            state.push({
                id:action.payload.id,
                name:action.payload.name,
                image:action.payload.image,
                price:action.payload.price,
                quantity:action.payload.quantity
            });
         
              

          }
         

          
            
        },
        remove(state,action){
       
        
        
         const  newState = state.filter(item=>item.id!==action.payload);
            return newState
        
        }

    }

})

export const {add , remove }=cartSlice.actions;
export default cartSlice.reducer;