import logo from "./logo.svg";
import "./App.css";

import LoginSignupForm from "./modules/loginSignupForm";

function App() {
  return (
    <div className="bg-dark-gray h-screen flex justify-center items-center">
      <LoginSignupForm />
    </div>
  );
}

export default App;
