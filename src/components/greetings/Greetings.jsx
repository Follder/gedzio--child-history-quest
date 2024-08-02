import React, { useState } from "react";
import ReactDOM from 'react-dom';
import "./Greetings.scss";
import button from "../../assets/img/button.png";
import { History } from "../history/History";

export const Greetings = ({ header, background, text }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <div className="main__header">
        <h1 className="main__title">{header}</h1>
      </div>

      <div className="main__button" onClick={() => setShowModal(true)}>
        <span>Пізнати історію</span>
        <img src={button} alt="click me" className="button" />
      </div>

      {showModal && <Portal><History text={text} setShowModal={setShowModal} /></Portal>}
    </div>
  );
};


export const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node);
}