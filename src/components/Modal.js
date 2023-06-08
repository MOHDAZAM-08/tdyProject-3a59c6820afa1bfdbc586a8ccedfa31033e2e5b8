import React from 'react';

const Modal = (props) => {
  const { isOpen, closeModal } = props;
  const { content} = props;

  return (
    <div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button onClick={closeModal} style={{fontSize:"1.5rem"}}>✖</button>
            <div className="modal-content">
             <div className='content'>{content}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
