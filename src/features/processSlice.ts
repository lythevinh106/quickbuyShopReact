import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";




interface IInitialState{
    value: boolean;
    isActiveProcess:boolean;

  }



const initialState:IInitialState = {
value: false,
isActiveProcess:false

}

export const progressSlice = createSlice({
    name: 'process',
    initialState,
  
    reducers: {
      activeProgress: (state:any, action:PayloadAction<boolean>) => {
        state.value = action.payload
      },
  
  
      // activeLayer: (state:any, action:PayloadAction<boolean>) => {
      //   state.isActiveLayer = action.payload
      //   sessionStorage.setItem('isActiveLayer', JSON.stringify(action.payload));
  
      // }
     
  
  
    },
  
  })



  export const { activeProgress} = progressSlice.actions

  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.progress.value
  
  export default progressSlice.reducer
