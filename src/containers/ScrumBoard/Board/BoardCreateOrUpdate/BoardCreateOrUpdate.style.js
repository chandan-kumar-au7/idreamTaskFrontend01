import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Heading = styled.h2`
  font-size: 24px;
  color: #2d3446;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0;
  box-sizing: border-box;
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 35px 0 81px;
  box-sizing: border-box;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  font-size: 20px;
  box-sizing: border-box;
`;
