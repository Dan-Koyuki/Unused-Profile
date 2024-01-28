import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/Home/LandingPage';
import Home from './components/Home/Home';
import Resume from './components/Home/Resume';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
