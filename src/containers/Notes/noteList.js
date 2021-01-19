import React, { Component } from 'react';
import { timeDifference } from '../../helpers/utility';
import Scrollbars from '../../components/utility/customScrollBar';
import NoteListSidebar, { InputSearch, MoreIcon, Icon } from './noteList.style';

function filterNotes(notes, search) {
  search = search.toUpperCase();
  if (search) {
    return notes.filter(note => note.note.toUpperCase().includes(search));
  }
  return notes;
}
export default class noteList extends Component {
  state = {
    search: '',
  };
  singleNote = note => {
    const { selectedId, deleteNote, changeNote, colors } = this.props;

    const activeClass = selectedId === note.id ? 'active' : '';
    const onChange = () => changeNote(note.id);
    const onDelete = () => deleteNote(note.id);
    return (
      <div className={`list ${activeClass}`} key={note.id}>
        <div
          className="noteBGColor"
          style={{ width: '7px', background: colors[note.color] }}
        />
        {/* <DragIcon>dehaze</DragIcon> */}
        <div className="noteText" onClick={onChange}>
          <div dangerouslySetInnerHTML={{ __html: note.note || '' }} />
          <span className="noteCreatedDate">
            {timeDifference(note.createTime)}
          </span>
        </div>

        <MoreIcon color="primary" onClick={onDelete}>
          <Icon>clear</Icon>
        </MoreIcon>
      </div>
    );
  };
  onChange = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    const notes = filterNotes(this.props.notes, search);
    return (
      <NoteListSidebar>
        <InputSearch
          alwaysDefaultValue
          defaultValue={search}
          placeholder="Search Notes"
          onChange={this.onChange}
          className="mateNoteSearch1"
        />
        <div className="noteList">
          <Scrollbars>
            {notes && notes.length > 0 ? (
              notes.map(note => this.singleNote(note))
            ) : (
              <span className="notlistNotice">No note found</span>
            )}
          </Scrollbars>
        </div>
      </NoteListSidebar>
    );
  }
}
