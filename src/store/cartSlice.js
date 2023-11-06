import { createSlice,current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';










const cartSlice =createSlice({
 
    name: 'cart',
    initialState :[],

   
    reducers:{
    
        add(state,action){
          
          const productId = action.payload.id
          const sameItem = state.find(item=>item.id ===productId )
          if(sameItem){
            sameItem.quantity+=action.payload.quantity
            toast.success("product added")
          
           
          }else{
            state.push({
                id:action.payload.id,
                name:action.payload.name,
                image:action.payload.image,
                price:action.payload.price,
                quantity:action.payload.quantity
            });
            toast.success("product added")
         
              

          }
         

          
            
        },
        remove(state,action){
          toast.error("product removed")
       
        
        
         const  newState = state.filter(item=>item.id!==action.payload);
            return newState
        
        },
        increment(state,action){
          const productId = action.payload.id
          const sameItem = state.findIndex(item=>item.id ===productId )
          state[sameItem].quantity+=1


        },
        decrement(state,action){
          
          const sameItem = state.findIndex(item=>item.id ===action.payload.id );
          if(state[sameItem].quantity>1){
            state[sameItem].quantity-=1
          }
          else{
            toast.error("product removed")
            const  newState = state.filter(item=>item.id!==action.payload.id);
            return newState
            
          }
          return state


        }

    }

})

export const {add , remove ,increment,decrement}=cartSlice.actions;
export default cartSlice.reducer;