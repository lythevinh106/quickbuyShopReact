import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";




interface IInitialState {
    isOpen: boolean,
    categoryId?: string | "",
    isPromotion?: boolean


}



const initialState: IInitialState = {


    isOpen: false,
    categoryId: "",
    isPromotion: false


}



export const pageProductSlice = createSlice({

    name: 'pageProduct',
    initialState,

    reducers: {
        updateStatePageProduct: (state: IInitialState, action: PayloadAction<Pick<IInitialState, "isOpen" | "categoryId" | "isPromotion">>) => {
            state.isOpen = action.payload.isOpen;

            if (action.payload.isPromotion) {
                state.categoryId = "";
                state.isPromotion = true;
            }
            else if (action.payload.categoryId) {
                state.categoryId = action.payload.categoryId;
                state.isPromotion = false;
            }

            // state.isOpen = action.payload.isOpen;
            // state.categoryId = action.payload.categoryId;

        },
        handleClosePageProduct: (state: IInitialState) => {
            state.isOpen = false;
            state.categoryId = "";
            state.isPromotion = false;


        }

        // activeLayer: (state:any, action:PayloadAction<boolean>) => {
        //   state.isActiveLayer = action.payload
        //   sessionStorage.setItem('isActiveLayer', JSON.stringify(action.payload));

        // }



    }

})



export const { updateStatePageProduct, handleClosePageProduct } = pageProductSlice.actions;



// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => {
    state.pageProduct.isOpen;
    state.pageProduct.categoryId;
};


export default pageProductSlice.reducer;
