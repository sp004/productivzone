import './App.css';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Draft from './pages/Draft';
import {
  Routes,
  Route,
} from "react-router-dom";
import Pomodoro from './pages/Pomodoro';

function App() {
  return (
    <div className="app">
      <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/notes' element={<Draft />} />
            <Route path='/pomodoro-timer' element={<Pomodoro />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;