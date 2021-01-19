import styled from 'styled-components';
import Papersheet from '../../../components/utility/papersheet';

const Root = styled(Papersheet)`
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;

  > div {
    padding: 10px 20px 20px;

    th,
    td {
      white-space: nowrap;
    }

    tbody {
      tr {
        &:last-child {
          td {
            border-bottom: 0;
          }
        }
      }
    }
  }
`;

export { Root };
