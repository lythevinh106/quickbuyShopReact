import axios from "axios";
import { baseUrl } from "../ConstantsAndEnum/urlConst";
import useErrorToast from 'CustomHooks/Toast';
import { toast } from "react-toastify";
const AxiosClient = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
  });
  
  
  
//   AxiosClient.interceptors.response.use(function (response) {
//     // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
//     // Làm gì đó với dữ liệu response
//     return response;
//   }, function (error) {
//     // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
//     // Làm gì đó với lỗi response
//     return Promise.reject(error);
//   })
  
AxiosClient.interceptors.response.use(function (response) {
  // Bất kì mã trạng thái nào nằm trong tầm 2xx đều khiến hàm này được trigger
  // Làm gì đó với dữ liệu response
  return response;
}, function (error) {



  if(error.response?.status==404){
     toast.error("Lỗi 404 Tài Nguyên Không Được Tìm Thấy");
      
  }
  if(error.response?.status==401){
    toast.error("Bạn Chưa Đăng Nhập");
     
 }

  return Promise.reject(error);
})
  export default AxiosClient;