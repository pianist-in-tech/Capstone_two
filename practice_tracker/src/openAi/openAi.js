import React, { useState } from 'react';
import axios from 'axios'; // Axios for HTTP requests

const PracticeTracker = () => {
  const [response, setResponse] = useState(null);

  const topics = [
    {
      title: 'Technical Exercises Suggestions',
      prompt: 'Give me some suggestions for technical exercises for beginner pianists. This should be no more than 5 suggestions, in a numbered list. Each suggestion has to be placed one after each other with the line break after each. Consider that they just started practicing their instrument.',
    },
    {
      title: 'Best pieces for the beginner\'s level',
      prompt: 'What are some of the best piano pieces to play at a beginner level?',
    },
    {
      title: 'How to handle a difficult passage',
      prompt: 'What are some tips for handling a difficult passage in piano?',
    },
  ];

  const handleClick = async (prompt) => {
    try {
      const result = await axios.post('http://localhost:3001/get-response', { prompt });
      setResponse(result.data); // Store OpenAI response in state
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
    }
  };

  return (
    <div>
      <h1>Practice Tracker</h1>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <button onClick={() => handleClick(topic.prompt)}>
              {topic.title}
            </button>
          </li>
        ))}
      </ul>

      {response && (
        <div>
          <h2>Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default PracticeTracker;
