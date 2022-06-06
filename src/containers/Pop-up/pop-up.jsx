import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "./pop-up.style.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        View Development Info
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hola!</h2>
            <p>
             Si quieres saber un poco mas de la persona que es experimentado en esta area y lleva a cabo la optimizació de las busquedas y mejor posicionamiento a nivel publicitario/marketing, puedes 
            verlo en <br /> <a href="https://github.com/IronyOS"><FaGithub  className="gh-icon"/></a>
            </p>
            <button className="close-modal" onClick={toggleModal}>
             Close
            </button>
          </div>
        </div>
      )}
     
    </>
  );
}