import AxiosClient from "ApiService/ApiClient"
import { requestFetchDataGeneric, responseFetchDataGeneric } from "GenericType/GenericType"

export type Category = {
    id: string
    name: string 
    time: string,
}

export type queryParamCategory= {

    Sort?:"Ascending" | "Descending",
   
}

export type requestFetchCategory=requestFetchDataGeneric&queryParamCategory
  

export type responseFetchCategory=responseFetchDataGeneric<Category[]>;


export const CategoryApi  = {

    //Product/FetchProduct?PageSize=20&IsPromotion=true
    getFetchCategories<responseFetchCategory>(params:requestFetchCategory) {
      


           let result =

                AxiosClient.get<responseFetchCategory>("/Category/FetchCategory", {

                params: {
                    ...params
                }
                
            }); 

            return result;
       
       



    },

    // getProduct<Product>(id:string) {
      
     
    //   return AxiosClient.get<Product>(`/Product/getProductClient/${id}`); 
   

    //  },

}



export default CategoryApi