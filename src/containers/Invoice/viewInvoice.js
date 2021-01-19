import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import { ViewTable } from '../../components/invoice/invoiceTable';
import { Row, FullColumn } from '../../components/utility/rowColumn.js';
import Button from '../../components/uielements/button';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import Papersheet from '../../components/utility/papersheet';
import InvoiceAddress from '../../components/invoice/address';
import Scrollbars from '../../components/utility/customScrollBar';
import InvoicePageWrapper, { PrintIcon } from './singleInvoice.style';

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

class SingleInvoiceView extends Component {
  render() {
    const { currentInvoice, toggleView, redirectPath } = this.props;
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <InvoicePageWrapper className="InvoicePageWrapper">
              <div className="PageHeader">
                <Link to={redirectPath}>
                  <Button color="primary">
                    <PrintIcon>call_split</PrintIcon>
                    <span>Go To Invoices</span>
                  </Button>
                </Link>
                <Button color="secondary" onClick={() => toggleView(true)}>
                  <PrintIcon>mode_edit</PrintIcon>
                  <span>Edit Invoice</span>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="mateInvoPrint"
                >
                  <PrintIcon>print</PrintIcon>
                  <span>Print Invoice</span>
                </Button>
              </div>

              <Papersheet>
                <div className="PageContent">
                  <div className="OrderInfo">
                    <div className="LeftSideContent">
                      <h3 className="Title">Invoice Info</h3>
                      <span className="InvoiceNumber">
                        {currentInvoice.number}
                      </span>
                    </div>
                    <div className="RightSideContent">
                      <p>
                        Order Status:{' '}
                        <span className="orderStatus">
                          {currentInvoice.orderStatus}
                        </span>
                      </p>
                      <p>
                        Order date:{' '}
                        <span className="orderDate">
                          {moment(new Date(currentInvoice.orderDate)).format(
                            'MMMM Do YYYY'
                          )}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="BillingInformation">
                    <div className="LeftSideContent">
                      <h3 className="Title">Bill From</h3>

                      <InvoiceAddress
                        companyName={currentInvoice.billFrom}
                        companyAddress={currentInvoice.billFromAddress}
                      />
                    </div>
                    <div className="RightSidclassName=ent">
                      <h3 className="Title">Bill To</h3>

                      <InvoiceAddress
                        companyName={currentInvoice.billTo}
                        companyAddress={currentInvoice.billToAddress}
                      />
                    </div>
                  </div>

                  <div className="InvoiceTable">
                    <Scrollbars
                      style={{ width: '100%' }}
                      className="customScrollBar"
                    >
                      <ViewTable invoiceList={currentInvoice.invoiceList} />
                    </Scrollbars>
                    <div className="TotalBill">
                      <p>
                        Sub-total :{' '}
                        <span>{`${currentInvoice.currency}${currentInvoice.subTotal}`}</span>
                      </p>
                      <p>
                        Vat :{' '}
                        <span>{`${currentInvoice.currency}${currentInvoice.vatPrice}`}</span>
                      </p>
                      <h3>
                        <span>Grand Total : </span>
                        <span>{`${currentInvoice.currency}${currentInvoice.totalCost}`}</span>
                      </h3>
                    </div>
                  </div>

                  <div className="ButtonWrapper">
                    <Button
                      variant="contained"
                      color="primary"
                      className="mateInvoPrint"
                    >
                      <span>Send Invoice</span>
                    </Button>
                  </div>
                </div>
              </Papersheet>
            </InvoicePageWrapper>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SingleInvoiceView);
