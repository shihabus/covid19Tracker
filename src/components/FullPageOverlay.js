import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

// I use the same div here that I mount my app into
// so the modal will be a sibling of the rest of the app
// in the DOM hierachy
const modalRoot = document.getElementById("root");

class Modal extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 0.9);
  height: 100vh;
  width: 100vw;
  z-index: 999;
  color: white;
`;

export default function FullpageOverlay(props) {
  return (
    <Modal>
      <Wrapper>{props.children}</Wrapper>
    </Modal>
  );
}
