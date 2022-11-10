import React from "react";
import "./facultyModal.css";
import Uma from "../assets/uma.png";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="modalContainerContent">
        <div className="leftside">
            <img className='profImageInModal' src={Uma} />
            <div className="title">
                <h4>Mrs. Uma Ade</h4> 
            </div>
        </div>
        <div className="rightside">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
        </div>
        {/* <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Previous
          </button>
          <button>Next</button>
        </div> */}
      </div>
    </div>
  );
}

export default Modal;