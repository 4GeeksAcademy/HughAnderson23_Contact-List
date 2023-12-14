// src/actions/ContactActions.js
import * as types from './ContactActionTypes';

// Assume there is an API endpoint for contacts at "https://api.playground.com/contacts"
const API_BASE_URL = 'https://playground.4geeks.com/apis/fake/contact/';

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      });

      if (!response.ok) {
        throw new Error('Failed to add contact');
      }

      const newContact = await response.json();
      dispatch({
        type: types.ADD_CONTACT,
        payload: newContact,
      });
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };
};

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(API_BASE_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const contacts = await response.json();
      // Dispatch an action to update the store with fetched contacts
      // Assuming your ContactStore has an action for this, e.g., 'SET_CONTACTS'
      dispatch({
        type: 'SET_CONTACTS',
        payload: contacts,
      });
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
};
