import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Stack } from '@mui/material';



interface Props {

    sx?: CSSProperties
}




function SkeletonProduct({ sx }: Props) {
    return (


        <Box sx={{ width: "100%", justifyContent: "space-between", display: "flex", ...sx }}>


            <Stack spacing={1} sx={{ width: "40%" }}>
                <Box sx={{ width: "100%", display: "flex" }}>
                    <Skeleton sx={{ bgcolor: 'grey.900' }} variant="circular" height={30} width={30} />
                    <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={30} />

                </Box>

                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={50} />


            </Stack>


            <Stack spacing={1} sx={{ width: "60%" }}

            >
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={30} />
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={20} />
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={20} />

            </Stack>
















        </Box>
    );
}

export default SkeletonProduct;