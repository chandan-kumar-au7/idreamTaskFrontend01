import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import moment from 'moment';
import Button from '../../components/uielements/button';
import { FormControlLabel } from '../../components/uielements/form';
import notification from '../../components/notification';
import Tooltip from '../../components/uielements/tooltip';
import actions from '../../redux/chat/actions';
import {
  AddUserDialog,
  AddUserForm,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  FormGroup,
  FormLabel,
  FormControl,
  DatePicker,
} from './message.style';

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        maxWidth: '450px',
      },
    },
    MuiInput: {
      input: {
        fontSize: 14,
        fontWeight: 400,

        '@media (max-width: 767px)': {
          width: '100%',
        },
      },
    },
    MuiFormLabel: {
      root: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left',
      },
    },
  },
});

class ComposeMessage extends Component {
  handleCancel = () => {
    this.props.updateNewUsersProp({ modalActive: false });
  };
  initAddUser = () => {
    this.props.updateNewUsersProp({
      modalActive: true,
      name: 'New User',
      dob: '22/04/1992',
      mobileNo: '9429692135',
      gender: 'Male',
      language: 'English',
      profileImageUrl:
        'https://thumb7.shutterstock.com/display_pic_with_logo/818215/552201991/stock-photo-beautiful-young-grinning-professional-black-woman-in-office-with-eyeglasses-folded-arms-and-552201991.jpg',
    });
  };
  userNameExist = newUser =>
    this.props.users.findIndex(
      user => user.name.toLowerCase() === newUser.name.toLowerCase()
    ) !== -1;

  addUser = () => {
    const { user, addNewUsersProp, addNewUser } = this.props;
    if (addNewUsersProp.name) {
      if (this.userNameExist(addNewUsersProp)) {
        notification('error', 'User name already exists');
      } else {
        addNewUser(user, addNewUsersProp);
        notification('success', 'New user created successfuly');
      }
    } else {
      notification('error', 'please add new user');
    }
  };
  render() {
    const {
      addNewUsersProp,
      modalActive,
      name,
      dob,
      mobileNo,
      gender,
      language,
      updateNewUsersProp,
    } = this.props;
    return (
      <div>
        <Tooltip id="userMessage" title="For Demo purpose only" placement="top">
          <Button onClick={this.initAddUser} fullWidth>
            Add New User
          </Button>
        </Tooltip>
        <ThemeProvider theme={theme}>
          <AddUserDialog open={modalActive} onClose={this.handleCancel}>
            <p className="ModalTitle">Add New User</p>
            <AddUserForm>
              <FormGroup>
                <FormControl>
                  <Input
                    label="Name"
                    placeholder="Enter Name"
                    value={name || ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={event => {
                      addNewUsersProp.name = event.target.value;
                      updateNewUsersProp(addNewUsersProp);
                    }}
                  />
                </FormControl>

                <FormControl>
                  <Input
                    label="Mobile"
                    placeholder="Mobile No"
                    value={mobileNo || ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={event => {
                      addNewUsersProp.mobileNo = event.target.value;
                      updateNewUsersProp(addNewUsersProp);
                    }}
                  />
                </FormControl>
              </FormGroup>

              <FormGroup>
                <FormLabel component="legend">Gender</FormLabel>

                <RadioGroup
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={event => {
                    addNewUsersProp.gender = event.target.value;
                    updateNewUsersProp(addNewUsersProp);
                  }}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormGroup>

              <FormGroup>
                <FormControl>
                  <Input
                    label="Language"
                    placeholder="Language"
                    value={language || ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={event => {
                      addNewUsersProp.language = event.target.value;
                      updateNewUsersProp(addNewUsersProp);
                    }}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="DObirth" shrink>
                    Date of Birth
                  </InputLabel>

                  <DatePicker
                    id="DObirth"
                    value={moment(dob, 'DD/MM/YYYY')}
                    onChange={date => {
                      addNewUsersProp.date = date.format('DD/MM/YYYY');
                      updateNewUsersProp(addNewUsersProp);
                    }}
                    animateYearScrolling={false}
                  />
                </FormControl>
              </FormGroup>

              <FormGroup className="btnWrapper">
                <Button color="secondary" onClick={this.handleCancel}>
                  Cancel
                </Button>
                <Button color="primary" onClick={this.addUser}>
                  Add User
                </Button>
              </FormGroup>
            </AddUserForm>
          </AddUserDialog>
        </ThemeProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user, users, addNewUsersProp } = state.Chat;
  return { user, users, addNewUsersProp, ...addNewUsersProp };
}
export default connect(
  mapStateToProps,
  actions
)(ComposeMessage);
