import React, { useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import ContactList from './ContactList';
import SearchBar from './SearchBarMsg';
import GET_ALL_USERS from '../../garphql/queries/getAllUsers';
import UserContext from '../../../context';


const Contact = ({ selectedUser, setSelectedUser }) => {
  const UserConnected = useContext(UserContext);
  const conversationQuery = useQuery(GET_ALL_USERS);
  useEffect(() => {
    if (!selectedUser && conversationQuery.data.getAllUser && conversationQuery.data.getAllUser.length > 1) {
      setSelectedUser(conversationQuery.data.getAllUser[1]);
    }
  }, [selectedUser, conversationQuery.data.getAllUser]);
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <SearchBar />
        </div>
        <div className="card-body contacts_body">
          <ul className="contacts">

            { conversationQuery.data.getAllUser && conversationQuery.data.getAllUser.map((user) => (user._id !== UserConnected._id
              && <li className={user.online && 'active'} onClick={() => setSelectedUser(user)} key={user._id}><ContactList contact={user} /></li>))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
