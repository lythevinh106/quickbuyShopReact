import React, { PropsWithChildren, ReactElement, ReactNode, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import bgVideo from "../../Storage/Images/bgVideo.mp4"

// export type PropsWithOptionalChildren<P = unknown> = P & { children?: ReactNode };

import bg from "../../Storage/Images/bg.png";
import bgEnhance from "../../Storage/Images/bgEnhance.mp4";

import demo1 from "../../Storage/Images/demo1.png";

import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadFireflyPreset } from "@tsparticles/preset-firefly";


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
import { Box, Button, IconButton, Tooltip } from '@mui/material';
import Header from './ComponentLayout/Header/Header';
import Footer from './ComponentLayout/Footer/Footer';

//reaction animations



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








    const [init, setInit] = useState(false);


    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadFireflyPreset(engine)
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);







    const particlesLoaded = async (container?: Container): Promise<void> => {
        // console.log(container);
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
                    value: 60,
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


                <Header />

                {children}

                <Footer />







            </div >








        </div >
    );
}

export default DefaultLayout;