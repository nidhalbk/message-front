import React, { useEffect, useContext, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Me from './me';
import ConvesationWith from './convesationWith';
import UserContext from '../../../context';
import GET_CONVERSATION from '../../garphql/queries/getConversation';

const Conversation = ({ selectedUser }) => {
  const UserConnected = useContext(UserContext);
  const getConversation = useQuery(GET_CONVERSATION, { variables: { user1: UserConnected._id, user2: selectedUser._id } });
  const [result, setResult] = useState([]);
  useEffect(() => {
    setResult(getConversation.data.getConversation);
  }, [selectedUser, UserConnected, getConversation.data.getConversation]);
  console.log(result);
  if (selectedUser === 0 || selectedUser === undefined || result === undefined || result.length === 0 || getConversation.loading) {
    return (<div className="card-body msg_card_body"><p>no content</p></div>);
  }
  return (
    <div className="card-body msg_card_body">
      {result ? result.map((element) => element.sender._id === UserConnected._id ? (
        <Me
          pic={element.sender.pic}
          msg={element.body}
          at={element.createdAt}
          key={element._id}
        />
      ) : (
        <ConvesationWith
          pic={element.sender.pic}
          msg={element.body}
          at={element.createdAt}
          key={element._id}
        />
      )) : ''}
    </div>

  );
};

export default Conversation;
