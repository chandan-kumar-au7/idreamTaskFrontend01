import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import Comments from '../../../../components/scrumBoard/Comments/Comments';
import HeadingWithIcon from '../../../../components/scrumBoard/HeadingWithIcon/HeadingWithIcon';
import { IconSvg } from '../../../../components/scrumBoard/IconSvg/IconSvg';
import CardDetailsHeader from './TaskDetailsHeader';
import {
  CardDetailsWrapper,
  AttachmentWrapper,
  TaskName,
  TaskDescription,
  ClockIcon,
  AvatarsWrapper,
  FieldWrapper,
} from '../Task.style';
// image icon
import PlusIcon from '../../../../assets/images/icon/24.svg';
import TitleIcon from '../../../../assets/images/icon/05-icon.svg';
import DescriptionIcon from '../../../../assets/images/icon/06-icon.svg';
import AttachmentIcon from '../../../../assets/images/icon/01-icon.svg';
import Clock from '../../../../assets/images/icon/17.svg';
import scrumBoardActions from '../../../../redux/scrumBoard/actions';

const TaskDetials = ({
  task,
  deleteTaskWatcher,
  editTask,
  closeDrawer,
  openDrawer,
  columnId,
}) => {
  return (
    <CardDetailsWrapper>
      <CardDetailsHeader
        onBtnClick={() => {
          editTask(task);
          openDrawer({
            drawerType: 'CREATE_OR_EDIT_TASK',
            drawerProps: {
              initials: { ...task, editing: true },
              columnId: columnId,
            },
          });
        }}
        onIconClick={closeDrawer}
        onDelete={() => {
          deleteTaskWatcher({
            task_id: task.id,
            column_id: columnId,
          });
          closeDrawer();
        }}
      />

      <FieldWrapper>
        <HeadingWithIcon heading="Task Name" iconSrc={TitleIcon} />
        <TaskName>{task.title}</TaskName>
      </FieldWrapper>

      <FieldWrapper>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <HeadingWithIcon heading="Assigned Members" />
            <AvatarsWrapper>
              {task.assignees.map(assignee => (
                <Fragment key={assignee}>
                  {!assignee ? (
                    <IconSvg src={PlusIcon} />
                  ) : (
                    <Avatar
                      src={'https://randomuser.me/api/portraits/men/1.jpg'}
                    />
                  )}
                </Fragment>
              ))}
            </AvatarsWrapper>
          </Grid>
          <Grid item xs={4}>
            <HeadingWithIcon heading="Labels" />
            <p>
              {task.labels.map(label => (
                <Tooltip
                  title={`${label[0].toUpperCase()}${label.slice(1)}`}
                  key={label}
                >
                  <Badge status={label} />
                </Tooltip>
              ))}
            </p>
          </Grid>
          <Grid item xs={4}>
            <HeadingWithIcon heading="Due Date" />
            <ClockIcon src={Clock} />
            {moment(task.due_date).format('ddd d, YYYY')}
          </Grid>
        </Grid>
      </FieldWrapper>

      <FieldWrapper style={{ marginTop: '40px' }}>
        <HeadingWithIcon heading="Description" iconSrc={DescriptionIcon} />
        <TaskDescription>{task.description}</TaskDescription>
      </FieldWrapper>

      <AttachmentWrapper>
        <HeadingWithIcon heading="Attachments" iconSrc={AttachmentIcon} />
      </AttachmentWrapper>

      <Comments />
    </CardDetailsWrapper>
  );
};
export default connect(
  null,
  { ...scrumBoardActions }
)(TaskDetials);
