import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { price, quantity, _highlightResult } = this.props;
    const name = _highlightResult.name.value;
    const totalPrice = (price * quantity).toFixed(2);
    const trimName = name ? name.substring(0, 30) : '';
    return (
      <div className="singleOrderInfo">
        <p>
          <span>{trimName}</span>
          <span>x</span>
          <span className="quantity">{quantity}</span>
        </p>
        <span className="totalPrice">${totalPrice}</span>
      </div>
    );
  }
}
