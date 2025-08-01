import React, { useState } from 'react';

function NoticeForm({ addNotice }) {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !message) return;

    const newNotice = {
      id: Date.now(),
      title,
      message,
    };

    addNotice(newNotice);
    setTitle('');
    setMessage('');
  };

  return (
    <form className="notice-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Notice Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Notice Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit">Add Notice</button>
    </form>
  );
}

export default NoticeForm;
