import notes from '../../containers/Notes/fakeData';
import actions from './actions';

const colors = ['#3d5afe', '#ff9100', '#651fff', '#64dd17', '#ffd600'];
const initState = {
  notes,
  colors,
  selectedId: notes[0].id,
  seectedColor: notes[0].color
};

export default function noteReducer(state = initState, action) {
  switch (action.type) {
    case actions.CHANGE_NOTE:
      return {
        ...state,
        selectedId: action.selectedId,
        seectedColor: action.seectedColor
      };
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: action.notes,
        selectedId: action.selectedId
      };
    case actions.EDIT_NOTE:
      return { ...state, notes: action.notes };
    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: action.notes,
        selectedId: action.selectedId
      };
    case actions.CHANGE_COLOR:
      return {
        ...state,
        notes: action.notes,
        seectedColor: action.seectedColor
      };
    default:
      return state;
  }
}
