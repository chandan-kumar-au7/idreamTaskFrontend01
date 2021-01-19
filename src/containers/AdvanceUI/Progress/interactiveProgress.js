import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CircularProgress } from '../../../components/uielements/progress';
import Button, { Fab } from '../../../components/uielements/button';
import Icon from '../../../components/uielements/icon/index.js';

class CircularIntegration extends React.Component {
  state = {
    loading: false,
    success: false,
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  handleButtonClick = () => {
    if (!this.state.loading) {
      this.setState(
        {
          success: false,
          loading: true,
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              loading: false,
              success: true,
            });
          }, 2000);
        }
      );
    }
  };

  timer = undefined;

  render() {
    const { loading, success } = this.state;
    const { classes } = this.props;
    const buttonClassname = classNames({
      [classes.buttonSuccess]: success,
    });

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Fab
            color="primary"
            className={buttonClassname}
            onClick={this.handleButtonClick}
          >
            {success ? <Icon>check</Icon> : <Icon>save</Icon>}
          </Fab>
          {loading && (
            <CircularProgress size={68} className={classes.fabProgress} />
          )}
        </div>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={buttonClassname}
            disabled={loading}
            onClick={this.handleButtonClick}
          >
            Accept terms
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </div>
      </div>
    );
  }
}

CircularIntegration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CircularIntegration;
