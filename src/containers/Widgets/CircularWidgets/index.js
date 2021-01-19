import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CircularProgress from '../../../components/uielements/circularProgress';
import config from './config';
import Activity, {
  CircularProgressbarWrapper,
  ProgressbarText,
  MinMaxValueWrapper,
} from './style';
import WidgetBox from '../WidgetBox';

const theme = createMuiTheme({
  overrides: {
    MuiCircularProgress: {
      root: {
        zInde: 1,
        position: 'relative',
      },
      circle: {
        stroke: '#53a2e5',
      },
    },
  },
});

class CircularWidget extends Component {
  state = {
    percentage: parseInt((config.value * 100) / (config.max - config.min), 10),
    currentValue: 0,
    currentPercentage: 0,
  };
  updatePerCentage = () => {
    const { percentage } = this.state;
    const currentPercentage = this.state.currentPercentage + 1;
    const { min, max, value } = config;

    setTimeout(async () => {
      if (percentage >= currentPercentage) {
        const currentValue =
          percentage === currentPercentage
            ? value
            : (((max - min) * currentPercentage) / 100).toFixed(2);
        try {
          if (!this.unmount) {
            this.setState({ currentValue, currentPercentage });
            this.updatePerCentage();
          }
        } catch (e) {}
      }
    }, 30);
  };
  componentDidMount() {
    this.updatePerCentage();
  }
  componentWillUnmount() {
    this.unmount = true;
  }

  render() {
    const { currentValue, currentPercentage } = this.state;
    const { min, max, title, text } = config;
    return (
      <WidgetBox title={this.props.title} stretched={this.props.stretched}>
        <Activity>
          <CircularProgressbarWrapper>
            <ThemeProvider theme={theme}>
              <CircularProgress
                value={currentPercentage}
                size={210}
                thickness={0.8}
                variant="static"
              />
            </ThemeProvider>

            <ProgressbarText>
              <span className="text">{text}</span>
              <h3>{currentValue}</h3>
              <span>{title}</span>
            </ProgressbarText>
          </CircularProgressbarWrapper>

          <MinMaxValueWrapper>
            <ProgressbarText>
              <span className="text">Min</span>
              <h3>{min}</h3>
              <span>{title}</span>
            </ProgressbarText>

            <ProgressbarText>
              <span className="text">Max</span>
              <h3>{max}</h3>
              <span>{title}</span>
            </ProgressbarText>
          </MinMaxValueWrapper>
        </Activity>
      </WidgetBox>
    );
  }
}

export default CircularWidget;
