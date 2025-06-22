
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Recruitment from './pages/Recruitment';
import Socials from './pages/Socials';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
