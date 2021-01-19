import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Scrollbars from '../../../components/utility/customScrollBar';
import { withStyles } from '@material-ui/core/styles';
import keycode from 'keycode';
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '../../../components/uielements/table';
import { Table } from './materialUiTables.style';
import Toolbar from '../../../components/uielements/toolbar';
import Typography from '../../../components/uielements/typography';
import Paper from '../../../components/uielements/paper';
import Checkbox from '../../../components/uielements/checkbox';
import IconButton from '../../../components/uielements/iconbutton';
import Icon from '../../../components/uielements/icon/index.js';
import Tooltip from '../../../components/uielements/tooltip';

let counter = 0;
function createData(name, calories, fat, carbs, protein) {
  counter += 1;
  return { id: counter, name, calories, fat, carbs, protein };
}

const columnData = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  { id: 'calories', numeric: false, disablePadding: false, label: 'Position' },
  { id: 'fat', numeric: false, disablePadding: false, label: 'Office' },
  { id: 'carbs', numeric: false, disablePadding: false, label: 'Joining Date' },
  { id: 'protein', numeric: true, disablePadding: false, label: 'Salary ($)' },
];

class EnhancedTableHead extends Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };
  render() {
    const {
      onSelectAllClick,
      order,
      orderBy,
      numSelected,
      rowCount,
    } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {columnData.map(column => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={this.createSortHandler(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: 2,
  },
  highlight: {
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.primary[500],
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    fill: theme.palette.text.primary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography variant="subtitle1">{numSelected} selected</Typography>
        ) : (
          <Typography variant="h6">Nutrition</Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <Icon>delete</Icon>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <Icon>filter_list</Icon>
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

export default class EnhancedTable extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [
        createData(
          'John A. Smith',
          'Accountant',
          'Tokyo',
          '28th Nov 08',
          162700
        ),
        createData(
          'Bob C. Uncle',
          'Chief Executive Officer (CEO)',
          'London',
          '9th Oct 09',
          1200000
        ),
        createData(
          'John D. Smith',
          'Software Engineer',
          'San Francisco	',
          '12th Jan 09',
          86000
        ),
        createData(
          'Angelica Vance',
          'Software Engineer',
          'London	',
          '12th Jan 08',
          239000
        ),
        createData(
          'Ashton Nash',
          'Integration Specialist	',
          'Tokyo	',
          '2nd Dec 12',
          206850
        ),
        createData(
          'Brenden Greer',
          'Software Engineer',
          'London	',
          '3rd May 11',
          163500
        ),
        createData(
          'Bruno Wagner',
          'Pre-Sales Support',
          'New York	',
          '12th Dec 11',
          106450
        ),
        createData(
          'Bradley Wilder',
          'Senior Javascript Developer',
          'Edinburgh	',
          '12th Jan 08',
          433060
        ),
        createData(
          'Colleen Green',
          'Software Engineer',
          'London	',
          '12th Jan 08',
          132000
        ),
        createData(
          'Finn Marshall',
          'Software Engineer',
          'London	',
          '22th Jan 12',
          136000
        ),
        createData(
          'Dai Snider',
          'Senior Software Engineer',
          'Germany	',
          '23rd Mar 18',
          635500
        ),
        createData(
          'Garrett Joyce',
          'UI Engineer',
          'London	',
          '10th Oct 09',
          333000
        ),
        createData(
          'Gavin Rios',
          'Senior UX Designer',
          'Arizona	',
          '3rd Jan 12',
          532000
        ),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleSelectAllClick = (event, checked) => {
    if (checked) {
      this.setState({ selected: this.state.data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  handleClick = (event, id) => {
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

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <Scrollbars style={{ width: '100%' }}>
          <Table className={classes.table}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n.id)}
                      onKeyDown={event => this.handleKeyDown(event, n.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n.id}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell padding="none">{n.name}</TableCell>
                      <TableCell>{n.calories}</TableCell>
                      <TableCell>{n.fat}</TableCell>
                      <TableCell>{n.carbs}</TableCell>
                      <TableCell numeric>{n.protein}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Scrollbars>
      </Paper>
    );
  }
}
