import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputSearch from '../../components/uielements/inputSearch';
// import IntlMessages from '../../components/utility/intlMessages';
import LayoutWrapper from '../../components/utility/layoutWrapper';
// import PageHeader from '../../components/utility/pageHeader';
import Box from '../../components/utility/papersheet';
import { Row, FullColumn } from '../../components/utility/rowColumn';
import todoAction from '../../redux/todos/actions.js';
import TodoList from './todoList';
import TodoComponentWrapper from './todoComponent.style';

const {
  addTodo,
  edittodo,
  deleteTodo,
  allCompleted,
  deleteCompleted,
} = todoAction;

class ToDo extends Component {
  submitHandle = event => {
    event.preventDefault();
  };
  render() {
    const {
      todos,
      colors,
      addTodo,
      edittodo,
      deleteTodo,
      allCompleted,
      deleteCompleted,
    } = this.props;

    return (
      <LayoutWrapper>
        <TodoComponentWrapper className="mateTodoComponent">
          <Row>
            <FullColumn>
              <Box>
                <h4>Welcome to material Todos</h4>

                <InputSearch
                  placeholder="Add New Todo"
                  className="todoInput"
                  clearOnSearch
                  onSearch={newTodo => {
                    addTodo(newTodo);
                    //event.preventDefault();
                  }}
                />
              </Box>
            </FullColumn>
            <FullColumn>
              <Box>
                <h3>Todo List</h3>
                <TodoList
                  todos={todos}
                  colors={colors}
                  deleteTodo={deleteTodo}
                  edittodo={edittodo}
                  allCompleted={allCompleted}
                  deleteCompleted={deleteCompleted}
                />
              </Box>
            </FullColumn>
          </Row>
        </TodoComponentWrapper>
      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { todos, colors } = state.Todos;
  return {
    todos,
    colors,
  };
}
export default connect(mapStateToProps, {
  addTodo,
  edittodo,
  deleteTodo,
  allCompleted,
  deleteCompleted,
})(ToDo);
