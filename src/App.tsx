import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { CurrentIndex } from './components/CurrentIndex';
import { QuestionBox } from './components/QuestionBox';
import { Result } from './components/Result';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route
              index
              element={
                <>
                  <QuestionBox />
                  <CurrentIndex />
                </>
              }
            />
            <Route path='result' element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
