import { requestFetchDataGeneric, responseFetchDataGeneric } from "GenericType/GenericType";
import AxiosClient from "../ApiService/ApiClient";
import { ReactElement, ReactNode, memo } from "react";


type RequestGeneric = {


}



export type requestFetchPromotion = requestFetchDataGeneric

    & {
  
    Sort?: "Ascending" | "Descending",


}

export type Promotion = {
    id: string
    name: string
    value: number
    description: string
    categoryId: string

    time: string,
    timeStart: string,
    timeEnd: string,
}

export type responseFetchPromotion = responseFetchDataGeneric<Promotion[]>;






export const PromotionApi = {

    //Promotion/FetchPromotion?PageSize=20&IsPromotion=true
    getFetchPromotions<responseFetchPromotion>(params: requestFetchPromotion) {

        return AxiosClient.get<responseFetchPromotion>("/Promotion/FetchPromotionClient", {

            params: {
                ...params
            }
        });



    },


    getPromotionById(promotionId: string) {
        return AxiosClient.get(`/Promotion/${promotionId}`);
    },

}



export default PromotionApi;