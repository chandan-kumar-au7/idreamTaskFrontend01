import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import CreateOrUpdateColumn from './Column/CreateOrUpdate';
import modalActions from '../../redux/modal/actions';

const MODAL_COMPONENTS = {
  CREATE_COLUMN: CreateOrUpdateColumn,
};

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'none',
    },
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    border: 0,
    '&:focus': {
      outline: 'none',
    },
  },
}));

const ModalRoot = ({ modalType, modalProps, modalVisibility, closeModal }) => {
  const classes = useStyles();
  if (!modalType) {
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[modalType];

  return (
    <Modal
      className={classes.modal}
      open={modalVisibility}
      onClose={() => closeModal()}
    >
      <div className={classes.paper}>
        <SpecificModal {...modalProps} onCancel={() => closeModal()} />
      </div>
    </Modal>
  );
};

export default connect(
  state => state.modal,
  { ...modalActions }
)(ModalRoot);
