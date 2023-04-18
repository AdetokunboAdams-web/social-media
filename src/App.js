import React, {useState} from 'react';
import data from './data.js';
import Card from './Card.js'





function createCard(dataTerm) {
  return(
    <Card
    key = {dataTerm.id}
    id = {dataTerm.id}
    title ={dataTerm.title}
    firstname = {dataTerm.firstName}
    lastname = {dataTerm.lastName}
    picture =  {dataTerm.picture}
   /> 
  );
  
}


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="App">
    <input type='text' placeholder='Search by name...' onChange={(event) => {
      setSearchTerm(event.target.value)
    }}></input>
    <div className='row'>{data.filter((val) => {
      if (searchTerm == ""){
        return val
      } else if (val.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
     return val
    }else if (val.lastName.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return val
    }
    }).map(createCard)}</div>
    
      
    </div>
  );
}

export default App;
