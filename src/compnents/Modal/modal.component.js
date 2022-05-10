import { Component } from "react";
import { createPortal } from "react-dom";

import "./modal.style.scss";
class Modal extends Component {
  render = () => {
    console.log("in modal");
    if (!this.props.isOpen) return null;
    return createPortal(
      <div className="modal-container">
        <section />
        <section>{this.props.children}</section>
      </div>,
      document.getElementById("portal")
    );
  };
}

export default Modal;
