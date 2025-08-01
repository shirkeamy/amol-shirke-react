import React from 'react';

function App() {
  const userName: string = "Amol Shirke";
  {/*
      How to install bootstrap react?
      In last commit we already see how to install any package into react
      In this commit will see how to install and use bootstrap into React 
    
      1. install bootstrap - use below command in terminal
      `npm install bootstrap`

      2. import bootstrap into entry point of react eg. in index.tsx/index.js file
      import "../node_modules/bootstrap/dist/css/bootstrap.css";
      import "../node_modules/bootstrap/dist/js/bootstrap";
      import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

      3. try to use any class from bootstrap in you application eg. row mt-5, text-danger, container etc
      
  */}
  return (
    <>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <h1>Welcome, {userName} to <span className='text-primary'>React + Typescript Tutorial</span></h1>
        </div>
        <div className="col-4">
          <p className=''>
            This is paragraph and second HTML tag in this file.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit porro aliquam delectus possimus ea sapiente rerum maxime accusantium, ex commodi?
          </p>
        </div>
        <div className="col-4">
          <p className=''>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, hic rem dolorem praesentium ab neque consequatur fugiat dignissimos consequuntur reprehenderit repellendus deserunt nobis, nisi veritatis saepe aperiam sequi quos nostrum iste est, ratione explicabo voluptatum nihil. Quo, a, in eos ipsum quas cumque eveniet quos esse pariatur amet debitis totam.
          </p>
        </div>
        <div className="col-4">
          <p className=''>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nemo consectetur officia aliquam, quisquam quidem autem fugiat nesciunt laboriosam accusamus quis porro harum vitae minus fuga voluptatibus nostrum odit dolores.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
