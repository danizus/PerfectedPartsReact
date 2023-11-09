
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage/Homepage'
import Homepage from './HomePage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from './aboutpage/Aboutus';

import { useState } from 'react';

import Howtojoin from './howtojoin/Howtojoin'
import Pricing from './pricing/Pricing'
import Contactus from './contact/Contactus'
import "./App.css"
import Marketplace from './marketplace/Marketplace';
import Register from './Register/Register';
import Login from './Register/Login';
import Productpage from './marketplace/Productpage';
import { Provider } from 'react-redux';
import store,{persistor} from './store/store';
import Checkout from './marketplace/Checkout';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import CheckOutPage from './marketplace/CheckOutPage';
import AllRegisterForms from './Register/AllRegisterForms';
import { MyContextProvider } from './Register/MyContext';










function App() {
  const [show, setShow] = useState(false);
  
 
  return (
   <>

 <BrowserRouter>
 <Provider store={store}>
 <MyContextProvider>
   <PersistGate loading={null} persistor={persistor}>
   <Routes>
     <Route exact path="/" element={<Homepage show={show} setShow={setShow}/>}/>
     <Route exact path="/aboutus" element={<Aboutus show={show} setShow={setShow}/>}/>
     <Route exact path="/marketplace" element={<Marketplace show={show} setShow={setShow}/>}/>
     
     <Route exact path="/register" element={<AllRegisterForms  show={show} setShow={setShow}/>}/>
   
     <Route exact path="/login" element={<Login show={show} setShow={setShow}/>}/>
     <Route exact path="productpage/:id" element={<Productpage show={show} setShow={setShow}/>}/>
     <Route exact path="/Howtojoin" element={<Howtojoin show={show} setShow={setShow}/>}/>
     <Route exact path="/Pricing" element={<Pricing show={show} setShow={setShow}/>}/>
     <Route exact path="/Contactus" element={<Contactus show={show} setShow={setShow}/>}/>
     <Route exact path="/checkout/:id" element={<Checkout show={show} setShow={setShow}/>}/>
     <Route exact path="/checkoutPage" element={<CheckOutPage show={show} setShow={setShow}/>}/>
     
    
   </Routes>
   </PersistGate>
   </MyContextProvider>
   </Provider>
   <ToastContainer />
 </BrowserRouter>



   
   
   </>
  );
}

export default App;
