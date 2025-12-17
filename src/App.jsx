import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Daftar from "../src/pages/Daftar";
import Dashboard from "./pages/Dashboard";

const ProtectedRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? children : <Navigate to="/" replace />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
