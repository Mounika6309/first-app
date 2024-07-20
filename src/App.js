import Menu from "./components/menu";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/Home";
import { Route,Routes } from "react-router-dom";
import VehicleList from "./components/Vehicle List";
function App(){
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      
      <Route path="/vehicle-list" element={(<VehicleList/>)}/>

    </Routes>
    <Footer/>
    </>
  )
}
export default App;