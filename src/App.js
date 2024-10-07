
import './App.css';
import Home from './components/home';
import Rezocontrol from './components/rezocontrol';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/downloads/rezocontrol-app' element={<Rezocontrol />}/>
      </Routes>
    </>
    
  );
}

export default App;
