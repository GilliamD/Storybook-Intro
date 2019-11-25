import React from 'react';
import Heading from "./component/heading"

function App() {
  const style ={
    fontSize:"64px"
  }
  return (
    <div className="App">
      <Heading style={style} text={"This is inline styled"} />
    </div>
  );
}

export default App;
