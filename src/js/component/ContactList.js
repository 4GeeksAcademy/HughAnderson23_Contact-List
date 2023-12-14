// src/components/ContactList.js
import React, { useEffect } from 'react';
import { getContacts, dispatch } from '../store/ContactStore';
import { fetchContacts } from '../actions/ContactActions';

const ContactList = () => {
  useEffect(() => {
    // Fetch contacts from the API when the component mounts
    fetchContacts()(dispatch);
  }, []);

  const contacts = getContacts();

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
