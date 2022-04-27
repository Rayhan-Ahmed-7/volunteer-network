import './App.css';
import Header from './components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/donation' element={<Donation></Donation>}></Route>
          <Route path='/events' element={<Events></Events>}></Route>
          <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
