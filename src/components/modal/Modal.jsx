import './Modal.css';

function Modal({ score }) {
  return (
    <div className="modal">
      <div className="modal-title">Skor: {score}</div>
      <div onClick={() => (window.location = '/')} className="modal-btn">
        Start Again
      </div>
    </div>
  );
}

export default Modal;
