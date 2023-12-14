// src/components/AddContactButton.js
import React from 'react';
import { Link } from 'react-router-dom';

const AddContactButton = () => {
  return (
    <Link to="/form-view" className="btn btn-success">
      Add a Contact
    </Link>
  );
};

export default AddContactButton;
