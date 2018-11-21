import React from 'react';
import ProductPresentation from './ProductPresentation'

class Product extends React.Component {
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
            <ProductPresentation products={this.state.products} />
        );
    }
}

export default Product