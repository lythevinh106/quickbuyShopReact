import React from 'react';
import PropTypes from 'prop-types';
import logo from "Storage/Images/logo2.svg";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SearchIcon from '@mui/icons-material/Search';

import "./style.scss"
import { useDispatch } from 'react-redux';
import { updateStatePageProduct } from 'features/pageProductStore';
import { useAppDispatch } from 'app/hook';
import { useFetchCategory } from 'CustomHooks/CategoryHook';
import { Category, requestFetchCategory } from 'ApiServiceModules/Category';
import { handleCloseDetailProduct } from 'features/detailProductStore';

interface Props {



}

const fetchQuery: requestFetchCategory = {


    // Sort: "Ascending",
    Sort: "Descending",
    PageSize: 5


};
function Header({ }: Props) {


    const { isLoading, data, isError, error, isFetching, refetch }

        = useFetchCategory({


            // select: (data: any) => {

            //     let newData = data?.data;

            //     let ResponseData: responseFetchProduct = {
            //         ...newData.currentPage,
            //         data: newData?.data.map((data: NewProduct) => data)
            //     };

            //     return ResponseData
            // }



        }, fetchQuery);




    const dispatch = useAppDispatch();
    return (
        <div className="header">



            <div className="header-main container">

                <div className="header-main__logo">

                    <img src={logo} alt="" />

                </div>

                <ul className="header-main__category">
                    {data?.data?.data?.map((c: Category) => (

                        <li key={c.id} className='category_item' onClick={() => {

                            dispatch(updateStatePageProduct({
                                isOpen: true,
                                categoryId: c.id

                            }));
                        }}>
                            {c.name}
                        </li>

                    ))}






                    <li className='category_item'

                        onClick={() => {

                            dispatch(updateStatePageProduct({
                                isOpen: true,
                                isPromotion: true

                            }));
                            dispatch(handleCloseDetailProduct());
                        }}
                    >
                        Khuyến Mãi
                    </li>
                    <li className='category_item'>

                        <LockOpenIcon></LockOpenIcon>
                    </li>
                </ul>


                <div className='header-main__other'>

                    <span >
                        <SearchIcon


                        ></SearchIcon>
                    </span>

                    <span>
                        <ShoppingBagIcon></ShoppingBagIcon>
                    </span>


                </div>

            </div>


        </div>
    );
}

export default Header;