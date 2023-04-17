import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <b>
      Page is not found :( Go to <Link to="/">Home</Link>
    </b>
  );
};

export default NotFound;
