import logo from "./logo.svg";
import "./App.css";

import LoginSignupForm from "./modules/loginSignupForm";
import Dashboard from "./modules/dashboard";

function App() {
  return (
    <div className="bg-dark-gray h-screen flex justify-center items-center">
      {/* <LoginSignupForm /> */}
      <Dashboard />
    </div>
  );
}

export default App;
