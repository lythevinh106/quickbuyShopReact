import { useQuery } from "@tanstack/react-query";
import CategoryApi, { requestFetchCategory, responseFetchCategory } from "ApiServiceModules/Category";
import PromotionApi from "ApiServiceModules/Promotion";

export const useFetchCategory=(options:object,requestFetchCategory:requestFetchCategory)=>{

    return  useQuery({
      queryKey: ["Categories"],


      queryFn: async ()=> 
      
      {

             await new Promise(resolve => setTimeout(resolve, 1000));
           
            return  CategoryApi.getFetchCategories<responseFetchCategory>(requestFetchCategory)     
       
      
      }
        
      ,
      ...options
                 
     });


}