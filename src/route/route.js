import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import Tvshow from "../pages/Tvshows";
import Movies from "../pages/Movies";
// import Contact from "../pages/Contact";


function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="Series" element={<Tvshow/>} />
          <Route exact path="Movies" element={<Movies/>} />
            
         
        </Routes>
      </Router>
    );
  }
  export default AppRoute;