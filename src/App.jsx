import './App.css';
import MainBody from './Components/MainBody';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {

  return (
    <Router>
      <div className="bg-slate-900 min-h-screen text-white min-w-[250px]">
        <MainBody>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MainBody>
      </div>
    </Router>
  )
}

export default App
