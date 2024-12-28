import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { articlesType } from '../components/Main/articles/utilities';




const articleSlice = createSlice({
  name: 'article',
  initialState :[] as articlesType[],
  reducers: {
    addArticle: (state, action: PayloadAction<articlesType>) => {
      const { payload } = action;
      let count = 0;

      const newList: articlesType[] = state.map((item) => {
        if (item.nom === payload.nom) {
          count++;
          return { ...item, number: item.number! + 1 };
        }
        return item;
      });

      if (count === 0) {
        newList.push({ ...payload, number: 1 });
      }

      return newList; 
    },
  },
});


export const { addArticle } = articleSlice.actions;
export default articleSlice.reducer;
