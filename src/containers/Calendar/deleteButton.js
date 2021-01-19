import React, { Component } from "react";
import notification from "../../components/notification";
import { DeleteButton, Icon } from "./calendar.style";

export default class DeleteButtons extends Component {
  render() {
    const { handleDelete } = this.props;

    return (
      <DeleteButton
        onClick={() => {
          notification("error", "Deleted", "");
          handleDelete();
        }}
      >
        <Icon>delete</Icon>
      </DeleteButton>
    );
  }
}
