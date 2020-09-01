import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
import DataFetch from "./DataFetch";

function App() {
  return (
    <div className="app">
      <DataFetch />
    </div>
  );
}

export default App;
