import React, { Fragment, useEffect } from 'react'
import { useNavigate, useLocation, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Wrapper from './layouts/Wrapper';

import { ToastContainer } from 'react-toastify';
// Toaster css 
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // checking while component is being mounted weather it is auth check or not
    if (location.pathname === "" || location.pathname === "/") {
      navigate("/login");
    }
  }, []);

  const gotoLogin = () => {
    return (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        </Routes>
    );
  };
  return (
    <Fragment>
      <ToastContainer />
      {
        location.pathname === "" ||
          location.pathname === "/login" ||
          location.pathname === "/forgotpassword" ||
          location.pathname === "/" ? (
          gotoLogin()
        ) :
          <Wrapper/>
      }
    </Fragment>
  );
}

export default App