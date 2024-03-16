import { configureStore } from "@reduxjs/toolkit";
import { detailProductSlice } from "features/detailProductStore";
import { pageProductSlice } from "features/pageProductStore";
import { progressSlice } from "features/processSlice";

export const store = configureStore({


    reducer: {
  
      progress: progressSlice.reducer,
      detailProduct: detailProductSlice.reducer,
      pageProduct: pageProductSlice.reducer
      // auth: AuthSlice.reducer
  
    }
  })

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;