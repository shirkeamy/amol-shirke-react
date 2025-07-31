import React from 'react';

function App() {
  const userName: string = "Amol Shirke";
  {/*
      How to write large HTML code in React
    
      1. Multiple tag not allowed in React Components
      2. We must have to use one top level tag. Any tag can be used.
      3. Alternative is we can use fragment to wrap multiple tags <></>
      4. If any element/tag is not closed properly then JSX will throw an error.
      5. If we want to use class in JSX element the we have to use className attribute
      We can not use below code directly in react

      <h1>Welcome, {userName} to React + Typescript Tutorial</h1>
      <p>
        This is paragraph and second HTML tag in this file
      </p>
      
      If we write this type of code in React we got the error as 
      "TS2657: JSX expressions must have one parent element."
      
      and to resolve this error 
      we have use parent tag for those both tab like div at a top or we can use fragment.
      Fragment is the best practice to use as top level element

  */}
  return (
    <>
      <h1>Welcome, {userName} to React + Typescript Tutorial</h1>
      <p>
        This is paragraph and second HTML tag in this file
      </p>
    </>
  );
}

export default App;
