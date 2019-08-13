import React from 'react';


const convesationWith = ({
  className, pic, msg, at,
}) => (
  <div className={className}>
    <div className="d-flex justify-content-start mb-4">
      <div className="img_cont_msg">
        <img
          src={pic}
          className="rounded-circle user_img_msg"
          alt=""
        />
      </div>
      <div className="msg_cotainer">
        {msg}
        <span className="msg_time">{at}</span>
      </div>
    </div>
  </div>
);
export default convesationWith;
