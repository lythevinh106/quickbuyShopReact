import AxiosClient from "../ApiService/ApiClient";



const ProductApi  = {
    getAllProduct(newsParam:object) {

        return AxiosClient.get("/products", {
            params: {
                ...newsParam
            }
        });



    },

}



export default ProductApi