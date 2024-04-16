import React from 'react';
import MainPage from './components/mainPage'; // Import MainPage component

const App = () => {
    console.log('Rendering the App component...');
    return (
        <div>
            <MainPage /> {/* Render mainPage component */}
        </div>
    );
}

export default App;
