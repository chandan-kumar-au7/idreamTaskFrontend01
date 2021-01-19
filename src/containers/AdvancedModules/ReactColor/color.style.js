import styled from 'styled-components';
import { palette } from 'styled-theme';
import Icons from '../../../components/uielements/icon';
const ColorIcon = styled(Icons)`
  color: ${palette('grey', 6)};
  transition: all 0.25s;

  &:hover {
    color: ${palette('blue', 14)};
  }
`;

const ColorPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const DisplayBox = styled.div`
  width: 100px;
  height: 35px;
  display: inline-flex;
  overflow: hidden;
`;
const MatePhotoshopPicker = styled.div`
  .photoshop-picker {
    width: 84% !important;
    margin-top: 5px;
    @media (max-width: 990px) {
      width: 70% !important;
    }
    @media (max-width: 870px) {
      width: 50% !important;
    }
  }
`;
const MateCircleColorPicker = styled.div`
  .circle-picker {
    background: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
    border-radius: 4px;
    position: relative;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    padding-left: 14px;
    padding-right: 0px;
  }
`;
const ColumnWrapper = styled.div`
  width: 100%;
  > div {
    > div {
      @media (min-width: 620px) {
        max-width: 50% !important;
      }
    }
  }
`;
export {
  MatePhotoshopPicker,
  MateCircleColorPicker,
  ColumnWrapper,
  ColorPicker,
  DisplayBox,
  ColorIcon,
};
