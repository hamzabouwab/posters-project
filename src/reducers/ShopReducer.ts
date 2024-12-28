import { createSlice } from "@reduxjs/toolkit";



const shopSlice = createSlice({
    name:'shop' ,
    initialState: false,
    reducers:{
        toggleShopMenu : (state)=>{
            return !state
        },
        showShop :()=> true
    }
})

export const {toggleShopMenu,showShop}  = shopSlice.actions
export default shopSlice.reducer