import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </Router>
  );
}

export default App;