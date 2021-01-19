import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '../../../components/uielements/progress';
import purple from '@material-ui/core/colors/purple';

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress className={classes.progress} />
      <CircularProgress className={classes.progress} size={50} />
      <CircularProgress className={classes.progress} color="secondary" />
      <CircularProgress
        className={classes.progress}
        style={{ color: purple[500] }}
        thickness={7}
      />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default CircularIndeterminate;
