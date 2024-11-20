import React, { useState } from 'react'
import { LoginSignup } from './Components/LoginSignup/LoginSignup'
import Homepage from './Components/Homepage/Homepage'
function App() {
  // Step 1: Create a state variable to track if the user is logged in.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Create a function that logs the user in.
  const handleLoginSignup = () => {
    setIsLoggedIn(true); // Set isLoggedIn to true, showing the Home component.
  };

  // Conditionally render LoginSignup or Home component based on isLoggedIn.
  return (
    <div className="App">
      {isLoggedIn ? (
        <Homepage /> // Render the Home component if logged in.
      ) : (
        <LoginSignup onLoginSignup={handleLoginSignup} /> // Show LoginSignup if not logged in.
      )}
    </div>
  );
}

export default App;