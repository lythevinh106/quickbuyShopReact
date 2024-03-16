
import CustomDrawer from 'UtilComponent/CustomDrawer';
import Background from 'UtilComponent/Background/Background';
import shadowBg from "Storage/Images/shadown.svg"
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

import PaidIcon from '@mui/icons-material/Paid';

import "./style.scss"
import { useFetchProducts, useGetProduct } from 'CustomHooks/ProductHooks';
import { Product } from 'ApiServiceModules/Product';
import { Promotion } from 'ApiServiceModules/Promotion';
import { Category } from 'ApiServiceModules/Category';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { activeProgress } from 'features/processSlice';
import { CSSProperties, MouseEvent, useEffect } from 'react';
import SkeletionDetailProduct from './SkeletionDetailProduct';
import { handleCloseDetailProduct } from 'features/detailProductStore';

// interface Props {
//     onClose: () => void,
//     isOpen: boolean,
//     idProduct: string | "",
//     sx?: CSSProperties

// }

type detailProduct = Product & {
    promotion: Promotion,
    category: Category,

}


function DetailProduct({ }: any) {


    const dispatch = useAppDispatch()

    const stateFromRedux = useAppSelector((state) => state.detailProduct)


    const { isLoading, data, isError, error, isFetching, refetch }
        = useGetProduct({
            // select: (data: any): detailProduct => {

            //     let ResponseData: detailProduct = data?.data;

            //     return ResponseData;

            // }
            // ,
            enabled: !!stateFromRedux.idProduct


        }, stateFromRedux.idProduct);



    useEffect(() => {
        if (!isLoading && !isFetching) {
            dispatch(activeProgress(false));

        }
        else {
            dispatch(activeProgress(true));

        }
    }, [isLoading, isFetching, dispatch]);


    const handleClose = () => {

        dispatch(handleCloseDetailProduct());


    }

    console.log("state ", stateFromRedux)

    return (
        <CustomDrawer onClose={handleClose} isOpen={stateFromRedux.isOpen} >

            <Background>

                {
                    isLoading || isFetching || !data ? (

                        <SkeletionDetailProduct />
                    )

                        : (

                            <div className="product-detail"
                            >

                                <div className="item">

                                    <div className="item--left">
                                        <div className="item--left__img">
                                            <img src={data?.data?.image} alt="" />

                                        </div>
                                        <img src={shadowBg} className="img__shadow">


                                        </img>

                                    </div>


                                    <div className="item--right">

                                        <div className="item--right__type">
                                            {data?.data?.category?.name}
                                        </div>

                                        <div className="item--right__name">
                                            {data?.data?.name}
                                        </div>


                                        <span className="item--right__price">


                                            {data?.data?.price}
                                            {data?.data?.promotion?.name && (
                                                <div className="label-promotion">
                                                    đang đc giảm  {data?.data?.promotion.value}% <AccessTimeFilledIcon sx={{ color: "#fff" }}></AccessTimeFilledIcon>
                                                </div>
                                            )}

                                        </span>

                                        <div className="item--right__desc">
                                            {data?.data?.description}
                                        </div>


                                        <div className="item--right__quantity">
                                            Số Lượng
                                        </div>



                                        {data?.data?.promotion?.name && (<div className="item--right__promotion">

                                            <NavLink to="/">

                                                Sản Phẩm Đang trong
                                                : {data?.data?.promotion?.name}  <EnergySavingsLeafIcon sx={{

                                                    marginLeft: "5px"
                                                }}></EnergySavingsLeafIcon></NavLink>
                                        </div>)}




                                        <div className="item--right__other">

                                            <Button className="other--add" sx={{

                                                backgroundColor: "primary",



                                            }} variant="outlined" color="secondary" startIcon={<AddShoppingCartIcon />}>
                                                Thêm
                                            </Button>

                                            <Button className="other--buy" sx={{

                                                backgroundColor: "primary",
                                                marginLeft: "30px"



                                            }} variant="outlined" color="primary" startIcon={<PaidIcon />}>
                                                Mua Ngay
                                            </Button>


                                        </div>
                                    </div>

                                </div>



                            </div>

                        )
                }



















            </Background>



        </CustomDrawer>
    );
}

export default DetailProduct;