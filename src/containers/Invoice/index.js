import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '../../components/uielements/table/';
import Typography from '../../components/uielements/typography';
import notification from '../../components/notification';
import HelperText from '../../components/utility/helper-text';
import Tooltip from '../../components/uielements/tooltip';
import Checkbox from '../../components/uielements/checkbox';
import IconButton from '../../components/uielements/iconbutton';
import Scrollbars from '../../components/utility/customScrollBar';
import { Row, FullColumn } from '../../components/utility/rowColumn';
import LayoutWrapper from '../../components/utility/layoutWrapper';
import invoiceActions from '../../redux/invoice/actions';
import Button, { Fab } from '../../components/uielements/button';
import CardWrapper, {
  Table,
  DeleteIcon,
  Toolbar,
  Icon,
  ActionButtons,
} from './invoice.style';
import { columns } from './config';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
const EnhancedTableToolbar = ({ numSelected, deleteInvoice }) => (
  <Toolbar>
    {numSelected > 0 ? (
      <div className="toolbarContent">
        <Typography variant="subtitle1">{numSelected} selected</Typography>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete" onClick={deleteInvoice}>
            <DeleteIcon>delete</DeleteIcon>
          </IconButton>
        </Tooltip>
      </div>
    ) : (
      ''
    )}
  </Toolbar>
);

const EnhancedTableHead = ({ onSelectAllClick, numSelected, rowCount }) => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={numSelected === rowCount}
          onChange={onSelectAllClick}
          color="primary"
        />
      </TableCell>
      {columns.map(column => (
        <TableCell key={column.rowKey}>{column.title}</TableCell>
      ))}
      <TableCell />
    </TableRow>
  </TableHead>
);

class Invoices extends Component {
  state = {
    selected: [],
  };
  componentDidMount() {
    const { initialInvoices, initData } = this.props;
    if (!initialInvoices) {
      initData();
    }
  }
  isSelected = id => this.state.selected.indexOf(id) !== -1;
  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({
        selected: this.props.invoices.map(invoice => invoice.id),
      });
      return;
    }
    this.setState({ selected: [] });
  };
  handleCheck = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({ selected: newSelected });
  };
  deleteInvoice = () => {
    const { selected } = this.state;
    notification('error', `${selected.length} invoices deleted`);
    this.props.deleteInvoice(selected);
    this.setState({ selected: [] });
  };
  getnewInvoiceId = () => new Date().getTime();
  render() {
    const { selected } = this.state;
    const { match, deleteInvoice, classes, invoices } = this.props;
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <CardWrapper title="Invoices">
              {invoices.length === 0 ? (
                <HelperText text="No Invoices" />
              ) : (
                <div className={classes.root}>
                  <EnhancedTableToolbar
                    numSelected={selected.length}
                    deleteInvoice={this.deleteInvoice}
                  />

                  <Scrollbars style={{ width: '100%' }}>
                    <Table className={classes.table}>
                      <EnhancedTableHead
                        numSelected={selected.length}
                        onSelectAllClick={this.handleSelectAllClick}
                        rowCount={invoices.length}
                      />
                      <TableBody>
                        {invoices.map(invoice => {
                          const isSelected = this.isSelected(invoice.id);
                          return (
                            <TableRow
                              key={invoice.id}
                              aria-checked={isSelected}
                              selected={isSelected}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  checked={isSelected}
                                  onClick={event =>
                                    this.handleCheck(event, invoice.id)
                                  }
                                  color="primary"
                                />
                              </TableCell>
                              {columns.map(column => (
                                <TableCell
                                  key={`${invoice.id}${column.rowKey}`}
                                >
                                  {invoice[column.dataIndex] || ''}
                                </TableCell>
                              ))}
                              <TableCell>
                                <Link to={`${match.path}/${invoice.id}`}>
                                  <Button
                                    color="primary"
                                    className="mateInvoiceView"
                                  >
                                    View
                                  </Button>
                                </Link>
                                <IconButton
                                  className="mateInvoiceDlt"
                                  onClick={() => {
                                    notification('error', '1 invoice deleted');
                                    deleteInvoice([invoice.id]);
                                    this.setState({ selected: [] });
                                  }}
                                >
                                  <DeleteIcon>delete</DeleteIcon>
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Scrollbars>
                </div>
              )}

              <ActionButtons>
                <Link to={`${match.path}/${this.getnewInvoiceId()}`}>
                  <Fab color="primary" className="mateAddInvoiceBtn">
                    <Icon>add</Icon>
                  </Fab>
                </Link>
              </ActionButtons>
            </CardWrapper>
          </FullColumn>
        </Row>
      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.Invoices,
  };
}
const Connect = connect(
  mapStateToProps,
  invoiceActions
)(Invoices);

export default withStyles(styles)(Connect);
