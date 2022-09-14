import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Financial from './pages/Financial';
import Start from './pages/start';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/financial' element={<Financial />} />
      </Routes>
    </Router>
  );
}