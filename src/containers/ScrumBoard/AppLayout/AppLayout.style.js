import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 19px;
  color: #788195;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0;
`;

export const HeaderSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 0 30px;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -8px;
  button {
    &:first-child {
      margin-right: 15px;
    }
  }
`;

export const ButtonText = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  .material-icons,
  > svg {
    margin-left: 5px;
  }
`;
