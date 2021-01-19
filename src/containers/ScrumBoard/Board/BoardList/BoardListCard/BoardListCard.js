import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import LinearProgress from '@material-ui/core/LinearProgress';
import Popover from '@material-ui/core/Popover';
import Icon from '@material-ui/core/Icon';
import ComputerIcon from '@material-ui/icons/Computer';
import BlockIcon from '@material-ui/icons/Block';
import PublicIcon from '@material-ui/icons/Public';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {
  Avatar,
  InfoWrapper,
  Title,
  IconText,
  CreatedAt,
  ProjectInfo,
  MoreActionWrapper,
} from './BoardListCard.style';

import AvatarIcon from '../../../../../assets/images/icon/08-icon.svg';

export default function BoardListCard({ item, onDelete, onEdit }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <TableRow hover>
      <TableCell>
        <Link
          to={`/dashboard/scrum-board/project/${item.id}`}
          style={{ textDecoration: 'none' }}
        >
          <ProjectInfo>
            <Avatar src={AvatarIcon} alt={item.name} />
            <InfoWrapper>
              <Title>{item.title}</Title>
              <CreatedAt>
                {moment(item.created_at).format('MMM Do YY')}
              </CreatedAt>
            </InfoWrapper>
          </ProjectInfo>
        </Link>
      </TableCell>
      <TableCell>
        <div style={{ width: 180 }}>
          <LinearProgress
            color="primary"
            variant="determinate"
            value={parseInt(item.progress)}
          />
        </div>
      </TableCell>
      <TableCell>
        <IconText>
          <ComputerIcon />
          {item.category}
        </IconText>
      </TableCell>
      <TableCell>
        <IconText>
          <Icon
            style={{
              color: '#ED8A19',
            }}
          >
            star
          </Icon>
          Favorites
        </IconText>
      </TableCell>
      <TableCell>
        {item.open_to_company ? (
          <IconText>
            <PublicIcon />
            Public
          </IconText>
        ) : (
          <IconText>
            <BlockIcon />
            Private
          </IconText>
        )}
      </TableCell>
      <TableCell>
        <PersonAddIcon style={{ fill: 'rgb(120, 129, 149)' }} />
      </TableCell>
      <TableCell>
        <IconButton
          aria-describedby={id}
          size="small"
          aria-label="more"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MoreActionWrapper>
            <List aria-label="more actions">
              <ListItem button onClick={onEdit}>
                Edit Board
              </ListItem>
              <ListItem button onClick={onDelete}>
                Delete Board
              </ListItem>
            </List>
          </MoreActionWrapper>
        </Popover>
      </TableCell>
    </TableRow>
  );
}
