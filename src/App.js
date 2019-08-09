import React from 'react';
import logo from './logo.svg';
import './App.css';

const state = {
  territories: [
    {
      id: 1,
      number: 1,
      title: "Territory 1",
      streets: [
        {
          id: 1,
          name: "Name of street 1",
          houses: [
            {
              id: 1,
              number: "11"
            },
            {
              id: 2,
              number: "689"
            },
            {
              id: 3,
              number: "117a"
            }
          ]
        },
        {
          id: 2,
          name: "Name of street 2",
          houses: [
            {
              id: 4,
              number: "02"
            },
            {
              id: 5,
              number: "655"
            },
            {
              id: 6,
              number: "11b"
            }
          ]
        }
      ]
    }
  ]
};

function App() {
  return state.territories.map(territory => {
    return territory.streets.map(street => {
      return (
        <div key={street.id} className="App">
          <p>{street.name}</p>
          {street.houses.map(house => <div key={house.id} >{house.number} </div>)}
        </div>
      );
    });
  });
}

export default App;
