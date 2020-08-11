import React from 'react';
import imgURL from '../assets/cart.png';
import '../styles/ShopHeader.css';
import PropTypes from 'prop-types';

class ShopHeader extends React.Component {
  render() {
    const { cartValue } = this.props;
    return (
      <div id="shopHeader">
        <h1>Store</h1>
        <div className="cartIcon">
          <img src={imgURL} alt="cartIcon" />
          <div className="cartValue">{cartValue}</div>
        </div>
      </div>
    );
  }
}

export default ShopHeader;
ShopHeader.propTypes = {
  cartValue: PropTypes.number,
};
