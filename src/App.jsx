import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import PageTransition from './components/PageTransition';

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Router>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </Router>
    </>
  );
}

export default App;