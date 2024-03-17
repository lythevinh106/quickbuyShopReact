import { requestFetchDataGeneric, responseFetchDataGeneric } from "GenericType/GenericType";
import AxiosClient from "../ApiService/ApiClient";
import { delay } from "@reduxjs/toolkit/dist/utils";
import { Category } from "./Category";
import { Promotion } from "./Promotion";


type RequestGeneric={


}



export type queryParam= {

    isPromotion?:Boolean,
    Sort?:"Ascending" | "Descending",
    SortTime?:"Ascending" | "Descending",
    CategoryId?:String,
    PromotionId?:String,

}

export type requestFetchProduct=requestFetchDataGeneric&queryParam
  


export type Product = {
     id:string
     name:string
     price:number
     image:string
     description:string
     category:Category
     promotion?:Promotion
     time:string       
}




export type responseFetchProduct=responseFetchDataGeneric<Product[]>;
  





export const ProductApi  = {

    //Product/FetchProduct?PageSize=20&IsPromotion=true
    getFetchProducts<responseFetchProduct>(params:requestFetchProduct) {
      


           let result =

                AxiosClient.get<responseFetchProduct>("/Product/FetchProductClient", {

                params: {
                    ...params
                }
                
            }); 

            return result;
       
       



    },

    getProduct<Product>(id:string) {
      
     
       
      return AxiosClient.get<Product>(`/Product/getProductClient/${id}`); 
        
     
   

     },

}



export default ProductApi