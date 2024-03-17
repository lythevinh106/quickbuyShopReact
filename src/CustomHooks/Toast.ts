import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';




const useErrorToast = (delay?:number) => {
    const [error, setError] = useState<string>("");

   
   

    
    
    const setMessage =(message:string)=>{
        
 
        toast.error(message);
    }

    return { setMessage };
};

export default useErrorToast;