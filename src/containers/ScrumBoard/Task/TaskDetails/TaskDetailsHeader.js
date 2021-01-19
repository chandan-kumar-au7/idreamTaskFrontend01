import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Popover from '@material-ui/core/Popover';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ShareIcon from '@material-ui/icons/Share';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  TaskHeader,
  ActionButtons,
  IconButtons,
  PopoverContent,
} from '../Task.style';

export default function CardDetailsHeader({
  onIconClick,
  onBtnClick,
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
        <ArrowForwardIcon onClick={onIconClick} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={onBtnClick}
        >
          Edit Task
        </Button>
        {onEditCancel && (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={onEditCancel}
          >
            Cancel
          </Button>
        )}
      </ActionButtons>
      <IconButtons>
        <Tooltip title="Please Implements Your Own Share Methods">
          <ShareIcon />
        </Tooltip>
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
            <Button onClick={handleClose} color="secondary" variant="contained">
              No
            </Button>
          </PopoverContent>
        </Popover>
      </IconButtons>
    </TaskHeader>
  );
}
