import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Popover from '@material-ui/core/Popover';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SearchInput from '../../../../components/scrumBoard/SearchInput/SearchInput';
import modalActions from '../../../../redux/modal/actions';
import scrumBoardActions from '../../../../redux/scrumBoard/actions';
import AvatarIcon from '../../../../assets/images/icon/08-icon.svg';
import {
  ProjectInfoCard,
  Avatar,
  Category,
  Title,
  InfoWrapper,
  ViewAll,
  CreateProject,
  Filters,
  Header,
  HeaderSecondary,
  ButtonText,
} from './BoardLayout.style';

const BoardLayout = ({
  children,
  setSearchText,
  boards,
  currentBoard = '',
}) => {
  // for project, label and assignee popover control
  const [anchorEl, setAnchorEl] = useState({
    project: null,
    label: null,
    assignee: null,
  });

  const handlePopoverClick = name => event => {
    setAnchorEl({
      ...anchorEl,
      [name]: event.currentTarget,
    });
  };

  const handlePopoverClose = name => {
    setAnchorEl({
      ...anchorEl,
      [name]: null,
    });
  };

  const projectOpen = Boolean(anchorEl.project);
  const labelOpen = Boolean(anchorEl.label);
  const assigneeOpen = Boolean(anchorEl.assignee);
  const projectID = projectOpen ? 'project-popover' : undefined;
  const labelID = labelOpen ? 'label-popover' : undefined;
  const assigneeID = assigneeOpen ? 'assignee-popover' : undefined;

  // for label dropdown
  const [labelState, setLabelState] = useState({
    success: false,
    error: false,
    processing: false,
    warning: false,
    default: false,
  });

  const handleLabelChange = name => event => {
    setLabelState({ ...labelState, [name]: event.target.checked });
  };

  // for assignee dropdown
  const [assigneeState, setAssigneeState] = useState({
    mark: false,
    bob: false,
    anthony: false,
  });

  const handleAssigneeChange = name => event => {
    setAssigneeState({ ...assigneeState, [name]: event.target.checked });
  };

  return (
    <div
      style={{
        overflow: 'hidden',
      }}
    >
      <Header>
        <ButtonText
          aria-describedby={projectID}
          onClick={handlePopoverClick('project')}
        >
          <ProjectInfoCard>
            <Avatar src={AvatarIcon} />
            <InfoWrapper>
              <Title>{currentBoard.title}</Title>
              <Category>{currentBoard.category}</Category>
            </InfoWrapper>
            <Icon style={{ marginLeft: 16 }}>keyboard_arrow_down</Icon>
          </ProjectInfoCard>
        </ButtonText>

        <Popover
          id={projectID}
          open={projectOpen}
          anchorEl={anchorEl.project}
          onClose={() => handlePopoverClose('project')}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <List
            component="nav"
            aria-labelledby="project-list-menu"
            subheader={
              <ListSubheader component="div" id="project-list-menu">
                Projects
              </ListSubheader>
            }
          >
            {Object.values(boards).map(board => (
              <ListItem button key={board.id}>
                <Link
                  to={`/dashboard/scrum-board/project/${board.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <ProjectInfoCard>
                    <Avatar src={AvatarIcon} />
                    <InfoWrapper>
                      <Title>{board.title}</Title>
                      <Category>{board.category}</Category>
                    </InfoWrapper>
                  </ProjectInfoCard>
                </Link>
              </ListItem>
            ))}
            <ListItem button style={{ backgroundColor: 'white' }}>
              <ViewAll>
                <Link to="/dashboard/scrum-board">View All Projects</Link>
              </ViewAll>
            </ListItem>
            <ListItem
              button
              style={{
                marginBottom: '-8px',
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              }}
            >
              <CreateProject>
                <Link to="/dashboard/scrum-board/new">Create New Project</Link>
              </CreateProject>
            </ListItem>
          </List>
        </Popover>
      </Header>

      <HeaderSecondary>
        <SearchInput onChange={value => setSearchText(value)} />

        <Filters>
          <ButtonText
            aria-describedby={labelID}
            onClick={handlePopoverClick('label')}
          >
            Labels <Icon>keyboard_arrow_down</Icon>
          </ButtonText>
          <Popover
            id={labelID}
            open={labelOpen}
            anchorEl={anchorEl.label}
            onClose={() => handlePopoverClose('label')}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              {Object.entries(labelState).map(item => (
                <ListItem
                  key={`label-key--${item}`}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item[1]}
                        onChange={handleLabelChange(item[0])}
                        value={item[0]}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                      />
                    }
                    label={item[0].charAt(0).toUpperCase() + item[0].slice(1)}
                  />
                </ListItem>
              ))}
            </List>
          </Popover>

          <ButtonText
            aria-describedby={assigneeID}
            onClick={handlePopoverClick('assignee')}
          >
            Assignee <Icon>keyboard_arrow_down</Icon>
          </ButtonText>
          <Popover
            id={assigneeID}
            open={assigneeOpen}
            anchorEl={anchorEl.assignee}
            onClose={() => handlePopoverClose('assignee')}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List>
              {Object.entries(assigneeState).map(item => (
                <ListItem
                  key={`assignee-key--${item}`}
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item[1]}
                        onChange={handleAssigneeChange(item[0])}
                        value={item[0]}
                        inputProps={{
                          'aria-label': 'primary checkbox',
                        }}
                      />
                    }
                    label={item[0].charAt(0).toUpperCase() + item[0].slice(1)}
                  />
                </ListItem>
              ))}
            </List>
          </Popover>
        </Filters>
      </HeaderSecondary>

      <div
        style={{
          padding: '0 24px 15px',
          overflow: 'auto',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default connect(
  null,
  { ...modalActions, ...scrumBoardActions }
)(BoardLayout);
