import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Result } from './components/Result';
import { Testing } from './components/Testing';
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
