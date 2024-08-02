import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

 

function App() {
  return (
    <>
       
       <Navbar/>
       <Routes>
            <Route path='/' element={<Home />} />
             
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>

       </Routes>
    </>
  );
}

export default App;
