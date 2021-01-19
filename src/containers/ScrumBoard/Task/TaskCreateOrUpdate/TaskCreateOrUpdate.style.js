import styled from 'styled-components';

export const CreateTaskWrapper = styled.div`
  padding: 15px 30px 20px;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  .create-task--form {
    padding-bottom: 81px;
  }
`;

export const FieldWrapper = styled.div`
  margin-top: 30px;
`;

export const BadgeText = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  position: relative;
  &::before {
    content: '';
    display: inline-flex;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 7px;
    background-color: ${props =>
      (props.status === 'error' && '#f5222d') ||
      (props.status === 'success' && '#52c41a') ||
      (props.status === 'warning' && '#faad14') ||
      (props.status === 'processing' && '#1890ff') ||
      (props.status === 'default' && '#d9d9d9')};
  }
`;

export const AttachmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 15px 30px;
  box-sizing: border-box;
  z-index: 1;
`;
