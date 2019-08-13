import React from 'react';
import ModalStyle from './modalStyle';

const Modal = (props) => {
  const { children } = props;
  const showHideClassName = props.show
    ? 'modal display-block'
    : 'modal display-none';

  return (
    <ModalStyle>
      <div className={showHideClassName}>
        <section className="modal-main">
          <h1>Welcome </h1>
          {children}
        </section>
      </div>
    </ModalStyle>
  );
};
export default Modal;
