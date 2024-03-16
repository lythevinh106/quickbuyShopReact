import React, { useState } from "react";

import Slider from "react-slick";

import { Box, Button, Card, FormControl, Grid, InputLabel, LinearProgress, MenuItem, Pagination, Select, Skeleton, Stack, Tooltip } from "@mui/material";

import BoltIcon from '@mui/icons-material/Bolt';
import { useFetchProducts } from "CustomHooks/ProductHooks";
import { Product, requestFetchProduct, responseFetchProduct } from "ApiServiceModules/Product";
import { useGetPromotion } from "CustomHooks/PromotionHooks";
import { Promotion } from "ApiServiceModules/Promotion";
import { Category } from "ApiServiceModules/Category";
import ProductThumbnail from "Component/ProductThumnail/ProductThumbnail";
import SkeletonProductThumnail from "Component/ProductThumnail/SkeletonProductThumnail";
import Process from "UtilComponent/Process";
import bgImg from "Storage/Images/bgThum.png";
import { useAppSelector, useAppDispatch } from 'app/hook'
import { useSelector } from "react-redux";
import { activeProgress } from "features/processSlice";
import CustomDrawer from "UtilComponent/CustomDrawer";
import { Image, Paid } from "@mui/icons-material";
import Background from "UtilComponent/Background/Background";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import shadowBg from "Storage/Images/shadown.svg"
import "./style.scss";
import { NavLink } from "react-router-dom";

import DetailProduct from "pages/DetailProduct/DetailProduct";


import { updateStateDetailProduct } from "features/detailProductStore";
import PageProduct from "pages/PageProduct/PageProduct";
import { NewProduct } from "Layout/DefaultLayout/ComponentLayout/Footer/Footer";






interface props { }



const fetchQuery: requestFetchProduct = {

    isPromotion: true,
    // Sort: "Ascending",
    // SortTime: "Descending",
    PageSize: 5,


};



export type PromotionProduct = Product & {
    promotion: Promotion,
    category: Category
}




export type stateDetailProduct = {

    isOpen: boolean,
    id?: string | "",
}





function Home() {


    // const count = useAppSelector((state) => state.progress.value)


    const dispatch = useAppDispatch()


    const [isStateDetailProduct, setIsStateDetailProduct] = useState<stateDetailProduct>({
        isOpen: false,
        id: ""
    });






    const settingThumbnails = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const { isLoading, data, isError, error, isFetching, refetch }

        = useFetchProducts({
            // select: (data: any): responseFetchProduct => {

            //     let newData = data?.data;

            //     let ResponseData: responseFetchProduct = {
            //         ...newData.currentPage,
            //         data: newData?.data.map((data: PromotionProduct) => data)
            //     };

            //     return ResponseData
            // }
            // ,

            onSuccess: (dataResponse: responseFetchProduct) => {



            },
            delay: 5000






        }, fetchQuery);

    // console.log("isfetching", isFetching, "isLoading", isLoading);



    // if (isFetching || isLoading) {

    //     dispatch(activeProgress(true));
    // } else {
    //     dispatch(activeProgress(false));
    // }


    return (
        <>



            <div className="product-banner" >








                <div className="product-banner-main container ">


                    <div className="slider-container">


                        {isFetching || isLoading ? (

                            <>

                                <SkeletonProductThumnail sx={{}} />

                            </>

                        ) :


                            <Slider {...settingThumbnails}>

                                {data?.data?.data?.map((product) =>

                                (
                                    <ProductThumbnail onBuyProduct={() => {

                                        // setIsStateDetailProduct({ isOpen: true, id: product.id })

                                        dispatch(updateStateDetailProduct({ isOpen: true, idProduct: product.id }));


                                    }
                                    } key={product.id} product={product as PromotionProduct} />

                                ))

                                }

                            </Slider>
                        }


                    </div>

                </div>



            </div>




        </>

    );
}

export default Home;
