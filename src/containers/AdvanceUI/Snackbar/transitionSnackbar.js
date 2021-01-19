import React from 'react';
import Button from '../../../components/uielements/button';
import Snackbar from './style';
import Slide from '@material-ui/core/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

class DirectionSnackbar extends React.Component {
  state = {
    open: false,
    transition: null,
  };

  handleClick = transition => () => {
    this.setState({ open: true, transition });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClick(TransitionLeft)}>Right</Button>
        <Button onClick={this.handleClick(TransitionUp)}>Up</Button>
        <Button onClick={this.handleClick(TransitionRight)}>Left</Button>
        <Button onClick={this.handleClick(TransitionDown)}>Down</Button>
        <Snackbar
          open={this.state.open}
          onClose={this.handleRequestClose}
          TransitionComponent={this.state.transition}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">I love snacks</span>}
        />
      </div>
    );
  }
}

export default DirectionSnackbar;
