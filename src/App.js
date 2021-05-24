import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {


  return (
    <div className="App">
      <form>
        <label>
          First Name:
          <input type="text" name="first_name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
