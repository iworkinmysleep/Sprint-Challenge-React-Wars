import React, { useState, useEffect } from 'react';
import './App.css';
import PeopleCard from './components/PeopleCard'
import axios from 'axios';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
        .get('https://swapi.py4e.com/api/people/1/')
        .then(response => {
        console.log(response);
            setPeople(response.data.results);
        })
        .catch(error => {
            console.log("Error!!", error)
        });
  }, []);


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((person, index)  => (
          <PeopleCard person={person} key={index}/>
      ))} 
    </div>
  );
}

export default App;
