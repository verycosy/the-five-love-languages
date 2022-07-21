import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Result } from './pages/Result';
import { Testing } from './pages/Testing';
import { usePageView } from './hooks/usePageView';

function App() {
  usePageView();

  return (
    <div className='App'>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='test' element={<Testing />} />
          <Route path='result' element={<Result />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
