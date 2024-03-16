import { requestFetchDataGeneric } from "GenericType/GenericType";

import ProductApi, { Product, requestFetchProduct, responseFetchProduct } from "ApiServiceModules/Product";
import { useQuery } from "@tanstack/react-query";



export const useFetchProducts=(options:object,requestFetchProduct:requestFetchProduct)=>{

    return  useQuery(
        
       
        {
      queryKey: ["promotionProducts"],

      queryFn: async ()=> 
      
      {

           await new Promise(resolve => setTimeout(resolve, 1000));
           
            return  ProductApi.getFetchProducts<responseFetchProduct>(requestFetchProduct)     
       
      
      }
    
      ,
      ...options                
     }
         
     
     );

}


export const useGetProduct=(options:object,id:string)=>{

  return  useQuery(
      
     
      {
    queryKey: ["detailProduct"],

    queryFn: async  ()=>   
    {
         await new Promise(resolve => setTimeout(resolve, 1000));
         
          return  ProductApi.getProduct<Product>(id)          
    
    } 
    ,
    ...options                
   }
       
   
   );

}



export const useFetchNewsProducts=(options:object,requestFetchProduct:requestFetchProduct)=>{

    return  useQuery({
      queryKey: ["newProducts"],


      queryFn: async ()=> 
      
      {

             await new Promise(resolve => setTimeout(resolve, 1000));
           
            return  ProductApi.getFetchProducts<responseFetchProduct>(requestFetchProduct)     
       
      
      }
        
      ,
      ...options
                 
     });


}



export const useFetchPageProducts=(options:object,requestFetchProduct:requestFetchProduct)=>{



 const listKey= Object.values(requestFetchProduct);


  return  useQuery({
    queryKey: ["pageProducts",...listKey],


    queryFn: async ()=> 
    
    {

          await new Promise(resolve => setTimeout(resolve, 1000));
         const result=  ProductApi.getFetchProducts<responseFetchProduct>(requestFetchProduct);
         return result;
     
    
    }
      
    ,
    ...options
               
   });


}
  
  