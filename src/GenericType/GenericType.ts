



export type requestFetchDataGeneric={
    
   PageSize: number,
   Search?:string,
   PageNumber?:number
 
}



export type responseFetchDataGeneric<Data>={
    
     currentPage:number, 
     totalPage:number,  
     hasNext :boolean, 
     hasPrv:boolean,     
     data :Data, 
  
 }

