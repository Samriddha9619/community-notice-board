import React, { useState } from 'react';
import './App.css'; // Optional, for styling

function App() {
  const [notices, setNotices] = useState([
    {
    id: 1,
    title: "Water Supply Interruption",
    desc: "There will be no water supply on 1st Aug from 10 AM to 4 PM due to maintenance work.",
    name: "Society Office",
    date: "2025-07-29 10:00 AM",
    category: "Announcements"
  },
  {
    id: 2,
    title: "Monthly Maintenance Due",
    desc: "Kindly pay your July maintenance by 5th Aug to avoid late fees.",
    name: "Treasurer - Block A",
    date: "2025-07-28 5:00 PM",
    category: "Announcements"
  },
  {
  id: 3,
  title: "Independence Day Celebration",
  desc: "Join us on 15th Aug at the central park for flag hoisting and cultural programs.",
  name: "Events Committee",
  date: "2025-07-30 9:00 AM",
  category: "Local Events"
},
{
  id: 4,
  title: "Weekend Yoga Workshop",
  desc: "Free yoga class for all residents this Sunday at 7 AM on the clubhouse lawn.",
  name: "Wellness Club",
  date: "2025-07-27 6:00 PM",
  category: "Local Events"
},
  {
    id: 5,
    title: "Flat for Rent",
    desc: "2BHK flat available for rent in Block B. Contact Mr. Sharma at 9876543210.",
    name: "Resident - Block B",
    date: "2025-07-26 3:00 PM",
    category: "Buy/Sell/Rent"
  },
  {
    id: 6,
    title: "Lost Pet",
    desc: "Our cat 'Mittens' went missing last night. If found, please contact us at 1234567890.",
    name: "Resident - Block C",
    date: "2025-07-25 8:00 AM",
    category: "Buy/Sell/Rent"
  },


  ]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Announcements');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin password check
    if (password !== 'vaibhav123') {
      alert('Unauthorized: Incorrect admin password');
      return;
    }

    const newNotice = {
      id: Date.now(),
      title,
      desc,
      name,
      date: new Date().toLocaleString(),
      category,
    };

    setNotices([newNotice, ...notices]);

    // Clear form fields
    setTitle('');
    setDesc('');
    setName('');
    setCategory('Announcements');
    setPassword('');
  };

  // Group notices by category
  const grouped = notices.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>🏡 Community Notice Board</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <textarea
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        >
          <option>Announcements</option>
          <option>Local Events</option>
          <option>Buy/Sell/Rent</option>
          <option>Important Contacts</option>
        </select>
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '8px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '10px' }}>
          Post Notice
        </button>
      </form>

      {/* Display grouped notices */}
      {Object.entries(grouped).map(([cat, items]) => (
        <div key={cat} style={{ marginBottom: '30px' }}>
          <h2>{cat}</h2>
          {items.map((notice) => (
            <div
              key={notice.id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                marginBottom: '10px',
              }}
            >
              <h3>{notice.title}</h3>
              <p>{notice.desc}</p>
              <small>
                Posted by <strong>{notice.name}</strong> on {notice.date}
              </small>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
