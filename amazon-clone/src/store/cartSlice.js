import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            const item = state.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity +=action.payload.quantity
            }else{
            state.push(action.payload)}},
        deleteFromCart:(state,action)=>{ return state.filter((item)=>item.id !== action.payload.id)},
        clear:(state,action)=>{return []},
        decreamentQuantity:(state,action)=>{
            const item = state.find((item)=>item.id === action.payload.id)
            if(item.quantity ===1){
                item.quantity = 1
            }else{
                item.quantity--
            }
        },
       increamentQuantity:(state, action)=>{
        const item = state.find((item)=>item.id === action.payload.id)
        item.quantity++
       }
    }
})
export const {addToCart , deleteFromCart , clear , decreamentQuantity , increamentQuantity} = cartSlice.actions;
export default cartSlice.reducer ;