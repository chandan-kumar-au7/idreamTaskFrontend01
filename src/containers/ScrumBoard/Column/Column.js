import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import Popover from '@material-ui/core/Popover';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import Title from '../../../components/scrumBoard/Title';
import TaskList from '../Task/TaskList/TaskList';
import scrumBoardActions from '../../../redux/scrumBoard/actions';
import drawerActions from '../../../redux/drawer/actions';
import CreateOrUpdate from './CreateOrUpdate';
import { Container, Header, MoreActionsWrapper } from './Column.style';

const Column = ({
  title,
  column,
  tasks,
  index,
  boardId,
  editColumn,
  cancelEditColumn,
  deleteColumnWatcher,
  openDrawer,
  isScrollable,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'rename-column--popover' : undefined;

  return (
    <Draggable draggableId={title} index={index}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {column.editing ? (
            <CreateOrUpdate
              initials={column}
              onCancel={() => cancelEditColumn(column)}
            />
          ) : (
            <Header isDragging={snapshot.isDragging}>
              <Title
                isDragging={snapshot.isDragging}
                {...provided.dragHandleProps}
              >
                {title}
              </Title>
              <IconButton
                aria-label="add"
                size="small"
                onClick={() =>
                  openDrawer({
                    drawerType: 'CREATE_OR_EDIT_TASK',
                    drawerProps: { columnId: column.id },
                  })
                }
              >
                <AddIcon />
              </IconButton>
              <IconButton
                aria-label="more"
                aria-describedby={id}
                size="small"
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
                <MoreActionsWrapper>
                  <Button
                    onClick={() => {
                      editColumn(column);
                      handleClose();
                    }}
                  >
                    Rename Column
                  </Button>
                  <Button
                    onClick={() => {
                      deleteColumnWatcher({
                        column_id: column.id,
                        board_id: boardId,
                      });
                      handleClose();
                    }}
                  >
                    Delete Column
                  </Button>
                </MoreActionsWrapper>
              </Popover>
            </Header>
          )}

          <TaskList
            listId={column.id}
            listType="QUOTE"
            column={column}
            tasks={tasks}
            internalScroll={isScrollable}
          />
        </Container>
      )}
    </Draggable>
  );
};

export default connect(
  null,
  { ...scrumBoardActions, ...drawerActions }
)(Column);
