import React, { useState } from "react";
import Input from "../components/input";
import Button from "../components/button";
const LoginSignupForm = ({isSignInPage=true}) => {
  const [data, setData] = useState({
    ...(!isSignInPage && {
      fullName: ''
    }),
    email: '',
    password: ''
  })

  // console.log(data)
  return <div className="bg-light-gray w-[60vh] h-[80vh] shadow-lg rounded-lg flex flex-col justify-center items-center">
    <div className="text-4xl font-extrabold text-[#e8eaed]">Welcome {isSignInPage && 'Back'}</div>
    <div className="text font-light text-light mb-8">{isSignInPage ? 'Sign In to explore' : 'Sign up now to get started'}</div>
    
    <form onSubmit={(e)=>{e.preventDefault(); console.log('Submitted')}} className="flex flex-col items-center w-full">
      {!isSignInPage && <Input label="Full name" name="name" placeholder="Enter your full name" className="mb-2" value={data.fullName} onChange={(e) => setData({...data, fullName: e.target.value}) } />}
      <Input label="Email" name="email" type="email" placeholder="Enter your email" className="mb-2" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
      <Input label="Password" name="password" type="password" placeholder="Enter your password" className="mb-8" value={data.password} onChange={(e)=> setData({...data, password: e.target.value})} />
      <Button label="Submit" type="submit" className="w-3/4 mb-2"/>
    </form>
    
    <div className="text-sm font-light text-light">{isSignInPage ? "Don't have an account?" : "Already have an account?"}<span className="cursor-pointer underline px-1">{isSignInPage ? 'Sign up' : 'Sign in'}</span></div>

  </div>;
};

export default LoginSignupForm;
