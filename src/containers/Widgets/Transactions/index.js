import React, { Component } from 'react';
import Async from '../../../helpers/asyncComponent';
import WidgetBox from '../WidgetBox';
import { TransactionWidget, Graph, Icon } from './style';

const Bar = props => (
  <Async
    load={import(/* webpackChunkName: "ReactChart2-bar" */ './bar')}
    componentProps={props}
  />
);

export default class Transaction extends Component {
  render() {
    const {
      title,
      duration,
      amount,
      upward,
      downward,
      currency,
      style,
      data,
      stretched,
    } = this.props;

    return (
      <WidgetBox title={title} style={style} stretched={stretched}>
        <TransactionWidget>
          {duration ? <p className="transactionDuration">{duration}</p> : ''}

          <Graph>
            {amount ? (
              <div className="currency">
                <h3>
                  {currency} {amount}
                </h3>
                {upward || downward ? (
                  upward ? (
                    <Icon className="upward">arrow_upward</Icon>
                  ) : downward ? (
                    <Icon className="downward">arrow_downward</Icon>
                  ) : (
                    ''
                  )
                ) : (
                  ''
                )}
              </div>
            ) : (
              ''
            )}
            <div className="chartWrapper">
              <Bar data={data} />
            </div>
          </Graph>
        </TransactionWidget>
      </WidgetBox>
    );
  }
}
