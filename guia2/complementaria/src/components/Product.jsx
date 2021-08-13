import React from 'react';

const Product = ({ product, index, deleteProduct }) => {
    return (
        <>
            <div className="list">
                <h3>{ product.num_product } - { product.product }</h3> <button className="btn-delete" onClick={() => deleteProduct(index) }>x</button>
            </div>
        </>
    );
}

export default Product;