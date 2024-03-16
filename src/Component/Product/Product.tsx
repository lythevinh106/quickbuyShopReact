import React, { CSSProperties, MouseEvent, memo } from 'react';
import PropTypes from 'prop-types';


import { NewProduct } from 'Layout/DefaultLayout/ComponentLayout/Footer/Footer';
import { getRandomRgbColor } from 'until/randomColor';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Button } from '@mui/material';

import "./style.scss"
import { useAppDispatch } from 'app/hook';
import { Update } from '@mui/icons-material';
import { updateStateDetailProduct } from 'features/detailProductStore';
import { handleClosePageProduct } from 'features/pageProductStore';

interface Props {

    product: NewProduct,
    sx?: CSSProperties
}

function Product({ product, sx }: Props) {



    const dispatch = useAppDispatch();

    const handleClick = (e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>, promotionId: string) => {
        dispatch(updateStateDetailProduct({
            isOpen: true,
            idProduct: promotionId
        }))
        dispatch(handleClosePageProduct());

    }

    return (
        <div className='product-new-item' >
            <div className='item' style={{ ...sx }} >

                <div className="item--left"

                    style={{

                        backgroundColor: getRandomRgbColor(),
                    }}
                >
                    <div className="item--left__img" onClick={(e) => handleClick(e, product?.id)} >
                        <img src={product?.image} alt="" />
                    </div>

                </div>

                <div className="item--right  ">
                    <div className="item--right__title">
                        {product?.name}
                    </div>
                    <div className="item--right__price">
                        {product?.price}
                    </div>

                    <div className="item--right__type">

                        <span className='title'> Loại: </span><span className='title__type'>
                            {product?.category?.name}

                        </span>

                    </div>


                    <div className="item--right__other">

                        <span className='detail' onClick={(e) => handleClick(e, product?.id)}   >
                            Chi tiết
                        </span>
                        <Button className='' size='small' >

                            <AddShoppingCartIcon></AddShoppingCartIcon>
                        </Button>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default memo(Product);