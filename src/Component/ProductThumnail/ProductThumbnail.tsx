import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { PromotionProduct } from 'pages/Home/Home';


import logo2 from "../../Storage/Images/logo.svg";
import BoltIcon from '@mui/icons-material/Bolt';
import circle2 from "../../Storage/Images/circle2.svg";
import { Tooltip } from '@mui/material';

import "./style.scss"

interface props {

    product: PromotionProduct,
    onBuyProduct: () => void
}


function ProductThumbnail({ product, onBuyProduct }: props) {
    return (
        <div key={product?.id} className="product-item">
            <div className="item">
                <div className="item--left " >
                    <div className="item--left__logo">
                        <img src={logo2} />
                    </div>
                    <div className="item--left__name">
                        {product?.name}
                    </div>

                    <div className="item--left__des">
                        {product?.description}
                    </div>

                    <div className="item--left__btn" onClick={onBuyProduct}>
                        Mua Ngay
                    </div>
                </div>
                <div className="item--right" >
                    <div className="item--right__img ">
                        <img src={product?.image} />
                    </div>


                </div>

                <div className="item--right__info">

                    <div className="info__circle">

                        <img src={circle2} alt="" />

                        <div className="info__promotion">
                            <Tooltip title={product?.promotion?.name} >
                                <BoltIcon fontSize='large' color='warning' >
                                </BoltIcon>
                            </Tooltip>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default memo(ProductThumbnail);