// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Techstack from './pages/Techstack';
import Layout from './components/Layout';
import Project from './pages/Project';
import ContactForm from './pages/ContactForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techstack" element={<Techstack />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
