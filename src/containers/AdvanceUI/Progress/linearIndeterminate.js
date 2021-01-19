import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '../../../components/uielements/progress';

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div className={classes.linearRoot}>
      <LinearProgress />
      <br />
      <LinearProgress color="secondary" />
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default LinearIndeterminate;
