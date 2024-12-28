import articleSlice from './ArticlesSlice'
import shopSlice from './ShopReducer'
import { combineReducers } from "@reduxjs/toolkit/react";

export const articleReducer = combineReducers({
  article:articleSlice
});
export const ShopReducer = combineReducers({
  shop:shopSlice
});



export type articleType = ReturnType<typeof articleReducer>;
export type shopType = ReturnType<typeof ShopReducer>;
