import React, { Fragment } from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DeleteIcon from '@material-ui/icons/Delete';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import {
  CardHeader,
  DateWrapper,
  CardTitle,
  LabelIndicator,
  CardBody,
  CardFooter,
  FooterLeft,
  AvatarsWrapper,
} from './TaskCard.style';

const TaskCard = ({ task, showDrawer, onDelete }) => {
  return (
    <Paper style={{ width: 'calc(100% - 8px)', marginLeft: '4px' }}>
      <CardHeader>
        <DateWrapper>
          <AccessAlarmIcon />
          {moment(task.created_at).format('MMM Do YY')}
        </DateWrapper>
        <IconButton onClick={onDelete} aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
      </CardHeader>

      <CardBody onClick={showDrawer}>
        <CardTitle>{task.title}</CardTitle>
        {task.labels.map(label => (
          <LabelIndicator key={label} status={label} />
        ))}
      </CardBody>

      <CardFooter>
        <FooterLeft>
          <Badge badgeContent={4} color="primary">
            <AttachFileOutlinedIcon />
          </Badge>
          <Badge badgeContent={7} color="primary">
            <SmsOutlinedIcon />
          </Badge>
        </FooterLeft>

        <AvatarsWrapper>
          {task.assignees.map(assignee => (
            <Fragment key={assignee}>
              <Tooltip title="Please Implements Your Own Assigne Methods">
                <Avatar src={'https://randomuser.me/api/portraits/men/1.jpg'} />
              </Tooltip>
            </Fragment>
          ))}
        </AvatarsWrapper>
      </CardFooter>
    </Paper>
  );
};
export default TaskCard;
