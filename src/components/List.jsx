import { useState } from 'react';
import Form from './Form';

function List({ type, cvsubmit = false }) {
  if (type === 'edexperience') {
    return (
      <ul>
        <Form type={type} />
        <Form type={type} />
        <Form type={type} />
      </ul>
    );
  }
}

export default List;
