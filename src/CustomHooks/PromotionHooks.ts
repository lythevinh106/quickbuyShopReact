import { useQuery } from "@tanstack/react-query";
import PromotionApi, { requestFetchPromotion, responseFetchPromotion } from "ApiServiceModules/Promotion";



export const useFetchPromotion=(options:object,requestFetchPromotion:requestFetchPromotion)=>{

    return  useQuery(
        
       
        {
            
      queryKey: ["Promotions"],

      queryFn: ()=>  PromotionApi.getFetchPromotions<responseFetchPromotion>(requestFetchPromotion)        
      ,
      ...options                
     }
         
     
     );

}




export const useGetPromotion=(options:object,promotionId:string)=>{

  return  useQuery(
      
     
      {
          
    queryKey: ["promotion"],

    queryFn: ()=>  PromotionApi.getPromotionById(promotionId)        
    ,
    ...options                
   }
       
   
   );

}