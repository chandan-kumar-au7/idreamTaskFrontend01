import styled from 'styled-components';

export const ParentContainer = styled.div`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Container = styled.div`
  min-height: 500px;
  min-width: 100%;
  display: inline-flex;
  overflow-x: auto;
`;

export const AddListButton = styled.button`
  width: 400px;
  height: 110px;
  border-radius: 10px;
  font-size: 16px;
  color: #586069;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 8px;
  cursor: pointer;
  border: 1px dashed #959da5;
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  .MuiSvgIcon-root {
    margin-right: 1px;
  }

  &:focus,
  &:hover {
    outline: none;
    text-decoration: underline;
  }
`;
