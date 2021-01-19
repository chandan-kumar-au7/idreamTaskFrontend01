import React, { Component } from 'react';
import MateButton from '../../../components/uielements/button';

export default class Button extends Component {
  render() {
    const { buttonContent, onClick } = this.props;
    return (
      <MateButton size="small" onClick={onClick}>
        {buttonContent}
      </MateButton>
    );
  }
}
