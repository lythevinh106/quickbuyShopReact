import React, { CSSProperties } from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Stack } from '@mui/material';

interface props {


    sx?: CSSProperties
}

function SkeletionDetailProduct({ sx }: props) {
    return (
        <Box sx={{ width: "100%", justifyContent: "space-between", display: "flex", ...sx }}>





            <Stack spacing={1} sx={{ width: "100%" }}

            >
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={120} />
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={120} />
                <Skeleton sx={{ bgcolor: 'grey.900', width: "100%" }} variant="rectangular" height={120} />

            </Stack>






        </Box>
    );
}

export default SkeletionDetailProduct;