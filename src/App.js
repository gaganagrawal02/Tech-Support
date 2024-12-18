
import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import ImageSlider from './components/Slider/ImageSlider';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import LocationSearch from './components/location/LocationSearch';
import ElectronicsSection  from './components/ElectronicSection/ElectronicsSection';
import ACRepairPage from './components/Service/ACRepairPage';
import ContactUs from './components/Contacts/ContactUs';
import WhyChooseUs from './components/whychoose/WhyChooseUs';
import Cart from './components/Cartpage/Cart';
import CheckoutPage from './components/checkout/CheckoutPage';
import MacbookRepair from './components/Service/macbook/MackbookRepair';
import DesktopSupport from './components/Service/desktop/DesktopSupport';
import Upgrade from './components/Service/Subscription/Upgrade';
import CodingIssue from './components/Service/codingissue/CodingIssue';
import Server from './components/Service/Server/Server';
import Footer from './components/Footer/Footer';
import RagisterPage from './components/Ragister/Register'
import FAQs from './components/faqs/FAQs';
import ImageCarousel from './components/Carosel/ImageCarosel';
import Signup from './components/Signup/Signup';
import Login from './components/login/Login';
import ForgotPassword from './components/forgetpassword/ForgotPassword';
import ResetPassword from './components/resetpassword/ResetPassword';
import OrderConfirmationPage from './components/confirmation/OrderConfirmationPage';

import Printer from './components/Service/Printer/Printer';
import { Helmet } from 'react-helmet-async';
import NotFound from './components/Not Found/NotFound';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
 

  const Home = () => (
    <>
      <Helmet>
      <title>Tech Support</title>
      <meta name="description" content="Door2fy offers expert tech services for coding, MacBook, desktop, printer, and server issues. Fast, reliable, and professional solutions at your doorstep." />
    </Helmet>
      
    <div>

      <Navbar toggleCart={toggleCart} cartItemCount={0} /> {/* Set cartItemCount to 0 for empty cart */}
        {isCartOpen && (
          <Cart onClose={closeCart} />
        )}
        <ImageSlider />
        <LocationSearch/>
        <ElectronicsSection />
        <WhyChooseUs/> 
        <ImageCarousel />
        <FAQs /> 
      <Footer />
    </div>
    </>
  );

  
  return (
    <div className="App">

 

<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path = "/laptop-repair" element={<ACRepairPage />}/>
        <Route path = "/macbook-repair" element={<MacbookRepair />}/>
        <Route path = "/desktop-repair" element={<DesktopSupport />}/>
        <Route path = "/upgrade" element={<Upgrade />}/>
        <Route path = "/printer-repair" element={<Printer/>}/>
        <Route path = "/server" element={<Server />}/>
        <Route path = "/CodingIssue" element={<CodingIssue />}/>
        <Route path="/signup" element= {<Signup/>} />
        <Route path="/login" element= {<Login/>} />
        <Route path = "/contactUs" element={<ContactUs />}/>
        <Route path = "/cartPage" element={<Cart />}/>
        <Route path = "/checkout" element={<CheckoutPage/>}/>
        <Route path="/register-as-professional" element= {<RagisterPage/>} /> 
        <Route path="/forgot-password" element= {<ForgotPassword/>} />
        <Route path="/reset-password/:token" element= {<ResetPassword/>} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    
      </Router>

    </div>   
   

  );
}




export default App;