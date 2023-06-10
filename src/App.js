import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from './components/auth';
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
