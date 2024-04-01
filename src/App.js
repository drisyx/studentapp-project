import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<AddStudent/>}/>
      <Route path ='/search' element ={<SearchStudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}


export default App;
