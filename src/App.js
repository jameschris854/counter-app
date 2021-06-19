import React, { Component, useState } from 'react';
import logo from './logo.svg';
import Header from './component/header/header.component';
import Row from './component/row/row.component'
import './App.css';

const App = () =>{
  const [rows,setRows] = useState([0,1,2])
 
    const handleDelete = (id) => {
      console.log('deleting...',id);
      let oldRows = rows

      let updatedRows = oldRows.filter((oldId) =>!(oldId===id) )

      // console.log(oldRows.filter((oldId) =>!(oldId===id) ));
      setRows(updatedRows)
    }

    return (
      <div className="App">
        <Header />
        {
          rows.map(row =><Row key={row} id={row} handleDelete={handleDelete}/> )
        }
      </div>
    );
  }

export default App;