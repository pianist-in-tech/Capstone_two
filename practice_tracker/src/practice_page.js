import React from 'react';
import NavBar from './nav'; // Navigation bar
import PracticeTracker from './tracker';
import PracticeSuggestions from './openAi';

// Create the PracticePage layout
const PracticePage = () => {
  const containerStyle = {
    display: 'flex', // Use flexbox for layout
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Aligns the start of each column
    padding: '20px',
    gap: '20px', // Space between columns
  };

  const leftStyle = {
    flex: '1', // Left side takes up 1 part of space
  };

  const rightStyle = {
    flex: '1', // Right side takes up 1 part of space
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <PracticeTracker /> {/* Practice Tracker on the left */}
      </div>
      <div style={rightStyle}>
        <PracticeSuggestions /> {/* Practice Suggestions on the right */}
      </div>
    </div>
  );
};

// Main Practice_page component with NavBar and Dashboard elements
const Practice_page = () => (
  <div>
    <NavBar /> {/* Navigation bar at the top */}
    <PracticePage /> {/* Practice Page layout with tracker and suggestions */}
  </div>
);

export default Practice_page;
