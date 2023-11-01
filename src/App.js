
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage/Homepage'
import Homepage from './HomePage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './aboutpage/Aboutus';

import { useState } from 'react';

import Howtojoin from './howtojoin/Howtojoin'
import Pricing from './pricing/Pricing'
import Contactus from './contact/Contactus'
import "./app.css"
import Marketplace from './marketplace/Marketplace';
import Register from './Register/Register';
import Login from './Register/Login';
import Productpage from './marketplace/Productpage';
import { Provider } from 'react-redux';
import store from './store/store';








function App() {
  const [show, setShow] = useState(false);
  return (
   <>

 <BrowserRouter>
 <Provider store={store}>
   
   <Routes>
     <Route exact path="/" element={<Homepage show={show} setShow={setShow}/>}/>
     <Route exact path="/aboutus" element={<Aboutus show={show} setShow={setShow}/>}/>
     <Route exact path="/marketplace" element={<Marketplace show={show} setShow={setShow}/>}/>
     <Route exact path="/register" element={<Register show={show} setShow={setShow}/>}/>
     <Route exact path="/login" element={<Login show={show} setShow={setShow}/>}/>
     <Route exact path="productpage/:id" element={<Productpage show={show} setShow={setShow}/>}/>
   
     <Route exact path="/Howtojoin" element={<Howtojoin show={show} setShow={setShow}/>}/>
     <Route exact path="/Pricing" element={<Pricing show={show} setShow={setShow}/>}/>
     <Route exact path="/Contactus" element={<Contactus show={show} setShow={setShow}/>}/>
     
    
   </Routes>
   </Provider>
 </BrowserRouter>



   
   
   </>
  );
}

export default App;
