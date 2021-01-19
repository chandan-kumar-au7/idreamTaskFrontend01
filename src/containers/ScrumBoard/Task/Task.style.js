import styled from 'styled-components';
import { colors } from '../../../settings/constants';

export const getBackgroundColor = (isDragging, isGroupedOver) => {
  if (isDragging) {
    return 'colors.green';
  }
  if (isGroupedOver) {
    return colors.grey.N30;
  }
  return colors.white;
};

export const Container = styled.span`
  border-radius: 10px;
  background-color: ${props =>
    getBackgroundColor(props.isDragging, props.isGroupedOver)};
  box-shadow: ${({ isDragging }) =>
    isDragging ? `2px 2px 1px ${colors.shadow}` : 'none'};
  min-height: 40px;
  margin-top: 20px;
  user-select: none;
  color: ${colors.black};

  &:hover,
  &:active {
    color: ${colors.black};
    text-decoration: none;
  }

  &:focus {
    outline: 2px solid ${colors.purple};
    box-shadow: none;
  }
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  flex-grow: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`;

export const HrBar = styled.div`
  height: 1px;
  background-color: #f3f5fd;
`;

export const AttachmentWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskName = styled.div`
  font-size: 20px;
  color: #323332;
  font-family: 'Roboto';
  font-weight: 500;
  margin-bottom: 30px;
`;

export const TaskDescription = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #797979;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const CardDetailsWrapper = styled.div`
  padding: 15px 30px 20px;
`;

export const ClockIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  vertical-align: middle;
`;

// deign for task drawer
export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px 0 25px;
  background-color: #ffffff;
  border-bottom: 1px solid #e9e9e9;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  > svg {
    margin-right: 15px;
    margin-left: -5px;
  }
`;

export const IconButtons = styled.div`
  > svg {
    margin-left: 15px;
    margin-right: 0;
    cursor: pointer;
  }
`;

export const PopoverContent = styled.div`
  padding: 20px;
  p {
    margin-top: 0;
  }
  button {
    &:last-child {
      margin-left: 15px;
    }
  }
`;

export const FieldWrapper = styled.div`
  margin-top: 20px;
`;

export const AvatarsWrapper = styled.div`
  display: flex;
  align-items: center;
  .MuiAvatar-root {
    border: 2px solid #fff;
    margin-left: -10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;
