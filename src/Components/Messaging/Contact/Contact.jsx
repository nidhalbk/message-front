import React from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBarMsg';
import contactData from '../../../utils/MockData/contatctList';

export default function Contact() {
  return (
    <div className="col-md-4 col-xl-3 chat">
      <div className="card mb-sm-3 mb-md-0 contacts_card">
        <div className="card-header">
          <SearchBar />
        </div>
        <div className="card-body contacts_body">
          <ul className="contacts">
            {contactData.map((contact) => (
              <ContactList contact={contact} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
