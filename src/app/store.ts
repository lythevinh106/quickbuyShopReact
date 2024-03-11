import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({


    reducer: {
  
    //   progress: progressSlice.reducer,
    //   cart: cartSlice.reducer,
    //   auth: AuthSlice.reducer
  
    },
  })

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch