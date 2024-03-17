import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, LinearProgress } from '@mui/material';
import { useAppSelector } from 'app/hook';
import CircularProgress from '@mui/material/CircularProgress';
Process.propTypes = {

};

function Process(props: any) {


    const isProgress = useAppSelector((state) => state.progress.value)


    return (

        <Box sx={{ width: '100%', color: 'grey.500', position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }}>
            {isProgress &&


                (
                    <>

                        <LinearProgress sx={{ height: "5px" }} color="secondary" />

                    </>
                )


            }




        </Box>
    );
}

export default Process;
