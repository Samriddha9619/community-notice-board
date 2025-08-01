import React from 'react';
import NoticeCard from './NoticeCard';

function NoticeBoard({ notices }) {
  return (
    <div className="notice-board">
      {notices.length === 0 ? (
        <p>No notices yet. Add one!</p>
      ) : (
        notices.map((notice) => <NoticeCard key={notice.id} notice={notice} />)
      )}
    </div>
  );
}

export default NoticeBoard;
