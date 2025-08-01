import React from 'react';

function NoticeCard({ notice }) {
  return (
    <div className="notice-card">
      <h3>{notice.title}</h3>
      <p>{notice.message}</p>
    </div>
  );
}

export default NoticeCard;
