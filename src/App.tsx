import React, {useState} from 'react';
import './App.css';
import Button from './components/button/Button'
import Form from './components/form/Form';
import ScrollList from './components/list/List';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const formHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }
  return (
    <div className="App">
      
      <h1>Infinite</h1>
      {
        isLoggedIn?
          <>
            <Form isLoggedIn={isLoggedIn} formHandler={formHandler}/>
            <ScrollList />
          </>
        :
          <Form isLoggedIn={isLoggedIn} formHandler={formHandler}/>
      }
      
    </div>
  );
}

export default App;
