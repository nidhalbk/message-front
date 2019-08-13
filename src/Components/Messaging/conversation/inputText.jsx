import React, { useContext, useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import SEND_MSG from '../../garphql/mutations/sendMsg';
import UserContext from '../../../context';

const Input = ({ selectedUser }) => {
  const UserConnected = useContext(UserContext);
  const [createMessage] = useMutation(SEND_MSG);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createMessage({
          variables: {
            body: e.target.body.value,
            sender: UserConnected._id,
            reciever: selectedUser._id,
          },
        });
        e.target.body.value = '';
      }}
    >
      <div className="input-group">
        <div className="input-group-append">
          <span className="input-group-text attach_btn">
            <i className="fas fa-paperclip" />
          </span>
        </div>
        <textarea
          name="body"
          className="form-control type_msg"
          placeholder="Type your message..."
        />
        <div className="input-group-append">
          <span className="input-group-text send_btn">
            <button type="submit"><i className="fas fa-location-arrow" /></button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Input;
