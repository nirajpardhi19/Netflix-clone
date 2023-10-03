
import React from 'react';
import './App.css';
import MovieDetail from './MovieDetail';
import Navbar from './Components/Navbar';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <div>
      <Navbar data={setIsLoggedIn} initial={isLoggedIn}/>
      {/* <MovieDetail/> */}
    </div>
    
  );
}

export default App;
