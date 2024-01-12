import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Mynotes from './components/Mynotes';
import Updatenotes from './components/Updatenotes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Notes />}/>
        <Route exact path='/mynotes' element={<Mynotes/>} />  
        <Route exact path='/update' element={<Updatenotes/>} />  
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
