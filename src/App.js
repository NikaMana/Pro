import React, {Component, useEffect} from 'react';

// import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://127.0.0.1:8000/users');

const App = () => {

const [state, setState] = React.useState({value: []});

useEffect(() => {
  handleFetch();
}, [])

const handleFetch = () => {
  const url = 'http://127.0.0.1:8000/users';

  fetch(url,
    {
      method: 'GET',
    })
    .then(responce => responce.json())
    .then(data => setState(data))
}

    return (

        <div>{state.value.map(el => {
          return (
            <div key={el.name}>{el.name}</div>
          )
        }
        )}</div>

    )

}

export default App;
