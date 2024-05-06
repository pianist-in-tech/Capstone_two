import React, { useState } from 'react';

// Helper function to convert date to mm/dd/yyyy
const formatDate = (isoDate) => {
  if (isoDate) {
    const [year, month, day] = isoDate.split('-'); // Split the ISO date
    return `${month}/${day}/${year}`; // Reformat to mm/dd/yyyy
  }
  return ''; // Return empty if no valid date
};

// Component for individual practice sessions
const PracticeSession = ({ session, onEdit, onDelete }) => {
  const { id, date, duration, notes } = session;

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
      <p><strong>Date:</strong> {formatDate(date)}</p> {/* Apply the formatDate function */}
      <p><strong>Duration:</strong> {duration} minutes</p>
      <p><strong>Notes:</strong> {notes}</p>
      <button onClick={() => onEdit(id)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

const PracticeTracker = () => {
  const [practiceSessions, setPracticeSessions] = useState([]);
  const [form, setForm] = useState({
    date: '',
    duration: '',
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSession = {
      id: Date.now(), // Unique ID
      ...form,
    };
    setPracticeSessions((prev) => [newSession, ...prev]); // Add to the beginning of the list
    setForm({ date: '', duration: '', notes: '' });
  };

  const handleEdit = (id) => {
    const session = practiceSessions.find((s) => s.id === id);
    setForm({ ...session });
    setPracticeSessions(practiceSessions.filter((s) => s.id !== id)); // Remove the old session
  };

  const handleDelete = (id) => {
    setPracticeSessions(practiceSessions.filter((s) => s.id !== id));
  };

  return (
    <div>
      <h1>Practice Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input name="duration" type="number" value={form.duration} onChange={handleChange} />
        </div>
        <div>
          <label>Notes:</label>
          <input name="notes" type="text" value={form.notes} onChange={handleChange} />
        </div>
        <button type="submit">Add Session</button>
      </form>

      {practiceSessions.map((session) => (
        <PracticeSession key={session.id} session={session} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default PracticeTracker;
