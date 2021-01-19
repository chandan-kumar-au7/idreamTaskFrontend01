import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/uielements/button';
import Avatar from '../../../components/uielements/avatars';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '../../../components/uielements/lists';
import Dialog, { DialogTitle } from '../../../components/uielements/dialogs';
import Icon from '../../../components/uielements/icon/index.js';
import Typography from '../../../components/uielements/typography';
import { DemoWrapper } from '../../../components/utility/papersheet';

const emails = ['username@gmail.com', 'user02@gmail.com'];

class SimpleDialog extends React.Component {
  handleRequestClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const {
      classes,
      onClose,
      staticContext,
      selectedValue,
      ...other
    } = this.props;
    return (
      <Dialog onClose={this.handleRequestClose} {...other}>
        <DialogTitle>Set backup account</DialogTitle>
        <div>
          <List>
            {emails.map(email => (
              <ListItem
                button
                onClick={() => this.handleListItemClick(email)}
                key={email}
              >
                <ListItemAvatar>
                  <Avatar className={classes.avatar}>
                    <Icon>person</Icon>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItem>
            ))}
            <ListItem
              button
              onClick={() => this.handleListItemClick('addAccount')}
            >
              <ListItemAvatar>
                <Avatar>
                  <Icon>add</Icon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="add account" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = SimpleDialog;

class SimpleDialogDemo extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { props } = this;
    return (
      <DemoWrapper data-direction="column">
        <Typography variant="subtitle1">
          Selected: {this.state.selectedValue}
        </Typography>
        <br />
        <Button onClick={this.handleClickOpen}>Open simple dialog</Button>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleRequestClose}
          {...props}
        />
      </DemoWrapper>
    );
  }
}

export default SimpleDialogDemo;
