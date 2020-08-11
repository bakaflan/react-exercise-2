import React from 'react';
import '../styles/Products.css';
import Product from './Product';
import PropTypes from 'prop-types';

class Products extends React.Component {
  render() {
    const { products, addShoppingCartValue } = this.props;
    return (
      <div className="products">
        {products.map((phone, index) => (
          <Product
            key={index}
            phone={phone}
            addShoppingCartValue={addShoppingCartValue}
          />
        ))}
      </div>
    );
  }
}

export default Products;
Products.propTypes = {
  products: PropTypes.array,
  addShoppingCartValue: PropTypes.func.isRequired,
};
