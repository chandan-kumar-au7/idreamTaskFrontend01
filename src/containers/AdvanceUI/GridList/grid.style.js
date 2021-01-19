import styled from "styled-components";
import { palette } from "styled-theme";
import Icons from "../../../components/uielements/icon/index.js";
import GridLists from "../../../components/uielements/gridlist";

const Icon = styled(Icons)``;

const Root = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background: #fff;
`;

const GridList = styled(GridLists)`
  width: 500px;
  height: 450px;

  ${Icon} {
    color: ${palette("primary", 2)};
  }
`;

const GridListSingle = styled(GridLists)`
  flex-wrap: nowrap;
  transform: translateZ(0);

  ${Icon} {
    color: ${palette("primary", 2)};
  }

  .titlebar {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 70%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background: #ffffff;
`;

export { Root, Container, GridList, GridListSingle, Icon };
