import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';


import bgBg from "Storage/Images/bgThum.png";
import "./background.scss"



interface props {

    children: React.ReactNode
    sx?: CSSProperties
}


function Background({ children, sx }: props) {
    return (
        <div className="background-generic" style={{


        }} >
            <div className="background-generic-inner"

                style={{
                    ...sx
                }}
            >

                {children}

            </div>


        </div>
    );
}

export default Background;