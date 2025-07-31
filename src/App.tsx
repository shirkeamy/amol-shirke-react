import React from 'react';

function App() {
  const userName: string = "Amol Shirke";
  return (
    <>
    {/*
      JSX – JavaScript XML
      Allow us to write HTML code in React
      We can code something in between HTML code using {}
    */}

      <h1>Welcome, {userName} to React + Typescript Tutorial</h1>

    </>
  );
}

export default App;
