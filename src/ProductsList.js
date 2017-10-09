import React, { Component } from 'react';
import Product from './Product';
import PropTypes from 'prop-types';


const ProductsList = (props) => {

    return (
        <div>
            {props.products.map((data,idx) => {
                return <Product productInfo={data} key={idx}/>
            })}
        </div> 
    )
}


ProductsList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductsList;