import logo from "./logo.svg";
import "./App.css";

import LoginSignupForm from "./modules/loginSignupForm";
import Dashboard from "./modules/dashboard";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute =({children})=>{
  const isLoggedIn = localStorage.getItem('user:token') !== null;
  const location = useLocation();

  // console.log("isLoggedIn: ", isLoggedIn);

  if(!isLoggedIn && location.pathname === "/"){
    return <Navigate to={'users/sign_in'} />
  }
  else if(isLoggedIn && ["/users/sign_in", "/users/sign_up"].includes(location.pathname)) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
  return (
    <div className="bg-dark-gray h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute> } />
        
        <Route path="/users/sign_in" element={
        <ProtectedRoute>
          <LoginSignupForm isSignInPage={true} />
        </ProtectedRoute>} />

        <Route path="/users/sign_up" element={
        <ProtectedRoute>
          <LoginSignupForm isSignInPage={false}/>
        </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;
