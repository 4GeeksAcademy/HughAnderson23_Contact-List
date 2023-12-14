import Flux from 'flux';

const dispatcher = new Flux.Dispatcher();

const contacts = [];

dispatcher.register((action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      contacts.push(action.payload);
      break;
    case 'SET_CONTACTS':
      // Assuming action.payload is an array of contacts
      contacts.length = 0; // Clear existing contacts
      Array.prototype.push.apply(contacts, action.payload);
      break;
    default:
      // Handle other actions if needed
      break;
  }
});

export const getContacts = () => contacts;
export const dispatch = dispatcher.dispatch.bind(dispatcher);

