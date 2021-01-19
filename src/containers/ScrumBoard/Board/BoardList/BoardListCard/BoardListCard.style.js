import styled from 'styled-components';

export const ProjectInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  background-color: #00c6e6;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const InfoWrapper = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #323332;
  font-weight: 500;
  margin: 0 0 3px;
`;

export const CreatedAt = styled.p`
  font-size: 13px;
  color: #838b9d;
  margin: 0;
`;

export const MoreActionWrapper = styled.div`
  .MuiList-root {
    .MuiButtonBase-root {
      font-size: 14px;
      font-weight: 500;
      text-transform: capitalize;
    }
  }
`;

export const IconText = styled.div`
  display: flex;
  align-items: center;
  color: #838b9d;
  font-size: 14px;
  font-weight: 500;
  .material-icons,
  > svg {
    margin-right: 5px;
    font-size: 20px;
  }
`;
