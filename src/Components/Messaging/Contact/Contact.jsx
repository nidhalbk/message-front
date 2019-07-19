import React from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBarMsg';
import contactData from '../../../utils/MockData/contatctList';

export default function Contact() {
  return (
    <>
      <div className="card-header">
        <SearchBar />
      </div>
      <div className="card-body contacts_body">
        <ul className="contacts">
          {contactData.map((contact) => <ContactList contact={contact} />)}
        </ul>
      </div>
    </>
  );
}
