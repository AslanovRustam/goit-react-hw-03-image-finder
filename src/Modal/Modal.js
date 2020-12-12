import React, { Component } from 'react';
import s from 'modal.module.css';

export default class Modal extends Component {
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return (
      <div className="modal-backDrop">
        <div className="modal-content">{this.props.children}</div>
      </div>
    );
  }
}
