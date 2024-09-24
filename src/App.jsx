import './App.css';
import MainBody from './Components/MainBody';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-white">
        <MainBody />
      </div>
    </Router>
  )
}

export default App
