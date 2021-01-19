import React, { Component } from 'react';
import { connect } from 'react-redux';
import noteActions from '../../redux/notes/actions';
import NoteList from './noteList';
import ColorChoser from '../../components/colorChoser';
import Editor from '../../components/uielements/editor';
import IntlMessages from '../../components/utility/intlMessages';

import NoteComponentWrapper, {
  NoteComponent,
  NoteListWrapper,
  NotePad,
  NotePadHeader,
  Icon,
  Button,
} from './noteComponent.style';

const { changeNote, addNote, editNote, deleteNote, changeColor } = noteActions;
class Notes extends Component {
  constructor(props) {
    super(props);
    this.updateNote = this.updateNote.bind(this);
  }
  updateNote(value) {
    const { editNote, selectedId } = this.props;
    editNote(selectedId, value);
  }
  render() {
    const {
      notes,
      selectedId,
      changeNote,
      deleteNote,
      addNote,
      colors,
      seectedColor,
      changeColor,
    } = this.props;
    const selectedNote =
      selectedId !== undefined
        ? notes.filter(note => note.id === selectedId)[0]
        : null;
    return (
      <NoteComponentWrapper>
        <NoteComponent>
          <NoteListWrapper>
            <NoteList
              notes={notes}
              selectedId={selectedId}
              changeNote={changeNote}
              deleteNote={deleteNote}
              colors={colors}
            />
          </NoteListWrapper>
          <NotePad>
            <NotePadHeader>
              {selectedId !== undefined ? (
                <div className="ColorChooseWrapper">
                  <ColorChoser
                    colors={colors}
                    changeColor={changeColor}
                    seectedColor={seectedColor}
                    className="mateOrginalColorWrapper"
                  />{' '}
                  <span>
                    <IntlMessages id="notes.ChoseColor" />
                  </span>
                </div>
              ) : (
                ''
              )}
            </NotePadHeader>
            <div className="noteEditingArea">
              {selectedId !== undefined ? (
                <Editor
                  value={selectedNote.note}
                  onChange={this.updateNote}
                  placeholder="edit Note"
                  className="editor"
                />
              ) : (
                ''
              )}
              {/*{selectedId !== undefined ? <span>{`created at ${selectedNote.createTime}`}</span> : ''}*/}

              <Button color="primary" onClick={addNote}>
                <Icon>add</Icon>
              </Button>
            </div>
          </NotePad>
        </NoteComponent>
      </NoteComponentWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { notes, selectedId, colors, seectedColor } = state.Notes;
  return {
    notes,
    selectedId,
    colors,
    seectedColor,
  };
}
export default connect(
  mapStateToProps,
  {
    addNote,
    editNote,
    deleteNote,
    changeNote,
    changeColor,
  }
)(Notes);
