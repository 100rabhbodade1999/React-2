import React from "react";
import './App.css';
import { Card } from "./Components/ProfileCard";


function App() {
  return (
    <div className="App">
          <Card name1="Saurabh Bodade" bio1="Frontend developer." 
          Profile1= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
      
  
    
    </div>
  );
}

export default App;


export function Name(){
  alert('Saurabh Bodade')
}


