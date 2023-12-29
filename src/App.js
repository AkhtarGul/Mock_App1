import { Routes, Route, } from 'react-router-dom';
import './App.css';
import SignIn from './Components/Accounts/singin';
import SignUp from './Components/Accounts/signup';
import Dashboard from './Components/Pages/dashboard';

function App() {
  return (
    <div >    
      <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route  path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard/*" element={<Dashboard />} />   
          </Routes>
    </div>
  );
}

export default App;
