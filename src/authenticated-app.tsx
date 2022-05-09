import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "screens/home";

const AuthenticatedApp = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default AuthenticatedApp;
