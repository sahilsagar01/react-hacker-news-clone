import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Heading from './components/Heading/Heading';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comments from './components/Comments/Comments';
import Footer from './components/Comment/Footer/Footer';



function App() {

  return (
    <div className="app">
    <Heading />
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home Categories={"home"} />} />
        <Route exact path='/ask' element={<Home Categories={"askstories"} />} />
        <Route exact path='/show' element={<Home Categories={"showstories"} />} />
        <Route exact path='/job' element={<Home Categories={"jobstories"} />} />
        <Route exact path='/comments' element={<Comments />} />
      </Routes>
    </BrowserRouter>
   <Footer />
    </div>
  );
}

export default App;
