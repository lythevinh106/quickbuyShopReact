import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CustomDrawer from 'UtilComponent/CustomDrawer';
import Background from 'UtilComponent/Background/Background';
import { Autocomplete, Box, FormControl, Grid, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Skeleton, TextField } from '@mui/material';
import ProductComponent from "Component/Product/Product";


import "./style.scss"
import { useAppDispatch, useAppSelector } from 'app/hook';
import { useFetchPageProducts, useGetProduct } from 'CustomHooks/ProductHooks';
import { requestFetchProduct } from 'ApiServiceModules/Product';
import { FetchQueryOptions, keepPreviousData } from '@tanstack/react-query';
import { Category } from '@mui/icons-material';
import { NewProduct } from 'Layout/DefaultLayout/ComponentLayout/Footer/Footer';
import { handleClosePageProduct, updateStatePageProduct } from 'features/pageProductStore';
import SkeletonProduct from 'Component/Product/SkeletonProduct';
import Pagging from 'UtilComponent/Pagging';
import { activeProgress } from 'features/processSlice';
import { ProductPriceSort, ProductTimeSort } from 'ConstantsAndEnum/queryParam';
import { useFetchPromotion } from 'CustomHooks/PromotionHooks';
import { Promotion, requestFetchPromotion } from 'ApiServiceModules/Promotion';
import { handleCloseDetailProduct } from 'features/detailProductStore';



interface props {


}

// const fetchQuery: requestFetchProduct = {

//     isPromotion: true,
//     // Sort: "Ascending",
//     // SortTime: "Descending",
//     PageSize: 5,


// };


const fetchQueryPromotion: requestFetchPromotion = {



    PageSize: 10,


};

