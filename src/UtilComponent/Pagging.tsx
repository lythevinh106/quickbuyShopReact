import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from '@mui/material';
import { Product } from 'ApiServiceModules/Product';
import { responseFetchDataGeneric } from 'GenericType/GenericType';

Pagging.propTypes = {

};

type PaginationQuery = Omit<responseFetchDataGeneric<{}>, "data">;


type props = PaginationQuery & {

    onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
}


function Pagging({ currentPage, totalPage, hasNext, hasPrv, onChangePage }: props) {


    console.log(currentPage, totalPage)
    return (
        <>
            <Pagination sx={{
                '& li > button': {
                    color: "purple",
                }
            }}

                count={totalPage} page={currentPage} onChange={onChangePage} color="secondary" />
        </>

    );
}

export default Pagging;