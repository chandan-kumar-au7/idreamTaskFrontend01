import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/uielements/button';
import List, {
  ListItem,
  ListItemText,
} from '../../../components/uielements/lists';
import { DemoWrapper } from '../../../components/utility/papersheet';
import Divider from '../../../components/uielements/dividers';
import AppBar from '../../../components/uielements/appbar';
import Toolbar from '../../../components/uielements/toolbar';
import IconButton from '../../../components/uielements/iconbutton';
import Typography from '../../../components/uielements/typography';
import Icon from '../../../components/uielements/icon/index.js';
import Slide from '@material-ui/core/Slide';
import { FullScreenDialogs } from './dialogs.style';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <DemoWrapper>
        <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button>
        <FullScreenDialogs
          fullScreen
          open={this.state.open}
          onClose={this.handleRequestClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="contrast"
                onClick={this.handleRequestClose}
                aria-label="Close"
              >
                <Icon>close</Icon>
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="contrast" onClick={this.handleRequestClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Default notification ringtone"
                secondary="Tethys"
              />
            </ListItem>
          </List>
        </FullScreenDialogs>
      </DemoWrapper>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FullScreenDialog;
