import './App.css';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
