import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/Pages/About/About';
import Blog from './components/Pages/Blog/Blog';
import Checkout from './components/Pages/Checkout/Checkout';
import Footer from './components/Pages/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import NotFound from './components/Pages/NotFound/NotFound';
import Register from './components/Pages/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';

function App() {

  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const navigate = useNavigate();

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    } , []);

    const handleHire = (service) => {
      setService(service);
      navigate('/checkout');
  }

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home services={services} handleHire={handleHire}></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout service={service}></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
