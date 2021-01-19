import React, { useState } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import SearchInput from '../../../components/scrumBoard/SearchInput/SearchInput';
import modalActions from '../../../redux/modal/actions';
import scrumBoardActions from '../../../redux/scrumBoard/actions';
import {
  Title,
  Filters,
  Header,
  HeaderSecondary,
  ButtonText,
} from './AppLayout.style';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

const AppLayout = ({ children, setSearchText, history, match }) => {
  const classes = useStyles();

  // for type and category popover control
  const [anchorEl, setAnchorEl] = useState({
    type: null,
    category: null,
  });

  const handlePopoverClick = name => event => {
    setAnchorEl({
      ...anchorEl,
      [name]: event.currentTarget,
    });
  };

  const handlePopoverClose = name => {
    setAnchorEl({
      ...anchorEl,
      [name]: null,
    });
  };

  const typeOpen = Boolean(anchorEl.type);
  const typeID = typeOpen ? 'type-popover' : undefined;
  const categoryOpen = Boolean(anchorEl.category);
  const categoryID = categoryOpen ? 'category-popover' : undefined;

  // for type dropdown
  const [typeState, setTypeState] = useState({
    private: true,
    public: true,
  });

  const handleTypeChange = name => event => {
    setTypeState({ ...typeState, [name]: event.target.checked });
  };

  // for categories dropdown
  const [categoryState, setCategoryState] = useState({
    software: false,
    ops: false,
    serviceDesk: false,
    business: false,
    general: false,
  });

  const handleCategoryChange = name => event => {
    setCategoryState({ ...categoryState, [name]: event.target.checked });
  };

  return (
    <Container style={{ minHeight: '100vh' }}>
      <Header>
        <Title>My Projects</Title>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => history.push(`${match.url}/new`)}
        >
          Create Project
        </Button>
      </Header>

      <HeaderSecondary>
        <SearchInput onChange={value => setSearchText(value)} />

        <Filters>
          <ButtonText
            aria-describedby={typeID}
            onClick={handlePopoverClick('type')}
          >
            All Types <Icon>keyboard_arrow_down</Icon>
          </ButtonText>
          <Popover
            id={typeID}
            open={typeOpen}
            anchorEl={anchorEl.type}
            onClose={() => handlePopoverClose('type')}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <List>
              {Object.entries(typeState).map(item => (
                <ListItem
                  key={`type-key--${item}`}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item[1]}
                        onChange={handleTypeChange(item[0])}
                        value={item[0]}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                      />
                    }
                    label={item[0].charAt(0).toUpperCase() + item[0].slice(1)}
                  />
                </ListItem>
              ))}
            </List>
          </Popover>

          <ButtonText
            aria-describedby={categoryID}
            onClick={handlePopoverClick('category')}
          >
            Categories <Icon>keyboard_arrow_down</Icon>
          </ButtonText>
          <Popover
            id={categoryID}
            open={categoryOpen}
            anchorEl={anchorEl.category}
            onClose={() => handlePopoverClose('category')}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <List>
              {Object.entries(categoryState).map(item => (
                <ListItem
                  key={`category-key--${item}`}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item[1]}
                        onChange={handleCategoryChange(item[0])}
                        value={item[0]}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                      />
                    }
                    label={item[0].charAt(0).toUpperCase() + item[0].slice(1)}
                  />
                </ListItem>
              ))}
            </List>
          </Popover>
        </Filters>
      </HeaderSecondary>

      {children}
    </Container>
  );
};
export default connect(
  null,
  { ...modalActions, ...scrumBoardActions }
)(AppLayout);
