import { configureStore } from "@reduxjs/toolkit";
import sliceArticle from '../reducers/ArticlesSlice'
import sliceShop from '../reducers/ShopReducer'
export default configureStore({
    reducer:{
        article:sliceArticle,
        shop:sliceShop
    }
})