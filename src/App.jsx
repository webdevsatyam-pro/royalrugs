import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-[115px]">
        {" "}
        {/* Navbar ki height ke hisaab se space */}
        <Home />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

// YEH LINE SABSE ZAROORI HAI:
export default App;
