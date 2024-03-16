import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Stack } from '@mui/material';



interface Props {

    sx?: CSSProperties
}




function SkeletonProductThumnail({ sx }: Props) {
    return (
        <Box className="container" sx={{
            zIndex: 3, display: "flex", justifyContent: "space-evenly",
            position: "fixed", top: "45%", left: "0", transform: "translateY(-50%)", width: "100%",
            ...sx
        }} >

            <Stack spacing={2} sx={{ width: "43%" }}>
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="circular" width={40} height={40} />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={400} height={60} />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={400} height={40} />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={200} height={20} />

            </Stack>

            <Stack sx={{ width: "57%" }} direction="row" spacing={2}>
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" width="90%" height="100%" />
                <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={10} height={300} />
            </Stack>



        </Box>
    );
}

export default SkeletonProductThumnail;