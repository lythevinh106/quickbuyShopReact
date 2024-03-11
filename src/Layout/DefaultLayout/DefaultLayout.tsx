import React, { PropsWithChildren, ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import bgVideo from "../../Storage/Images/bgVideo.mp4"

// export type PropsWithOptionalChildren<P = unknown> = P & { children?: ReactNode };
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import bg from "../../Storage/Images/bg.png";
import bgEnhance from "../../Storage/Images/bgEnhance.mp4";
import logo from "../../Storage/Images/logo2.svg";
import logo2 from "../../Storage/Images/logo.svg";
import circle2 from "../../Storage/Images/circle2.svg";
import demo1 from "../../Storage/Images/demo1.png";
import shape from "../../Storage/Images/shape.svg";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFireflyPreset } from "@tsparticles/preset-firefly";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import fileAnimate from "../../Storage/fileAnimate.json";
import "./style.scss"
import {
    type Container,
    type ISourceOptions,
    MoveDirection,

    OutMode,
    OutModes,

} from "@tsparticles/engine";


import { getRandomRgbColor } from "until/randomColor"
import { Box, Button } from '@mui/material';


interface prop {

    children: ReactElement

}




const DefaultLayout = ({ children }: prop) => {








    const listProduct = [

        {
            name: 'Product1',
            price: '256236644',
            description: "mo ta 1",
            images: demo1
        }


    ]





    const settingThumbnails = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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



    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            // await loadFull(engine);
            await loadFireflyPreset(engine)
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);



    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    // const options: any = useMemo(
    //     () => ({
    //         ...fileAnimate
    //     }),
    //     [],
    // );

    const options: any = useMemo(
        () => ({
            autoPlay: true,
            fullScreen: {
                enable: false,
                zIndex: -1,

            },
            fpsLimit: 120,
            particles: {



                number: {
                    value: 30,
                },
                color: {
                    value: "#fff",
                },
                life: {
                    duration: {
                        value: 5,
                        sync: true,

                    },
                    count: 0,
                },
                opacity: {
                    value: { min: 0.1, max: 1 },
                    animation: {
                        enable: true,
                        speed: 3,

                    },
                },
                size: {
                    value: {
                        min: 1,
                        max: 3,
                    },
                },
                move: {
                    enable: true,
                    speed: 1,
                    random: false,
                    size: true,
                    direction: "top-left",
                    outModes: "out"


                },

            },
            interactivity: {
                events: {
                    onHover: {

                        enable: false,
                        mode: "trail",
                    },
                },
                modes: {
                    trail: {
                        delay: 0.4,
                        pauseOnStop: true,
                        quantity: 5,


                    },
                },
            },
            background: {
                color: "#555695",
                opacity: 0,

            },


        }),
        [],
    );


    return (
        <div className='default-layout'>


            <div id="wrapper">









                <Particles
                    className='firefly1'
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}


                />
                <div className="shadow-firefly">

                </div>

                <Particles
                    className='firefly2'
                    id="tsparticles2"
                    particlesLoaded={particlesLoaded}
                    options={options}

                />

                <div className="shadow-firefly2">

                </div>







                <video data-object-fit="cover" poster={bg} autoPlay preload="metadata" className='video-bg' loop muted>

                    <source src={bgEnhance} type="video/mp4" />
                    <source src={bgVideo} type="video/mp4" />

                </video>
                <div className="wrapper__header-shadow">
                </div>

                <div className="wrapper__bottom-shadow">
                </div>








                <div className="header">



                    <div className="header-main container">

                        <div className="header-main__logo">

                            <img src={logo} alt="" />

                        </div>

                        <ul className="header-main__category">



                            <li className='category_item'>
                                Men
                            </li>

                            <li className='category_item'>
                                Women
                            </li>


                            <li className='category_item'>
                                Other
                            </li>
                            <li className='category_item'>
                                Collection
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


                <div className="product-banner">

                    <div className="product-banner-main container ">


                        <div className="slider-container">
                            <Slider {...settingThumbnails}>
                                <div className="product-item">
                                    <div className="item">
                                        <div className="item--left">
                                            <div className="item--left__logo">
                                                <img src={logo2} />
                                            </div>
                                            <div className="item--left__name">
                                                Giay novoko
                                                asdad
                                            </div>

                                            <div className="item--left__des">
                                                Hấp dẫn trong thiết kế, tông màu này của AJ1 mang đến đường màu Pale Vanilla trên đế cao su trong suốt. Lớp phủ da lộn bao bọc phần trên nubuck để tạo ra sự kết hợp cao cấp giữa các kết cấu mềm mại. Logo lưỡi Jumpman dập nổi và logo Wings thêu ở gót chân đã hoàn thiện phiên bản tuyệt đẹp này.
                                            </div>

                                            <div className="item--left__btn">
                                                Mua Ngay
                                            </div>
                                        </div>
                                        <div className="item--right">
                                            <div className="item--right__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/de2804ae-c19d-4c18-a4db-f4fbcb6e4c2dhd_restoration_result_image%20%2815%29.png" />
                                            </div>
                                            {/* <div className="item-right__promotion">
                                                Khuyen mai thang 1
                                            </div> */}



                                        </div>

                                        <div className="item--right__info">

                                            <div className="info__circle">

                                                <img src={circle2} alt="" />
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item">
                                        <div className="item--left">
                                            <div className="item--left__logo">
                                                <img src={logo2} />
                                            </div>
                                            <div className="item--left__name">
                                                Giay novoko
                                                asdad
                                            </div>

                                            <div className="item--left__des">
                                                Hấp dẫn trong thiết kế, tông màu này của AJ1 mang đến đường màu Pale Vanilla trên đế cao su trong suốt. Lớp phủ da lộn bao bọc phần trên nubuck để tạo ra sự kết hợp cao cấp giữa các kết cấu mềm mại. Logo lưỡi Jumpman dập nổi và logo Wings thêu ở gót chân đã hoàn thiện phiên bản tuyệt đẹp này.
                                            </div>

                                            <div className="item--left__btn">
                                                Mua Ngay
                                            </div>
                                        </div>
                                        <div className="item--right">
                                            <div className="item--right__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/a8df22d1-4dca-423d-a74a-0d4424a999efhd_restoration_result_image%20%2812%29.png" />
                                            </div>
                                            {/* <div className="item-right__promotion">
                                                Khuyen mai thang 1
                                            </div> */}



                                        </div>

                                        <div className="item--right__info">

                                            <div className="info__circle">

                                                <img src={circle2} alt="" />
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <div className="product-item">
                                    <div className="item">
                                        <div className="item--left">
                                            <div className="item--left__logo">
                                                <img src={logo2} />
                                            </div>
                                            <div className="item--left__name">
                                                Giay novoko
                                                asdad
                                            </div>

                                            <div className="item--left__des">
                                                Hấp dẫn trong thiết kế, tông màu này của AJ1 mang đến đường màu Pale Vanilla trên đế cao su trong suốt. Lớp phủ da lộn bao bọc phần trên nubuck để tạo ra sự kết hợp cao cấp giữa các kết cấu mềm mại. Logo lưỡi Jumpman dập nổi và logo Wings thêu ở gót chân đã hoàn thiện phiên bản tuyệt đẹp này.
                                            </div>

                                            <div className="item--left__btn">
                                                Mua Ngay
                                            </div>
                                        </div>
                                        <div className="item--right">
                                            <div className="item--right__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/e819aa0e-19df-479b-9b32-f8902e9f889bhd_restoration_result_image%20%283%29.png" />
                                            </div>
                                            {/* <div className="item-right__promotion">
                                                Khuyen mai thang 1
                                            </div> */}



                                        </div>

                                        <div className="item--right__info">

                                            <div className="info__circle">

                                                <img src={circle2} alt="" />
                                            </div>


                                        </div>

                                    </div>
                                </div>


                            </Slider>
                        </div>

                    </div>



                </div>

                <div className="product-footer">

                    <div className='product-footer-main container'>

                        <Box className="slider-container" sx={{ width: "100%" }}>
                            <Slider {...settings}



                            >


                                <div className='product-item' >
                                    <div className='item' >

                                        <div className="item--left"

                                            style={{

                                                backgroundColor: getRandomRgbColor(),
                                            }}
                                        >
                                            <div className="item--left__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/cbff83c4-1183-4e9e-968b-87dd465cc531hd_restoration_result_image%20%285%29.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="item--right  ">
                                            <div className="item--right__title">
                                                Nike Revoluti 56963566á
                                            </div>
                                            <div className="item--right__price">
                                                4015000,00
                                            </div>

                                            <div className="item--right__type">

                                                <span className='title'> Loại: </span><span className='title__type'>Giày Nam</span>

                                            </div>


                                            <div className="item--right__other">



                                                <span className='detail'>
                                                    Chi tiết
                                                </span>
                                                <Button className='' size='small' >
                                                    {/* <span className='title'>    Add</span> */}
                                                    <AddShoppingCartIcon></AddShoppingCartIcon>
                                                </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='product-item' >
                                    <div className='item' >

                                        <div className="item--left"

                                            style={{

                                                backgroundColor: getRandomRgbColor(),
                                            }}
                                        >
                                            <div className="item--left__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/cbff83c4-1183-4e9e-968b-87dd465cc531hd_restoration_result_image%20%285%29.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="item--right  ">
                                            <div className="item--right__title">
                                                Nike Revoluti 56963566á
                                            </div>
                                            <div className="item--right__price">
                                                4015000,00
                                            </div>

                                            <div className="item--right__type">

                                                <span className='title'> Loại: </span><span className='title__type'>Giày Nam</span>

                                            </div>


                                            <div className="item--right__other">



                                                <span className='detail'>
                                                    Chi tiết
                                                </span>
                                                <Button className='' size='small' >
                                                    {/* <span className='title'>    Add</span> */}
                                                    <AddShoppingCartIcon></AddShoppingCartIcon>
                                                </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='product-item' >
                                    <div className='item' >

                                        <div className="item--left"

                                            style={{

                                                backgroundColor: getRandomRgbColor(),
                                            }}
                                        >
                                            <div className="item--left__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/cbff83c4-1183-4e9e-968b-87dd465cc531hd_restoration_result_image%20%285%29.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="item--right  ">
                                            <div className="item--right__title">
                                                Nike Revoluti 56963566á
                                            </div>
                                            <div className="item--right__price">
                                                4015000,00
                                            </div>

                                            <div className="item--right__type">

                                                <span className='title'> Loại: </span><span className='title__type'>Giày Nam</span>

                                            </div>


                                            <div className="item--right__other">



                                                <span className='detail'>
                                                    Chi tiết
                                                </span>
                                                <Button className='' size='small' >
                                                    {/* <span className='title'>    Add</span> */}
                                                    <AddShoppingCartIcon></AddShoppingCartIcon>
                                                </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='product-item' >
                                    <div className='item' >

                                        <div className="item--left"

                                            style={{

                                                backgroundColor: getRandomRgbColor(),
                                            }}
                                        >
                                            <div className="item--left__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/cbff83c4-1183-4e9e-968b-87dd465cc531hd_restoration_result_image%20%285%29.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="item--right  ">
                                            <div className="item--right__title">
                                                Nike Revoluti 56963566á
                                            </div>
                                            <div className="item--right__price">
                                                4015000,00
                                            </div>

                                            <div className="item--right__type">

                                                <span className='title'> Loại: </span><span className='title__type'>Giày Nam</span>

                                            </div>


                                            <div className="item--right__other">



                                                <span className='detail'>
                                                    Chi tiết
                                                </span>
                                                <Button className='' size='small' >
                                                    {/* <span className='title'>    Add</span> */}
                                                    <AddShoppingCartIcon></AddShoppingCartIcon>
                                                </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='product-item' >
                                    <div className='item' >

                                        <div className="item--left"

                                            style={{

                                                backgroundColor: getRandomRgbColor(),
                                            }}
                                        >
                                            <div className="item--left__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/cbff83c4-1183-4e9e-968b-87dd465cc531hd_restoration_result_image%20%285%29.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="item--right  ">
                                            <div className="item--right__title">
                                                Nike Revoluti 56963566á
                                            </div>
                                            <div className="item--right__price">
                                                4015000,00
                                            </div>

                                            <div className="item--right__type">

                                                <span className='title'> Loại: </span><span className='title__type'>Giày Nam</span>

                                            </div>


                                            <div className="item--right__other">



                                                <span className='detail'>
                                                    Chi tiết
                                                </span>
                                                <Button className='' size='small' >
                                                    {/* <span className='title'>    Add</span> */}
                                                    <AddShoppingCartIcon></AddShoppingCartIcon>
                                                </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='product-item' >
                                    <div className='item' >

                                        <div className="item--left"

                                            style={{

                                                backgroundColor: getRandomRgbColor(),
                                            }}
                                        >
                                            <div className="item--left__img">
                                                <img src="https://blob3tier.blob.core.windows.net/azureblobwith3tier/cbff83c4-1183-4e9e-968b-87dd465cc531hd_restoration_result_image%20%285%29.png" alt="" />
                                            </div>

                                        </div>

                                        <div className="item--right  ">
                                            <div className="item--right__title">
                                                Nike Revoluti 56963566á
                                            </div>
                                            <div className="item--right__price">
                                                4015000,00
                                            </div>

                                            <div className="item--right__type">

                                                <span className='title'> Loại: </span><span className='title__type'>Giày Nam</span>

                                            </div>


                                            <div className="item--right__other">



                                                <span className='detail'>
                                                    Chi tiết
                                                </span>
                                                <Button className='' size='small' >
                                                    {/* <span className='title'>    Add</span> */}
                                                    <AddShoppingCartIcon></AddShoppingCartIcon>
                                                </Button>
                                            </div>

                                        </div>

                                    </div>
                                </div>


                            </Slider>
                        </Box>
                    </div>

                </div>



            </div>


            {children}





        </div>
    );
}

export default DefaultLayout;