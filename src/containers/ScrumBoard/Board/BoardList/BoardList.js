import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import scrumBoardActions from '../../../../redux/scrumBoard/actions';
import NoBoardFounds from '../BoardNotFound/BoardNotFound';
import BoardListCard from './BoardListCard/BoardListCard';
import AppLayout from '../../AppLayout/AppLayout';
import { filterProjects } from '../../../../helpers/filterProjects';

function BoardLists({
  boards,
  deleteBoardWatcher,
  editBoard,
  history,
  match,
  boardsRenderWatcher,
}) {
  useEffect(() => {
    boardsRenderWatcher();
  }, [boardsRenderWatcher]);

  const handleEdit = board => {
    editBoard(board);
    history.push(`/dashboard/scrum-board/${board.id}`);
  };

  return (
    <AppLayout history={history} match={match}>
      <Paper>
        {!isEmpty(boards) ? (
          <Table>
            <TableBody>
              {Object.values(boards).map(board => (
                <BoardListCard
                  key={board.id}
                  item={board}
                  onDelete={() => deleteBoardWatcher(board.id)}
                  onEdit={() => handleEdit(board)}
                />
              ))}
            </TableBody>
          </Table>
        ) : (
          <NoBoardFounds history={history} match={match} />
        )}
      </Paper>
    </AppLayout>
  );
}

export default connect(
  state => ({
    boards: filterProjects(
      state.scrumBoard.boards,
      state.scrumBoard.searchText
    ),
  }),
  { ...scrumBoardActions }
)(BoardLists);
