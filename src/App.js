import React, { Component } from 'react';
import './App.scss';
import ShopHeader from './component/ShopHeader';
import ShopBody from './component/ShopBody';
class App extends Component {
  state = {
    cartValue: 0,
    iPhoneList: [],
    huaweiList: [],
  };

  addShoppingCartValue = () => {
    this.setState({
      cartValue: this.state.cartValue + 1,
    });
  };

  async getJsonData() {
    const URL = 'http://localhost:3000/products';
    try {
      const promise = await fetch(URL);
      const data = await promise.json();
      const tempIPhone = [];
      const tempHUAWEI = [];

      data.forEach((phone) => {
        if (phone.category === 'iPhone') {
          tempIPhone.push(phone);
        } else if (phone.category === 'HUAWEI') {
          tempHUAWEI.push(phone);
        }
      });

      this.setState({
        iPhoneList: tempIPhone,
        huaweiList: tempHUAWEI,
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.getJsonData();
  }

  render() {
    return (
      <main className="app">
        <ShopHeader cartValue={this.state.cartValue} />
        <ShopBody
          iPhoneList={this.state.iPhoneList}
          huaweiList={this.state.huaweiList}
          addShoppingCartValue={this.addShoppingCartValue}
        />
      </main>
    );
  }
}

export default App;
