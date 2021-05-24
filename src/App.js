import './App.css'
import React,{ useState, useEffect } from 'react'
import axios from 'axios'


function App() {
 const[ name, setName ] = useState([])

 useEffect(() => {
   //load api data and set it to state
   const loadNames = async () => {
   
   const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  //check the response by logging in console
   console.log(res.data)

   setName(res.data)
   }
   loadNames()
 }, [])

 
 
//  //check for matching changes
//  const onChangeHandler = text => {
//   //  setName(text)
//   //  setSuggestions(suggestions)

//    let suggestions = []

//    if(text.length > 0) {
//      suggestions = name.filter(name => {
    
//       const regex = new RegExp(`${text}`, 'gi')

//       return name.name.suggestions(regex)
//      })
//    }
//   //  setSuggestions(suggestions)
//   //  setText(text)
//  }
 return (
    <div className="App">
      <form>
        <label>
          Name:
          <input 
            type="text" 
            name="first_name" 
            // onChangeHandler={e => onChangeHandler(e.target.name)} 
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
