import React from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
} from '../../../components/uielements/form';
import Radio, { RadioGroup } from '../../../components/uielements/radio';
import Grid from '../../../components/uielements/grid';
import Typography from '../../../components/uielements/typography';
import Button from '../../../components/uielements/button';
import Popover from '../../../components/uielements/popover.js';
import Input, { InputLabel } from '../../../components/uielements/input';

class AnchorPlayground extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    anchorOriginVertical: 'bottom',
    anchorOriginHorizontal: 'center',
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'center',
    positionTop: 200, // Just so the popover can be spotted more easily
    positionLeft: 400, // Same as above
    anchorReference: 'anchorEl',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleNumberInputChange = key => event => {
    this.setState({
      [key]: parseInt(event.target.value, 10),
    });
  };

  handleClickButton = () => {
    this.setState({
      open: true,
      anchorEl: findDOMNode(this.button),
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  button = null;

  render() {
    const { classes } = this.props;
    const {
      open,
      anchorEl,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference,
    } = this.state;

    return (
      <div>
        <Button
          ref={node => {
            this.button = node;
          }}
          variant="contained"
          className={classes.button}
          onClick={this.handleClickButton}
        >
          Open Popover
        </Button>
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorReference={anchorReference}
          anchorPosition={{ top: positionTop, left: positionLeft }}
          onClose={this.handleRequestClose}
          anchorOrigin={{
            vertical: anchorOriginVertical,
            horizontal: anchorOriginHorizontal,
          }}
          transformOrigin={{
            vertical: transformOriginVertical,
            horizontal: transformOriginHorizontal,
          }}
        >
          <Typography className={classes.typography}>
            The content of the Popover.
          </Typography>
        </Popover>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Anchor Reference</FormLabel>
              <RadioGroup
                row
                aria-label="anchorReference"
                name="anchorReference"
                value={this.state.anchorReference}
                onChange={this.handleChange('anchorReference')}
              >
                <FormControlLabel
                  value="anchorEl"
                  control={<Radio />}
                  label="anchorEl"
                />
                <FormControlLabel
                  value="anchorPosition"
                  control={<Radio />}
                  label="anchorPosition"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="position-top">
                Anchor Position Top
              </InputLabel>
              <Input
                id="position-top"
                type="number"
                value={this.state.positionTop}
                onChange={this.handleNumberInputChange('positionTop')}
              />
            </FormControl>
            &nbsp;
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="position-left">
                Anchor Position Left
              </InputLabel>
              <Input
                id="position-left"
                type="number"
                value={this.state.positionLeft}
                onChange={this.handleNumberInputChange('positionLeft')}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Anchor Origin Vertical</FormLabel>
              <RadioGroup
                aria-label="anchorOriginVertical"
                name="anchorOriginVertical"
                value={this.state.anchorOriginVertical}
                onChange={this.handleChange('anchorOriginVertical')}
              >
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel
                  value="center"
                  control={<Radio />}
                  label="Center"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Radio />}
                  label="Bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Transform Origin Vertical
              </FormLabel>
              <RadioGroup
                aria-label="transformOriginVertical"
                name="transformOriginVertical"
                value={this.state.transformOriginVertical}
                onChange={this.handleChange('transformOriginVertical')}
              >
                <FormControlLabel value="top" control={<Radio />} label="Top" />
                <FormControlLabel
                  value="center"
                  control={<Radio />}
                  label="Center"
                />
                <FormControlLabel
                  value="bottom"
                  control={<Radio />}
                  label="Bottom"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Anchor Origin Horizontal</FormLabel>
              <RadioGroup
                row
                aria-label="anchorOriginHorizontal"
                name="anchorOriginHorizontal"
                value={this.state.anchorOriginHorizontal}
                onChange={this.handleChange('anchorOriginHorizontal')}
              >
                <FormControlLabel
                  value="left"
                  control={<Radio />}
                  label="Left"
                />
                <FormControlLabel
                  value="center"
                  control={<Radio />}
                  label="Center"
                />
                <FormControlLabel
                  value="right"
                  control={<Radio />}
                  label="Right"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Transform Origin Horizontal
              </FormLabel>
              <RadioGroup
                row
                aria-label="transformOriginHorizontal"
                name="transformOriginHorizontal"
                value={this.state.transformOriginHorizontal}
                onChange={this.handleChange('transformOriginHorizontal')}
              >
                <FormControlLabel
                  value="left"
                  control={<Radio />}
                  label="Left"
                />
                <FormControlLabel
                  value="center"
                  control={<Radio />}
                  label="Center"
                />
                <FormControlLabel
                  value="right"
                  control={<Radio />}
                  label="Right"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AnchorPlayground.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AnchorPlayground;
