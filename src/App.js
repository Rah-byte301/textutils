import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./Textform";
import About from "./About";
import React, { useState } from "react";
import Alert from "./Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  let toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Black";
      showAlert("dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
    }
  };

  let showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={<TextForm mode={mode} toggle={toggle} />}
            >
              {/*<TextForm mode={mode} toggle={toggle} />*/}
            </Route>
          </Routes>
          {/*<About />*/}
        </div>
      </Router>
    </>
  );
}

export default App;
