import './App.css';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './auth/authContext'; // Your AuthContext
import AppRoutes from './routes/routes'; // Your routes component

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <div>
          <AppRoutes /> {/* Define routes */}
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
