import styled from 'styled-components';
import { palette } from 'styled-theme';
import Tables from '../../components/uielements/table';
import Papersheet from '../../components/utility/papersheet';
import WithDirection from '../../settings/withDirection';
import Icons from '../../components/uielements/icon';
import Buttons from '../../components/uielements/button';
import Iconbuttons from '../../components/uielements/iconbutton';
import Toolbars from '../../components/uielements/toolbar';

const RestoreBtn = styled(Buttons)``;
const Iconbutton = styled(Iconbuttons)`
  ${'' /* opacity: 0;
  transition: all 0.35s; */};
`;

const AddButton = styled(Buttons)`
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

const Toolbar = styled(Toolbars)`
  min-height: 0;
  ${'' /* min-width: 668px; */} min-width: 100%;
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
  overflow: inherit;
  position: relative;
`;

const Table = styled(Tables)`
  th {
    font-size: 13px;
    color: ${palette('grey', 8)};
    font-weight: 500;
    white-space: nowrap;

    &:last-child {
      padding: 4px 20px;
      width: 70px;
    }
    &:first-child {
      padding: 4px 20px;
      width: 70px;
    }
  }

  tr {
    td {
      color: ${palette('grey', 6)};
      padding-right: 24px;
      white-space: nowrap;
      &:last-child {
        padding: 4px 20px;
        width: 70px;
      }
      &:first-child {
        padding: 4px 20px;
        width: 70px;
      }
      a {
        text-decoration: none;
      }
      ${'' /* .mateInvoiceView,
      .mateInvoiceDlt {
        opacity: 0;
        @media (max-width: 767px) {
          opacity: 1;
        }
      } */};
    }
    ${'' /* &:hover {
      .mateInvoiceView,
      .mateInvoiceDlt {
        opacity: 1;
      }
    } */};
  }
`;

const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  ${'' /* margin-top: 20px; */} position: relative;

  .mateAddInvoiceBtn {
    position: absolute;
    right: 0;
    bottom: -68px;
  }
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
