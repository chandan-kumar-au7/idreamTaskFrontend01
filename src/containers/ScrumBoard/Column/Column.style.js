import styled from 'styled-components';
import { grid } from '../../../settings/constants';

export const Container = styled.div`
  box-sizing: border-box;
  margin: ${grid}px;
  display: flex;
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  flex-direction: column;
  background-color: #eff1f3;
  border: 1px solid #e1e4e8;
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  .render-form-wrapper {
    form {
      padding: 20px;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  button {
    margin-left: 10px;
  }
`;

export const MoreActionsWrapper = styled.div`
  cursor: pointer;
  padding: 5px 0;
  button {
    width: 100%;
    display: flex;
    text-transform: capitalize;
    font-weight: 500;
    padding: 5px 16px;
    justify-content: flex-start;
    border-radius: 0;
  }
`;
