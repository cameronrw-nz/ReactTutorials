import React from 'react';

import ProductView from './ProductView'

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            "products": [
            ]
        };
    }

    async componentDidMount() {
        const result = await fetch('http://aspwebapi/api/products');
        const products = await result.json();
        this.setState({ products });
    }

    render() {
        return (
            <ProductView products={this.state.products} />
        );
    }
}

export default ProductComponent