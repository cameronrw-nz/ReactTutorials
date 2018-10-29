import React from 'react';

function ProductRow(props) {
    return (
        <tr>
            <p>{props.product.ProductId}</p>
            <p>{props.product.ProductName}</p>
            <p>{props.product.Price}</p>
        </tr>
    );
}

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state =  {
            "products": [
                { "ProductId": 1, "ProductName": "Jon Hilton", "Price": "36 / Lead Developer" },
            ]
        };
    }

    async componentDidMount() {
        const result = await fetch('http://aspwebapi/api/products');
        const products = await result.json();
        console.log(products);

        console.log(this.state.products);
        this.setState({ products });
        console.log(this.state.products);
    }



    render() {
        return (
            <div>
                <h1>My Products</h1>
                <table className="product-list">
                    <tbody>
                        {this.state.products.map(product => 
                            <ProductRow key={product.id} product={product} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Product