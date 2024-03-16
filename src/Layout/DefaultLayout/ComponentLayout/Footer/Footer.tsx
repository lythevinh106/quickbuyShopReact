
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Skeleton, Stack } from '@mui/material';


import "./style.scss"
import { requestFetchProduct, responseFetchProduct } from 'ApiServiceModules/Product';
import { useFetchNewsProducts, useFetchProducts } from 'CustomHooks/ProductHooks';
import type { PromotionProduct } from 'pages/Home/Home';
import Product from 'Component/Product/Product';
import SkeletonProduct from "Component/Product/SkeletonProduct";



const fetchQuery: requestFetchProduct = {


    // Sort: "Ascending",
    SortTime: "Descending",
    PageSize: 7


};

const settings = {

    className: "product-center-mode",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    dots: false,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,






};


export type NewProduct = Omit<PromotionProduct, "promotion">





function Footer(props: {}) {





    const { isLoading, data, isError, error, isFetching, refetch }

        = useFetchNewsProducts({


            // select: (data: any) => {

            //     let newData = data?.data;

            //     let ResponseData: responseFetchProduct = {
            //         ...newData.currentPage,
            //         data: newData?.data.map((data: NewProduct) => data)
            //     };

            //     return ResponseData
            // }



        }, fetchQuery);






    return (
        <div className="product-footer">

            <div className='product-footer-main container'>






                {isFetching || isLoading ? (

                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <SkeletonProduct></SkeletonProduct>
                        <SkeletonProduct></SkeletonProduct>
                        <SkeletonProduct></SkeletonProduct>
                    </Box>


                ) :



                    <Box className="slider-container" sx={{ width: "100%" }}>
                        <Slider {...settings}

                        >
                            {data?.data.data.map((product) => (

                                <Product key={product.id} product={product as NewProduct} />

                            )
                            )}



                        </Slider>
                    </Box>
                }
            </div>

        </div >
    );
}

export default Footer;