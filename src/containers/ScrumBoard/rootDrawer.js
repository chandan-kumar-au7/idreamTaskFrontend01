import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import CreateTaskForm from './Task/TaskCreateOrUpdate/TaskCreateOrUpdate';
import TaskDetails from './Task/TaskDetails/TaskDetials';
import drawerActions from '../../redux/drawer/actions';

const DrawerWidth = styled.div`
  width: 700px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const DRAWER_COMPONENTS = {
  CREATE_OR_EDIT_TASK: CreateTaskForm,
  CARD_DETAILS: TaskDetails,
};

const DrawerRoot = ({
  drawerType,
  drawerProps,
  drawerVisibility,
  closeDrawer,
  openDrawer,
}) => {
  if (!drawerType) {
    return null;
  }

  const SpecificDrawer = DRAWER_COMPONENTS[drawerType];
  return (
    <Drawer anchor="right" onClose={closeDrawer} open={drawerVisibility}>
      <DrawerWidth>
        <SpecificDrawer
          {...drawerProps}
          openDrawer={openDrawer}
          closeDrawer={closeDrawer}
        />
      </DrawerWidth>
    </Drawer>
  );
};

export default connect(
  state => state.drawer,
  { ...drawerActions }
)(DrawerRoot);
