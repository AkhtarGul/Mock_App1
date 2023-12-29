import { Routes, Route,} from "react-router-dom";
import NavBar from "./Navbar";
import User from "./User";

const Dashboard = () => {
  return (
    <div>    
    <NavBar />    
    <Routes>        
          <Route path="/user" element={<User />} />          
    </Routes>
   </div>
  );
}

export default Dashboard;
