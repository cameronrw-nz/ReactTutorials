import React from 'react';

function ProductRow(props) {
    return (
        <tr>
            <td>{props.product.ProductId}</td>
            <td>{props.product.ProductName}</td>
            <td>{props.product.Price}</td>
            <td>{props.product.Category}</td>
        </tr>
    );
}

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
            <div>
                <h1>My Products</h1>
                <table className="product-list">
                    <tbody>
                        <tr>
                            <td>Product Id</td>
                            <td>Product Name</td>
                            <td>Product Price</td>
                            <td>Category</td>
                        </tr>
                        {this.state.products.map(product => <ProductRow key={product.id} product={product} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product