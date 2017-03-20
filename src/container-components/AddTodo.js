import React, { Component, PropTypes } from 'react';
import { addTodo } from '../actions/actionTypes';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd(newTodoItem) {
      dispatch(addTodo(newTodoItem));
    }
  };
};

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.props.onAdd(
            this.ref.text.value
          );
        }}>
          <input ref='text' placeholder='new todo item' />
        </form>
      </div>
    );
  }
}

export default connect(mapDispatchToProps)(AddTodo);

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
