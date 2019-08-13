import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_ALL_MESSAGES from '../../garphql/queries/getAllMessages';

export default ({ contact }) => (

  <div className="d-flex bd-highlight">
    <div className="img_cont">
      <img src={contact.pic} alt="" className="rounded-circle user_img" />
      <span
        className={contact.online ? 'online_icon' : 'online_icon offline'}
      />
    </div>
    <div className="user_info">
      <span>
        {contact.name}
        {' '}
(
        {contact.userName}
)
      </span>
      <p>{`${contact.name} is ${contact.online ? 'online' : 'offline'}`}</p>
    </div>
  </div>
);
