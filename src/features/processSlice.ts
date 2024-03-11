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
    name: 'counter',
    initialState,
  
    reducers: {
      activeProgress: (state:any, action:PayloadAction) => {
        state.value = action.payload
      },
  
  
      activeLayer: (state:any, action:PayloadAction<boolean>) => {
        state.isActiveLayer = action.payload
        sessionStorage.setItem('isActiveLayer', JSON.stringify(action.payload));
  
  
      }
     
  
  
    },
  
  })



  export const { activeProgress, activeLayer } = progressSlice.actions

  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => state.counter.value
  
  export default progressSlice.reducer
