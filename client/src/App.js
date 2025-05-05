import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

import Error from './pages/Error';
import './App.css';
import NaveBarre from './components/NaveBarre'; 
import { useEffect } from 'react';
import { current } from './JS/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import AddCour from './components/AddCour';
import About from './pages/About';
import ContactUs from './pages/Contact';
import Footer from './components/Footer';




function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAdmin = useSelector((state) => state.auth.user);
  //const user = useSelector((state) => state.auth.user);  
  //console.log('user:', user);

  //console.log(isAuth)
  //

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
    }
  }, [dispatch]);
//console.log(isAuth)
  return (
    <div className="App">
      <NaveBarre />
      <Routes>
        <Route path="/" element={<Home />} />
        {isAuth ? (
         <>
          <Route path="/profile" element={<Profile />} />
         

      
          
         </>
          
        ) : (
          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} 
            />
            <Route path="/contact" element={<ContactUs />} 
            />
          </>
        )}


 
{
  isAdmin? (
    <>
    <Route path="/admin" element={<Dashboard />} 
  />
  <Route path="/addcours" element={<AddCour />} 
  />
  
    </>

  ):

  ( <Route path="/login" element={<Login />} />)
}


              
            

     
       
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;