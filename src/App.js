import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Login from './pages/login/Login';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Register from './pages/register/Register';

function App() {
  return (
      <>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gigs' element={<Gigs />} />
            <Route path='/gig/:id' element={<Gig />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/mygigs' element={<MyGigs />} />
            <Route path='/add' element={<Add />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/message/:id' element={<Message />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
