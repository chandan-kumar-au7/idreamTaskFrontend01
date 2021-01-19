import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { EditTable } from '../../components/invoice/invoiceTable';
import OrderStatus from '../../components/invoice/orderStatus';
import notification from '../../components/notification';
import Button from '../../components/uielements/button';
import { DatePicker } from '../../components/uielements/materialUiPicker';
import { Row, FullColumn } from '../../components/utility/rowColumn.js';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import Papersheet from '../../components/utility/papersheet';
import { stringToPosetiveInt } from '../../helpers/utility';
import Scrollbars from '../../components/utility/customScrollBar';
import InvoicePageWrapper, {
  PrintIcon,
  Textfield,
} from './singleInvoice.style';
import { orderStatusOptions } from './config';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

const updateValues = invoice => {
  const { invoiceList } = invoice;
  let subTotal = 0;
  invoiceList.forEach((item, index) => {
    const price = item.costs * item.qty;
    invoice.invoiceList[index].price = price;
    invoice.invoiceList[index].key = index + 1;
    subTotal += price;
  });
  invoice.subTotal = subTotal;
  invoice.vatPrice = Math.floor(invoice.vatRate * subTotal * 0.01);
  invoice.totalCost = invoice.vatPrice + subTotal;
  return invoice;
};
const checkInvoice = invoice => {
  const emptyKeys = [
    'number',
    'billTo',
    'billToAddress',
    'billFrom',
    'billFromAddress',
    'currency',
  ];
  const emptyKeysErrors = [
    'Invoice Number',
    'Bill To',
    'Bill To Address',
    'Bill From',
    'Bill From Address',
    'Currency',
  ];
  for (let i = 0; i < emptyKeys.length; i++) {
    if (!invoice[emptyKeys[i]]) {
      return `Please fill in ${emptyKeysErrors[i]}`;
    }
  }
  for (let i = 0; i < invoice.invoiceList.length; i++) {
    if (!invoice.invoiceList[i].itemName) {
      return `Please fill in item name of ${i + 1} item`;
    }
    if (invoice.invoiceList[i].costs === 0) {
      return `cost of ${i + 1} item should be positive`;
    }
    if (invoice.invoiceList[i].qty === 0) {
      return `quantity of ${i + 1} item should be positive`;
    }
  }
  return '';
};
class SingleInvoiceEdit extends Component {
  onSave = () => {
    const { editableInvoice, isNewInvoice, updateInvoice } = this.props;
    const error = checkInvoice(editableInvoice);
    if (error) {
      notification('error', error);
    } else {
      const successMessage = isNewInvoice
        ? 'A new Invoice added'
        : 'Invoice Updated';
      notification('success', successMessage);
      updateInvoice(editableInvoice);
    }
  };
  render() {
    const {
      editableInvoice,
      isNewInvoice,
      redirectPath,
      toggleView,
      editInvoice,
    } = this.props;
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <InvoicePageWrapper className="InvoicePageWrapper">
              <div className="PageHeader">
                {isNewInvoice ? (
                  <Link to={redirectPath}>
                    <Button color="primary">
                      <PrintIcon>undo</PrintIcon>
                      <span>Cancel</span>
                    </Button>
                  </Link>
                ) : (
                  <Button variant="contained" onClick={() => toggleView(false)}>
                    <PrintIcon>undo</PrintIcon>
                    <span>Cancel</span>
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.onSave}
                  className="saveBtn"
                >
                  <PrintIcon>print</PrintIcon>
                  <span>Save</span>
                </Button>
              </div>
              <Papersheet>
                <div className="PageContent">
                  <div className="OrderInfo">
                    <div className="LeftSideContent">
                      <h3 className="Title">Invoice Info</h3>
                      <Textfield
                        label="Number"
                        value={editableInvoice.number}
                        onChange={event => {
                          editableInvoice.number = event.target.value;
                          editInvoice(editableInvoice);
                        }}
                        className="LeftSideContentInput"
                      />
                    </div>
                    <div className="RightSideContent">
                      <div className="RightSideStatus">
                        <span className="RightSideStatusSpan">
                          Order Status:{' '}
                        </span>
                        <OrderStatus
                          value={editableInvoice.orderStatus}
                          onChange={orderStatus => {
                            editableInvoice.orderStatus = orderStatus;
                            editInvoice(editableInvoice);
                          }}
                          orderStatusOptions={orderStatusOptions}
                          className="RightStatusDropdown"
                        />
                      </div>
                      <div className="RightSideDate">
                        Order date:{' '}
                        <DatePicker
                          value={moment(new Date(editableInvoice.orderDate))}
                          onChange={val => {
                            editableInvoice.orderDate = val.toDate().getTime();
                            editInvoice(editableInvoice);
                          }}
                          format="MMMM Do YYYY"
                          animateYearScrolling={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="BillingInformation">
                    <div className="LeftSideContent">
                      <Textfield
                        label="Bill From"
                        value={editableInvoice.billFrom}
                        onChange={event => {
                          editableInvoice.billFrom = event.target.value;
                          editInvoice(editableInvoice);
                        }}
                        className="BillFormTitle"
                      />
                      <Textfield
                        label="Bill From Address"
                        value={editableInvoice.billFromAddress}
                        multiline={true}
                        rows={5}
                        onChange={event => {
                          editableInvoice.billFromAddress = event.target.value;
                          editInvoice(editableInvoice);
                        }}
                        className="BillFormAddress"
                      />
                    </div>
                    <div className="RightSideContent">
                      <Textfield
                        label="Bill To"
                        value={editableInvoice.billTo}
                        onChange={event => {
                          editableInvoice.billTo = event.target.value;
                          editInvoice(editableInvoice);
                        }}
                        className="BillFormTitle"
                      />
                      <Textfield
                        label="Bill To Address"
                        value={editableInvoice.billToAddress}
                        multiline={true}
                        rows={5}
                        onChange={event => {
                          editableInvoice.billToAddress = event.target.value;
                          editInvoice(editableInvoice);
                        }}
                        className="BillFormAddress"
                      />
                    </div>
                  </div>

                  <div className="InvoiceTable editInvoiceTable">
                    <Scrollbars
                      style={{ width: '100%' }}
                      className="customScrollBar"
                    >
                      <EditTable
                        editableInvoice={editableInvoice}
                        editInvoice={editInvoice}
                        updateValues={updateValues}
                      />
                    </Scrollbars>
                    <div className="InvoiceTableBtn">
                      <Button
                        variant="contained"
                        onClick={() => {
                          editableInvoice.invoiceList.push({
                            key: editableInvoice.invoiceList + 1,
                            itemName: '',
                            costs: 0,
                            qty: 0,
                            price: 0,
                          });
                          editInvoice(editableInvoice);
                        }}
                        className="InvoiceEditAddBtn"
                      >
                        <span>Add Item</span>
                      </Button>
                    </div>
                    <div className="TotalBill">
                      <p>
                        <span className="TotalBillTitle">Sub-total : </span>
                        <span>{`${editableInvoice.currency}${editableInvoice.subTotal}`}</span>
                      </p>
                      <div className="vatRateCalc">
                        <span className="vatRateCalcSpan"> Total Vat : </span>
                        <Textfield
                          value={editableInvoice.vatRate}
                          onChange={event => {
                            editableInvoice.vatRate = stringToPosetiveInt(
                              event.target.value,
                              editableInvoice.vatRate
                            );
                            editInvoice(updateValues(editableInvoice));
                          }}
                        />

                        <span>{`${editableInvoice.currency}${editableInvoice.vatPrice}`}</span>
                      </div>
                      <div className="currencySignWithTotal">
                        <span className="grandTotal">Grand Total </span>
                        <Textfield
                          value={editableInvoice.currency}
                          onChange={event => {
                            editableInvoice.currency = event.target.value;
                            editInvoice(editableInvoice);
                          }}
                          className="currencySign"
                        />
                        <span className="currencySignSpan">
                          {editableInvoice.totalCost}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="ButtonWrapper" />
                </div>
              </Papersheet>
            </InvoicePageWrapper>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SingleInvoiceEdit);
