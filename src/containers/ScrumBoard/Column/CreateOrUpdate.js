import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Formik } from 'formik';
import uuidV4 from 'uuid/v4';
import * as Yup from 'yup';
import RenderColumnForm from '../../../components/scrumBoard/RenderColumnForm/RenderColumnForm';
import { dateFormat } from '../../../components/scrumBoard/FieldFormats';
import scrumBoardActions from '../../../redux/scrumBoard/actions';

const initialValues = {
  id: '',
  title: '',
  board_id: '',
  task_orders: [],
  editing: false,
  created_at: moment()
    .format(dateFormat)
    .toString(),
  updated_at: moment().format(dateFormat),
};
const validationSchema = Yup.object({
  title: Yup.string('Enter a title').required('Title is required'),
});
const CreateOrUpdate = props => {
  const initials = {
    ...initialValues,
    ...props.initials,
    updated_at: moment()
      .format(dateFormat)
      .toString(),
  };

  const handleSubmit = values => {
    if (!values.editing) {
      values.id = uuidV4();
      values.board_id = props.boardId;
      values.editing = false;
    }
    props.createOrUpdateColumnWatcher({
      column: values,
      board_id: props.boardId,
    });
    if (!values.editing) {
      props.onCancel();
    }
  };

  return (
    <Formik
      initialValues={initials}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      render={formikProps => (
        <RenderColumnForm
          {...formikProps}
          onCancel={props.onCancel}
          initials={props.initials}
        />
      )}
    />
  );
};
export default connect(
  null,
  {
    ...scrumBoardActions,
  }
)(CreateOrUpdate);
