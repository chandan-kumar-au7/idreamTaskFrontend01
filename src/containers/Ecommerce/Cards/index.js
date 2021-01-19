import React, { Component } from 'react';
import { connect } from 'react-redux';
import clone from 'clone';
import { withStyles } from '@material-ui/core/styles';
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '../../../components/uielements/table';
import Typography from '../../../components/uielements/typography/index.js';
import notification from '../../../components/notification';
import HelperText from '../../../components/utility/helper-text';
import Tooltip from '../../../components/uielements/tooltip';
import Checkbox from '../../../components/uielements/checkbox';
import IconButton from '../../../components/uielements/iconbutton';
import Scrollbars from '../../../components/utility/customScrollBar';
import { Row, FullColumn } from '../../../components/utility/rowColumn';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import Card from '../../../components/card';
import cardActions from '../../../redux/card/actions';
import CardWrapper, {
  Table,
  Icon,
  DeleteIcon,
  AddButton,
  RestoreBtn,
  Toolbar,
  Iconbutton,
  ActionButtons,
} from './cards.style';
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
const EnhancedTableToolbar = ({ numSelected, deleteCards }) => (
  <Toolbar>
    {numSelected > 0 ? (
      <div className="toolbarContent">
        <Typography variant="subtitle1">{numSelected} selected</Typography>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete" onClick={deleteCards}>
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
        />
      </TableCell>
      {columns.map(column => (
        <TableCell key={column.rowKey}>{column.title}</TableCell>
      ))}
      <TableCell />
    </TableRow>
  </TableHead>
);

class Cards extends Component {
  state = {
    editView: false,
    selectedCard: null,
    modalType: '',
    selected: [],
  };
  handleCancel = () => {
    this.setState({
      editView: false,
      selectedCard: null,
    });
  };
  isSelected = id => this.state.selected.indexOf(id) !== -1;
  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.props.cards.map(card => card.id) });
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
  addColumn = () => {
    this.setState({
      editView: true,
      selectedCard: {
        id: new Date().getTime(),
        key: new Date().getTime(),
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        notes: '',
      },
      modalType: 'add',
    });
  };
  submitCard = card => {
    if (this.state.modalType === 'edit') {
      this.props.editCard(this.state.selectedCard);
    } else {
      this.props.addCard(this.state.selectedCard);
    }
    this.setState({
      editView: false,
      selectedCard: null,
      selected: [],
    });
  };
  updateCard = selectedCard => {
    this.setState({ selectedCard });
  };
  deleteCards = () => {
    const { selected } = this.state;
    notification('error', `${selected.length} cards deleted`);
    this.props.deleteCards(selected);
    this.setState({ selected: [] });
  };
  render() {
    const { editView, selected, selectedCard, modalType } = this.state;
    const { deleteCard, classes, restoreCards } = this.props;
    const cards = clone(this.props.cards);
    const createNumber = number => {
      const length = number.length;
      let newNumber = '';
      for (let i = 0; i < length - 4; i++) {
        newNumber = `*${newNumber}`;
      }
      for (let i = length - 4; i < length; i++) {
        newNumber = `${newNumber}${number.charAt(i)}`;
      }
      return newNumber;
    };
    cards.forEach((card, index) => {
      cards[index].number = createNumber(card.number);
    });
    return (
      <LayoutWrapper>
        <Row>
          <FullColumn>
            <CardWrapper title="Cards">
              {cards.length === 0 ? (
                <HelperText text="No Cards" />
              ) : (
                <div className={classes.root}>
                  <EnhancedTableToolbar
                    numSelected={selected.length}
                    deleteCards={this.deleteCards}
                  />

                  <Scrollbars style={{ width: '100%' }}>
                    <Table className={classes.table}>
                      <EnhancedTableHead
                        numSelected={selected.length}
                        onSelectAllClick={this.handleSelectAllClick}
                        rowCount={cards.length}
                      />
                      <TableBody>
                        {cards.map(card => {
                          const isSelected = this.isSelected(card.id);
                          return (
                            <TableRow
                              key={card.id}
                              aria-checked={isSelected}
                              selected={isSelected}
                            >
                              <TableCell padding="checkbox">
                                <Checkbox
                                  checked={isSelected}
                                  onClick={event =>
                                    this.handleCheck(event, card.id)
                                  }
                                />
                              </TableCell>
                              {columns.map(column => (
                                <TableCell key={`${card.id}${column.rowKey}`}>
                                  {card[column.dataIndex] || ''}
                                </TableCell>
                              ))}
                              <TableCell>
                                <Iconbutton
                                  onClick={() => {
                                    notification('error', '1 card deleted');
                                    deleteCard(card);
                                    this.setState({ selected: [] });
                                  }}
                                >
                                  <DeleteIcon>delete</DeleteIcon>
                                </Iconbutton>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Scrollbars>
                </div>
              )}
              {selectedCard ? (
                <Card
                  editView={editView}
                  modalType={modalType}
                  selectedCard={selectedCard}
                  handleCancel={this.handleCancel}
                  submitCard={this.submitCard}
                  updateCard={this.updateCard}
                />
              ) : (
                ''
              )}

              <ActionButtons>
                <AddButton className="addCardBtn" onClick={this.addColumn}>
                  <Icon>add</Icon>
                </AddButton>

                <RestoreBtn
                  color="primary"
                  className="addCardBtn"
                  onClick={restoreCards}
                >
                  Restore Cards
                </RestoreBtn>
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
    ...state.Cards,
  };
}
const Connect = connect(
  mapStateToProps,
  { ...cardActions }
)(Cards);

export default withStyles(styles)(Connect);
