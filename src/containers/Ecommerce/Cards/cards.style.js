import styled from 'styled-components';
import { palette } from 'styled-theme';
import Papersheet from '../../../components/utility/papersheet';
import WithDirection from '../../../settings/withDirection';
import Icons from '../../../components/uielements/icon';
import Buttons, { Fab } from '../../../components/uielements/button';
import Iconbuttons from '../../../components/uielements/iconbutton';
import Toolbars from '../../../components/uielements/toolbar';
import Tables from '../../../components/uielements/table';

const RestoreBtn = styled(Buttons)``;

const AddButton = styled(Fab)`
  background-color: ${palette('indigo', 5)};
  position: absolute;
  bottom: -28px;
  right: 30px;

  > span {
    &:last-child {
      span {
        background-color: #ffffff;
      }
    }
  }

  &:hover {
    background-color: ${palette('indigo', 7)};
  }
`;

const Icon = styled(Icons)`
  color: #ffffff;
`;

const DeleteIcon = styled(Icons)`
  font-size: 19px;
  color: ${palette('grey', 6)};
  transition: all 0.25s;

  &:hover {
    color: ${palette('red', 5)};
  }
`;

const Iconbutton = styled(Iconbuttons)`
  &:hover {
    ${DeleteIcon} {
      color: ${palette('pink', 5)};
    }
  }
`;

const Toolbar = styled(Toolbars)`
  min-height: 0;
  min-width: 100%;
  background-color: ${palette('grey', 2)};
  box-sizing: border-box;

  .toolbarContent {
    display: flex;
    width: 100%;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
  }
`;

const CardWrapper = styled(Papersheet)`
  width: auto;
  position: relative;
`;

const Table = styled(Tables)`
  th {
    font-size: 13px;
    color: ${palette('grey', 8)};
    font-weight: 500;
  }

  tr {
    td {
      color: ${palette('grey', 6)};
      &:last-child {
        padding: 4px 20px;
      }
    }
    ${'' /* &:hover {
      ${Iconbutton} {
        opacity: 1;
      }
    } */};
  }
`;

const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export {
  Table,
  Icon,
  AddButton,
  RestoreBtn,
  DeleteIcon,
  Iconbutton,
  Toolbar,
  ActionButtons,
};
export default WithDirection(CardWrapper);
