import React from 'react';
import Button from '../../../components/uielements/button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '../../../components/uielements/dialogs';
import { DemoWrapper } from '../../../components/utility/papersheet';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {
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
    return (
      <DemoWrapper>
        <Button onClick={this.handleClickOpen}>Slide in alert dialog</Button>
        <Dialog
          open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleRequestClose}
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </DemoWrapper>
    );
  }
}

export default AlertDialogSlide;
