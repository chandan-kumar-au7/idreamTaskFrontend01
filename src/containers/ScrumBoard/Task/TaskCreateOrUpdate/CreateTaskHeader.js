import React, { useState } from 'react';
import Popover from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  TaskHeader,
  ActionButtons,
  IconButtons,
  PopoverContent,
} from '../Task.style';

export default function CreateTaskHeader({
  values,
  onCancel,
  onDelete,
  onEditCancel,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <TaskHeader>
      <ActionButtons>
        <ArrowForwardIcon onClick={onCancel} style={{ cursor: 'pointer' }} />
        <Button type="submit" variant="contained" color="primary">
          {values && !values.editing ? 'Create Task' : 'Update Task'}
        </Button>
        {values && values.editing && onEditCancel && (
          <Button onClick={onEditCancel} style={{ marginLeft: 16 }}>
            Cancel
          </Button>
        )}
      </ActionButtons>
      <IconButtons>
        <Tooltip title="Please Implements Your Own Share Methods">
          <ShareIcon />
        </Tooltip>
        {values && values.editing && (
          <>
            <DeleteIcon onClick={handleClick} />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <PopoverContent>
                <p>Are you sure delete this task?</p>
                <Button onClick={onDelete} color="primary" variant="contained">
                  Yes
                </Button>
                <Button
                  onClick={handleClose}
                  color="secondary"
                  variant="contained"
                >
                  No
                </Button>
              </PopoverContent>
            </Popover>
          </>
        )}
      </IconButtons>
    </TaskHeader>
  );
}
