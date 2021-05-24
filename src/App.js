import './App.css'
import React,{ useState, useEffect } from 'react'
import axios from 'axios'


function App() {
 const [ name, setName ] = useState([])
 const [ text, setText ] = useState('')
 const [ suggestions, setSuggestions ] = useState([])

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

 
//check for matching changes
 const onChangeHandler = text => {
    let matches = []
    
    if(text.length > 0) {
      matches = name.filter(name => {
     
       const regex = new RegExp(`${text}`, 'gi')
 
       return name.name.match(regex)
      })

  }
  console.log('matches', matches)
  setText(text)
  setSuggestions(matches)
 }

 const onSuggestHandler = (text) => {
   setText(text)
   setSuggestions([])

 }
 
 return (
    <div className="App">
      <form>
        <label>
          Name:
          <input 
            type="text" 
            onChange={e => onChangeHandler(e.target.value)} 
            value={text}
            onBlur={() => {
              setTimeout(() => {
                setSuggestions([])

              }, 100)
            }}
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {suggestions && suggestions.map((suggestion, i) => 
        <div 
          key={i}
          onClick={() => onSuggestHandler(suggestion.name)}
          >
            {suggestion.name}
            </div>
      )}
    </div>
  )
}

export default App;
