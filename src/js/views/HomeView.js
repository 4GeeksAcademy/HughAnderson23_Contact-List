// src/views/HomeView.js
import React from 'react';
import ContactList from '../component/ContactList';
import AddContactButton from '../components/AddContactButton';

const HomeView = () => {
  return (
    <div>
      <h1>Home View</h1>
      <ContactList />
      <AddContactButton />
    </div>
  );
};

export default HomeView;
