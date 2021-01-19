import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import moment from 'moment';
import uuidV4 from 'uuid/v4';
import * as Yup from 'yup';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import RenderBoardForm from '../../../../components/scrumBoard/RenderBoardForm/RenderBoardForm';
import { dateFormat } from '../../../../components/scrumBoard/FieldFormats';
import scrumBoardActions from '../../../../redux/scrumBoard/actions';

import {
  Wrapper,
  FormWrapper,
  Heading,
  TopBar,
} from './BoardCreateOrUpdate.style';

const initialValues = {
  id: '',
  column_orders: [],
  title: '',
  category: '',
  progress: '',
  thumb: '',
  open_to_company: false,
  open_to_members: true,
  editing: false,
  created_at: moment()
    .format(dateFormat)
    .toString(),
  updated_at: moment().format(dateFormat),
  selectAssignees: ['Mark', 'Bob', 'Anthony'],
};

const validationSchema = Yup.object({
  title: Yup.string('Enter a title').required('Title is required'),
});

const CreateOrUpdateBoard = props => {
  const initials = {
    ...initialValues,
    ...props.board,
    updated_at: moment()
      .format(dateFormat)
      .toString(),
  };

  const handleSubmit = values => {
    if (!values.editing) {
      values.id = uuidV4();
    }
    props.createOrUpdateBoardWatcher(values);
    props.history.push(`/dashboard/scrum-board/project/${values.id}`);
  };

  return (
    <Wrapper>
      <TopBar>
        <IconButton onClick={() => window.history.back()}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton
          onClick={() => props.history.push(`/dashboard/scrum-board`)}
        >
          <CloseIcon />
        </IconButton>
      </TopBar>
      <FormWrapper>
        <Heading>Create New Project</Heading>
        <Formik
          initialValues={initials}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          render={props => <RenderBoardForm {...props} />}
        />
      </FormWrapper>
    </Wrapper>
  );
};

export default connect(
  (state, ownProps) => ({
    board: state.scrumBoard.boards[ownProps.match.params.id],
  }),
  {
    ...scrumBoardActions,
  }
)(CreateOrUpdateBoard);
