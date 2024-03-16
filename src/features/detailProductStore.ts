import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { CSSProperties } from "react";



interface IInitialState{
    isOpen: boolean,
    idProduct:string | ""
  
   
  }



const initialState:IInitialState = {


    isOpen: false,
    idProduct:""
   
    

}

export const detailProductSlice = createSlice({
    name: 'detailProduct',
    initialState,
  
    reducers: {
        updateStateDetailProduct: (state:IInitialState, action:PayloadAction<Pick<IInitialState,"isOpen" | "idProduct" >>) => {
            state.isOpen = action.payload.isOpen;
            state.idProduct = action.payload.idProduct;
            
        },
        handleCloseDetailProduct: (state:IInitialState) => {
        
            state.isOpen=false;
            state.idProduct = "";
            
        }


  
  
      // activeLayer: (state:any, action:PayloadAction<boolean>) => {
      //   state.isActiveLayer = action.payload
      //   sessionStorage.setItem('isActiveLayer', JSON.stringify(action.payload));
  
      // }
     
  
  
    }
  
  })



  export const { updateStateDetailProduct,

    handleCloseDetailProduct} = detailProductSlice.actions;

  // Other code such as selectors can use the imported `RootState` type
  export const selectCount = (state: RootState) => {
    state.detailProduct.isOpen;
    state.detailProduct.idProduct;
  };
  
  export default detailProductSlice.reducer;
