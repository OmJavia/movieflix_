import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "../pages/Home";
import Tvshow from "../pages/Tvshows";
import Movies from "../pages/Movies";
import Fav from "../pages/Fav";

function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="Series" element={<Tvshow/>} />
          <Route exact path="Movies" element={<Movies/>} />
          <Route exact path="Fav" element={<Fav/>} />  
        </Routes>
      </Router>
    );
  }
  export default AppRoute;