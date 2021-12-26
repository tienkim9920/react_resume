import "./App.css";
import avt from "./assets/avt.jpg";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Profile from "./component/Profile";
import Work from "./component/Work";
import Project from "./component/Project";
import Address from "./component/Address";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="layout-wrapper-content">
          <div className="group-content-left">
            <div>
              <div className="customize-block">
                <div className="tab-navigation">
                  <i className="fa fa-reorder size-icon"></i>
                </div>
                <div className="mr-top-tab">
                  <div className="tab-navbar">
                    <NavLink className="fa fa-user-circle-o size-icon un-active" exact="true" activeclassname="is-active" to="/">
                    </NavLink>
                  </div>
                  <div className="tab-navbar">
                    <NavLink className="fa fa-briefcase size-icon un-active" exact="true" activeclassname='is-active' to='/work'>
                    </NavLink>
                  </div>
                  <div className="tab-navbar">
                    <NavLink className="fa fa-book size-icon un-active" exact="true" activeclassname='is-active' to='/project'>
                    </NavLink>
                  </div>
                  <div className="tab-navbar">
                    <NavLink className="fa fa-paper-plane size-icon un-active" exact="true" activeclassname='is-active' to='/address'>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <img className="my-avatar" src={avt} />
          </div>
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route path="/work" element={<Work />} />
            <Route path="/project" element={<Project />} />
            <Route path="/address" element={<Address />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
