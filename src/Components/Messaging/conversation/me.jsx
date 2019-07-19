import React from 'react';

const Me = ({ className, pic, msg, at }) => (
  <div className={className}>
    <div className="d-flex justify-content-end mb-4">
      <div className="msg_cotainer_send">
        {msg}
        <span className="msg_time_send">{at}</span>
      </div>
      <div className="img_cont_msg">
        <img
          src={pic}
          className="rounded-circle user_img_msg"
          alt=""
        />
      </div>
    </div>
  </div>
);
export default Me;
