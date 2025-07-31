import React from 'react';

function App() {
  const userName: string = "Amol Shirke";
  {/*
      How to install any package into react
    
      If we want to use any library/package into react we have to install it.
      To install library/package, npm help us to install the library/package.
      We can install using 2 ways
      1. using npm in+
      stall command
      2. by adding package into package.json file

      before using any of this step we have to identify the package and
      it version for installtions.
      we can foind any of the package on official site of npm "https://www.npmjs.com/"
      we have to search the package which we want to install into our application like bootstrap

      If we want to install bootstrap into our application we can serach bootstrap on npm's web site
      Then we can select the package from the search result
      and we can see the installation command at right hand side
      "npm i bootstrap"
      just copy it and paste is into the terminal and hit enter
      This will install bootstrap and we able to see the entry will appear into package.json
      file as well.
      and we can do the same installation from package json file as well
      we just need to add package name with it's version into package.json file and
      run "npm install" command into terminal
      "bootstrap": "5.3.7"
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
