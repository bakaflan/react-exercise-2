import React from 'react';
import HolderURL from '../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { phone, addShoppingCartValue } = this.props;
    return (
      <div>
        <h3>{phone.name}</h3>
        <img src={HolderURL} alt="holder" />
        <div className="addToCart">
          <p>{phone.price}</p>
          <button onClick={addShoppingCartValue}>add to cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
Product.propTypes = {
  phone: PropTypes.array,
  addShoppingCartValue: PropTypes.func.isRequired,
};
