import { Routes, Route,} from "react-router-dom";
import NavBar from "./Navbar";
import User from "./User";
import Posts from "./Posts";
import Products from "./Products";
import ProductViewDetails from "./ProductViewDetails";

const Dashboard = () => {
  return (
    <div>    
    <NavBar />    
    <Routes>        
          <Route path="/user" element={<User />} />          
          <Route path="/posts" element={<Posts />} />         
          <Route path="/products" element={<Products />} />  
          <Route path='/products/:id'  element={<ProductViewDetails />} />          
    </Routes>
   </div>
  );
}

export default Dashboard;


//tse