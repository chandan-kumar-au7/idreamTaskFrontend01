import React, { Component } from 'react';
import Button, { Fab } from '../../components/uielements/button';
import { timeDifference } from '../../helpers/utility';
import { FormControlLabel } from '../../components/uielements/form';
import Checkbox from '../../components/uielements/checkbox';
import RadioButton, { RadioGroup } from '../../components/uielements/radio';
import {
  EditableComponent,
  ColorChoser,
  notification,
} from '../../components/';
import Icon from '../../components/uielements/icon/index.js';

function filterTodos(todos, search) {
  const selectedTodos =
    search === 'All'
      ? todos
      : todos.filter(todo => todo.completed === (search === 'Completed'));
  let completed = 0;
  selectedTodos.forEach(todo => {
    if (todo.completed) {
      completed += 1;
    }
  });
  return { selectedTodos, completed };
}

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.singleTodo = this.singleTodo.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      search: 'All',
    };
  }
  singleTodo(todo) {
    const { deleteTodo, colors } = this.props;
    const onDelete = () => deleteTodo(todo.id);
    const updateTodo = (key, value) => {
      todo[key] = value;
      this.props.edittodo(todo);
    };
    return (
      <div className="matTodoList" key={todo.id}>
        <ColorChoser
          colors={colors}
          changeColor={value => updateTodo('color', value)}
          seectedColor={todo.color}
        />
        <FormControlLabel
          control={
            <Checkbox
              className="matTodoCheck"
              checked={todo.completed}
              onChange={event => updateTodo('completed', !todo.completed)}
            />
          }
          label=""
        />
        <div className="matTodoContentWrapper">
          <EditableComponent
            value={todo.todo}
            itemKey="todo"
            onChange={updateTodo}
            className="matTodoEditorBox"
            color="primary"
          />

          <span className="matTodoDate">{timeDifference(todo.createTime)}</span>
          <Fab
            mini
            color="primary"
            aria-label="edit"
            className="matTodoDelete"
            icon="close"
            type="button"
            onClick={onDelete}
          >
            <Icon>clear</Icon>
          </Fab>
        </div>
      </div>
    );
  }
  onChange(event) {
    this.setState({ search: event.target.value });
  }
  render() {
    const { search } = this.state;
    const { selectedTodos, completed } = filterTodos(this.props.todos, search);
    return (
      <div className="matTodoContent">
        <div className="matTodoStatusTab">
          <RadioGroup
            value={this.state.search}
            onChange={this.onChange}
            className="matTodoStatus"
          >
            <FormControlLabel
              value="All"
              control={<RadioButton />}
              label="All"
            />
            <FormControlLabel
              value="Uncompleted"
              control={<RadioButton />}
              label="Uncompleted"
            />
            <FormControlLabel
              value="Completed"
              control={<RadioButton />}
              label="Completed"
            />
          </RadioGroup>
        </div>
        <div className="matTodoListWrapper">
          {selectedTodos.length > 0 ? (
            selectedTodos.map(note => this.singleTodo(note))
          ) : (
            <h3 className="matNoTodoFound">No todo found</h3>
          )}
        </div>
        <div className="matTodoFooter">
          <FormControlLabel
            control={
              <Checkbox
                className="matTodoCheckAll"
                checked={completed === selectedTodos.length}
                disabled={completed === selectedTodos.length}
                onChange={event => {
                  notification('success', 'All Todos are Completed!!!', '');
                  this.props.allCompleted();
                }}
              />
            }
            label="Mark all as completed"
          />
          {selectedTodos.length > 0 && completed === selectedTodos.length ? (
            <Button
              type="button"
              className="matDeleteAll"
              onClick={event => {
                notification('success', 'All Completed Todos are Deleted', '');
                this.props.deleteCompleted();
              }}
            >
              {`Delete Completed (${completed})`}
            </Button>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
