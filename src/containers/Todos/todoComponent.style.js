import styled from 'styled-components';
// import { palette } from 'styled-theme';
import { transition, borderRadius } from '../../settings/style-util';
import WithDirection from '../../settings/withDirection';
// import Input from '../../components/uielements/input';
// import IconButtons from '../../components/uielements/iconbutton';

const TodoComponentWrapper = styled.div`
  .matTodoContent {
    display: flex;
    flex-direction: column;
    .matTodoStatusTab {
      .matTodoStatus {
        display: flex;
        flex-direction: row;
      }
    }
    .matTodoListWrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      .matTodoList {
        display: flex;
        width: 100%;
        padding: 20px 15px 20px 0;
        overflow: hidden;
        margin: 0 0 15px;
        background: #ffffff;
        border: 1px solid #e9e9e9;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: flex-start;
        -webkit-box-align: flex-start;
        -ms-flex-align: flex-start;
        align-items: flex-start;
        text-align: left;
        position: relative;
        .colorChooser {
          min-width: 5px;
          height: 100%;
          padding: 0;
          border: 0;
          outline: 0;
          -webkit-flex-shrink: 0;
          -ms-flex-negative: 0;
          flex-shrink: 0;
          margin-right: 10px;
          margin-left: inherit;
          position: absolute;
          top: 0;
          left: 0;
          right: inherit;
          margin: ${props =>
            props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0'};
          padding: 0;
          ${borderRadius('1px')};
          ${transition()};
        }
        .matTodoCheck {
          line-height: 1;
          margin-right: 5px;
          margin-left: 25px;
        }
        .matTodoContentWrapper {
          display: flex;
          width: 100%;
          .matNoteContent {
          }
          .matTodoDate {
            flex-shrink: 0;
          }
          .matTodoDelete {
            flex-shrink: 0;
          }
        }
      }
    }
  }
`;

export default WithDirection(TodoComponentWrapper);
