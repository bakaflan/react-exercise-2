import React from 'react';
import '../styles/ShopBody.css';
import Products from './Products';
import PropTypes from 'prop-types';

class ShopBody extends React.Component {
  render() {
    const { iPhoneList, huaweiList, addShoppingCartValue } = this.props;
    return (
      <div id="shopBody">
        <h1>IPhone</h1>
        <div className="phoneList">
          <Products
            products={iPhoneList}
            addShoppingCartValue={addShoppingCartValue}
          />
        </div>
        <h1>HUAWEI</h1>
        <div className="phoneList">
          <Products
            products={huaweiList}
            addShoppingCartValue={addShoppingCartValue}
          />
        </div>
      </div>
    );
  }
}

export default ShopBody;
ShopBody.propTypes = {
  iPhoneList: PropTypes.array,
  huaweiList: PropTypes.array,
  addShoppingCartValue: PropTypes.func.isRequired,
};
