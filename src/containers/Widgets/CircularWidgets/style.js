import styled from 'styled-components';
import { palette } from 'styled-theme';

const ProgressbarText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 12px;
    font-weight: 400;
    color: ${palette('grey', 8)};
    margin: 0 0 15px;
  }

  h3 {
    font-size: 24px;
    font-weight: 400;
    color: ${palette('grey', 9)};
    margin: 0 0 15px;
  }

  .text {
    font-size: 11px;
    font-weight: 700;
    color: ${palette('grey', 5)};
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const CircularProgressbarWrapper = styled.div`
  position: relative;

  &:before {
    content: '';
    width: 210px;
    height: 210px;
    background-color: #eeeeee;
    border-radius: 50%;
    overflow: hidden;
    top: 0;
    left: 0;
    position: absolute;
  }

  &:after {
    content: '';
    width: calc(210px - 8px);
    height: calc(210px - 8px);
    background-color: #ffffff;
    border-radius: 50%;
    overflow: hidden;
    top: 4px;
    left: 4px;
    position: absolute;
  }

  ${ProgressbarText} {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      color: ${palette('indigo', 1)};
    }
  }
`;

const MinMaxValueWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 30px;
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  * {
    box-sizing: border-box;
  }
`;

export default Activity;
export { CircularProgressbarWrapper, ProgressbarText, MinMaxValueWrapper };
