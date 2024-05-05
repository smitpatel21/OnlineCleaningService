import React from 'react';
import Home from './pages/Home'
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import About from './pages/About';
import {BrowserRouter, Routes,Route } from 'react-router-dom'
import Prices from './pages/Prices';
import BecomeHelper from './pages/BecomeHelper';
import ServiceProviderDashboard from './pages/ServiceProviderDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import BookService from './pages/BookService';
import Signup from './pages/Signup';
import {LoginContext,CustomerLoginContext,EmailContext,ServiceProviderIdContext,MySettingVarContext ,UserProfileContext} from './components/LoginContext'
import { useState } from 'react';
import ResetPassword from './pages/ResetPassword';
import NotFound from './pages/NotFound';
function App() {
  const [isauth,setAuth]=useState(false)
  const [customerIn,setCustomerIn]=useState(false)
  let [Email,setEmail]=useState('');
  
  const [serviceProviderID,setServiceProviderID]=useState('');
  const [mySettingVar,setMySettingVar]=useState(false);
  const [userProfile,setUserProfile]=useState([]);
  
  return (
    <>
    <LoginContext.Provider value={{isauth,setAuth}}>
      <CustomerLoginContext.Provider value={{customerIn,setCustomerIn}}>
        <EmailContext.Provider value={{Email,setEmail}}>
          
            <ServiceProviderIdContext.Provider value={{serviceProviderID,setServiceProviderID}} >
              <MySettingVarContext.Provider value={{mySettingVar,setMySettingVar}}>
                <UserProfileContext.Provider value={{userProfile,setUserProfile}}>
                
              <BrowserRouter>
                <Routes>
                
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Faq" element={<Faq/>}/>
                  <Route path="/Prices" element={<Prices/>}/>
                  <Route path="/Contact" element={<Contact/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/BecomeHelper" element={<BecomeHelper/>}/>
                  <Route path="/BookService" element={<BookService/>}/>
                  <Route path="/CustomerSignup" element={<Signup/>}/>
                  <Route path="/ResetPassword" element={<ResetPassword/>}/>
                  {
                    isauth?(<>
                    <Route path="/User" element={((userProfile as any)[0].UserTypeId===1)?<CustomerDashboard/>:<ServiceProviderDashboard/>}/>
                    <Route path="/Admin" element={<AdminDashboard/>}/>
                    </>
                    ):<Route path="/*" element={<NotFound/>}/>
                  }                  
                  
                  
                  <Route path="/*" element={<NotFound/>}/>
                
                </Routes>
                
              </BrowserRouter>
              
              </UserProfileContext.Provider>
              </MySettingVarContext.Provider>
            </ServiceProviderIdContext.Provider>
          
        </EmailContext.Provider>
    </CustomerLoginContext.Provider>
    </LoginContext.Provider>
    </>
  );
}

export default App;
