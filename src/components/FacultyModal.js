import React from "react";
import "./facultyModal.css";
import Uma from "../assets/uma.png";

function Modal({ setOpenModal, data }) {
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
            <img className='profImageInModal' src={data.facultyImage} />
            <div className="title">
                <p>{data.facultyName}</p> 
            </div>
        </div>
        <div className="rightside">
            <div className="infoFormator">
                <p className="infoTitle">Designation:</p>
                <p className="info">{data.Designation}</p>
            </div>
            <div className="infoFormator">
                <p className="infoTitle">Department:</p>
                <p className="info">{data.Department}</p>
            </div>
            <div className="infoFormator">
                <p className="infoTitle">Qualifications with Class/Grad:</p>
                <p className="info">{data.Qualifications}</p>
            </div>
            <div className="infoFormator">
                <p className="infoTitle">Total Experience:</p>
                <p className="info">{data.Experience} years</p>
            </div>
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