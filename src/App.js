import './App.css';
import LoginScreen from './screens/LoginScreen.js';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
