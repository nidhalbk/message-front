import React from 'react';

export default function contactItem({ contact }) {
  return (
    <li className={contact.active && 'active'}>
      <div className="d-flex bd-highlight">
        <div className="img_cont">
          <img
            src={contact.avatar}
            alt=""
            className="rounded-circle user_img"
          />
          <span className={contact.online ? 'online_icon' : 'online_icon offline'} />
        </div>
        <div className="user_info">
          <span>{contact.name}</span>
          <p>
            {`${contact.name} is ${contact.online ? 'online' : 'offline'}`}
          </p>
        </div>
      </div>
    </li>
  );
}
