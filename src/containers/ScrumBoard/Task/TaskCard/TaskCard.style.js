import styled from 'styled-components';

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 10px;
  font-size: 14px;
  color: rgb(120, 129, 149);
  font-weight: 500;
  .MuiSvgIcon-root {
    font-size: 20px;
    fill: rgb(120, 129, 149);
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  .MuiSvgIcon-root {
    margin-right: 5px;
  }
`;

export const CardTitle = styled.h4`
  font-size: 16px;
  color: #2d3446;
  margin: 0 0 10px;
  font-weight: 500;
`;

export const CardBody = styled.div`
  padding: 10px 20px 27px;
  cursor: pointer;
`;

export const LabelIndicator = styled.span`
  display: inline-block;
  width: 25px;
  height: 5px;
  margin: 0 8px 0 0;
  background-color: ${props =>
    (props.status === 'error' && '#f5222d') ||
    (props.status === 'success' && '#52c41a') ||
    (props.status === 'warning' && '#faad14') ||
    (props.status === 'processing' && '#1890ff') ||
    (props.status === 'default' && '#d9d9d9')};
`;

export const CardFooter = styled.div`
  padding: 15px 20px 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #efefef;
  font-size: 14px;
  color: rgb(120, 129, 149);
  font-weight: 500;
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  .MuiBadge-root {
    margin-right: 18px;
  }
`;

export const AvatarsWrapper = styled.div`
  display: flex;
  align-items: center;
  .MuiAvatar-root {
    width: 35px;
    height: 35px;
    border: 2px solid #fff;
    margin-left: -10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;