function PageProduct({ }: props) {
    const dispatch = useAppDispatch();

    const stateFromRedux = useAppSelector((state) => state.pageProduct)


    const pageSize = 6;

    const [page, setPage] = useState<number>(1);
    const [sortTime, setSortTime] = useState<ProductTimeSort>(ProductTimeSort.Descending);
    const [filterPromotion, setFilterPromotion] = useState<string>("");

    const [sortPrice, setSortPrice] = useState<ProductPriceSort | undefined>(undefined);

    const { isLoading, data, isError, error, isFetching, refetch }
        = useFetchPageProducts({

            enabled: !!stateFromRedux.categoryId || !!stateFromRedux.isPromotion,
            //Placeholder Data gần giống Initial Data nhưng  Placeholder Data   k lưu vào cache
            //nó giúp data k set= undifire khi goi cai moi
            placeholderData: keepPreviousData

        }, {
            PageSize: pageSize, CategoryId: stateFromRedux.categoryId,
            PageNumber: page, Sort: sortPrice, SortTime: sortTime, isPromotion: stateFromRedux.isPromotion,
            PromotionId: filterPromotion

        });

    console.log("isLoading" + isLoading, "isFetch" + isFetching, "data" + data);

    useEffect(() => {
        if (!isLoading && !isFetching) {
            dispatch(activeProgress(false));

        }
        else {
            dispatch(activeProgress(true));

        }
    }, [isLoading, isFetching, dispatch]);


    const changePage = (e: React.ChangeEvent<unknown>, page: number) => {
        setPage(page);
        console.log(page);
    }


    const handleChangeSortTime = (e: SelectChangeEvent<ProductTimeSort>) => {

        setSortTime(e.target.value as ProductTimeSort)

    }

    const handleChangeSortPrice = (e: SelectChangeEvent<ProductPriceSort>) => {

        setSortPrice(e.target.value as ProductPriceSort)



    }

    const handleChangeFilterPromotion = (e: SelectChangeEvent<string>) => {

        setFilterPromotion(e.target.value);

    }


    const { isLoading: isLoadingPromotion, data: dataPromotion,
        isError: isErrorPromotion, error: errorPromotion, isFetching: isFetchingPromotion, refetch: refetchPromotion }
        = useFetchPromotion({



            enabled: !!stateFromRedux.isPromotion,


        }, fetchQueryPromotion)











    return (
        <CustomDrawer onClose={() => {
            dispatch(handleClosePageProduct());
            setPage(1);
            setSortTime(ProductTimeSort.Descending);
            setSortPrice(undefined);
            setFilterPromotion("");

            // setSortPrice();




        }} isOpen={stateFromRedux.isOpen} >

            <Background sx={{
                margin: "60px 50px",

            }}>
                <div className="product-page" >


                    {data ?

                        (


                            <h3 className="product-page__title"
                            >

                                {

                                    !stateFromRedux.isPromotion ? data?.data?.data[0].category.name : "Sản Phẩm Đang Khuyến Mãi"

                                }
                            </h3>
                        )



                        : <Skeleton sx={{ width: "100%", bgcolor: "grey.900" }} height={30}></Skeleton>

                    }

                    <Grid container className="product-page__filter " sx={{ width: "100%", marginBottom: "22px" }} spacing={0} >

                        <Grid item xs={2}
                        >
                            <FormControl variant="standard" color="success" sx={{ width: "200px", marginBottom: "20px", }} size="small">

                                <InputLabel id="demo-simple-select-label">Sắp Xếp Theo Thời Gian</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sortTime}

                                    label="Sắp Xếp Theo Thời Gian"
                                    onChange={handleChangeSortTime}
                                >

                                    <MenuItem value={ProductPriceSort.Descending}>Mới Nhất</MenuItem>
                                    <MenuItem value={ProductPriceSort.Ascending}>Cũ Nhất</MenuItem>

                                </Select>

                            </FormControl>






                        </Grid>

                        <Grid item xs={2}
                        >
                            <FormControl variant="standard" color="success" sx={{ width: "200px", marginBottom: "20px", }} size="small">

                                <InputLabel id="demo-simple-select-label">Sắp Xếp Theo Giá</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={sortPrice}

                                    label="Sắp Xếp Theo Giá"
                                    onChange={handleChangeSortPrice}
                                >

                                    <MenuItem value={ProductPriceSort.Descending}>Cao Tới Thấp</MenuItem>
                                    <MenuItem value={ProductPriceSort.Ascending}>Thấp Tới Cao</MenuItem>

                                </Select>

                            </FormControl>




                        </Grid>
                        {stateFromRedux.isPromotion && dataPromotion?.data?.data && (


                            <Grid item xs={2}
                            >
                                <FormControl variant="standard" color="success" sx={{
                                    width: "200px", marginBottom: "20px",


                                }} size="small">

                                    <InputLabel id="demo-simple-select-label">Chương Trình Khuyến Mãi</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label "
                                        id="demo-simple-select"
                                        value={filterPromotion ? filterPromotion : " "}

                                        label="Sắp Xếp Theo Thời Gian"
                                        onChange={handleChangeFilterPromotion}
                                    >


                                        {dataPromotion?.data?.data.map((promotion: Promotion) => (

                                            <MenuItem key={promotion.id} value={promotion.id}>{promotion.name}</MenuItem>



                                        ))}
                                        <MenuItem key={1} selected={!filterPromotion} value={" "}>Tất Cả</MenuItem>


                                    </Select>

                                </FormControl>
                            </Grid>

                        )}

                    </Grid>

                    <Box className="product-page__list">

                        <Grid container rowSpacing={6} columnSpacing={2}>


                            {!data?.data?.data ? (

                                (Array(pageSize).fill(null).map((v, i) => (
                                    <Grid key={i} item xs={4}>
                                        <SkeletonProduct />
                                    </Grid>

                                )))
                            )
                                : (data?.data?.data?.map((product) => (

                                    <Grid key={product.id} item xs={4}>

                                        <ProductComponent sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} product={product as NewProduct} />

                                    </Grid>
                                )))

                            }





                        </Grid>








                    </Box>


                    <div className="product-page__paging">


                        {isFetching || isLoading || !data ? <></> : (

                            <Pagging currentPage={page} hasNext={true} hasPrv={true}

                                onChangePage={changePage}

                                totalPage={data.data.totalPage} />

                        )}



                    </div>





                </div>


            </Background>



        </CustomDrawer >
    );
}

export default PageProduct;

