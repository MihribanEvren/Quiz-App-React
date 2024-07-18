import './App.css';
import { Routes, Route } from 'react-router-dom';
import Introduce from './pages/introduce/Introduce';
import Quiz from './pages/quiz/Quiz';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
