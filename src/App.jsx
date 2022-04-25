import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Home from "./Home/Home";
import Layout from "./Layout/Layout";
import Loggin from "./Loggin/Loggin";
import Loggin2 from "./Loggin2/Loggin2";
import NoMatch from "./NoMatch/NoMatch";
import Register from "./Register/Register";



function App() {
  return (
    <div >
      

       <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="loggin" element={<Loggin />}/>
        <Route path="loggin2" element={<Loggin2 />}/>
        <Route path="register" element={<Register />}/>
        <Route path="dashboard" element={<Dashboard />}/>

        <Route path="*" element={<NoMatch />} />
        </Route>
       </Routes>

    </div>
  );
}

export default App;
