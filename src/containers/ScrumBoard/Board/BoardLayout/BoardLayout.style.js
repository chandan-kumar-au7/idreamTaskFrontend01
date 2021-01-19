import styled from 'styled-components';

export const DropdownHeader = styled.div`
  font-size: 16px;
  color: #788195;
  font-family: 'Roboto';
  font-weight: 500;
`;

export const ViewAll = styled.div`
  width: 100%;
  a {
    padding: 10px 0;
    box-sizing: border-box;
    font-size: 14px;
    color: #1f92fa;
    font-family: 'Roboto';
    font-weight: 500;
    display: inline-block;
    text-transform: capitalize;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CreateProject = styled.div`
  width: 100%;
  a {
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    font-size: 14px;
    color: #788195;
    font-family: 'Roboto';
    font-weight: 500;
    display: inline-block;
    text-decoration: none;
  }
`;

export const ProjectInfoCard = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
  text-align: left;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #00c6e6;
  margin-right: 8px;
`;

export const InfoWrapper = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #323332;
  margin: 0 0 3px;
  font-weight: 500;
`;

export const Category = styled.p`
  font-size: 13px;
  color: #838b9d;
  font-weight: 400;
  margin: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const HeaderSecondary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 24px;
  margin-top: 5px;
  margin-bottom: 25px;
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
