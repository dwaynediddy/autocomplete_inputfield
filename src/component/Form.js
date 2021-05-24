import React,{ useState, useEffect } from 'react'
import axios from 'axios'

function Form() {
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
 //can change data from user name to name email etc to fetch other data
       return name.username.match(regex)
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
    <div className="form">
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
        //fetches username can be changed with function to feth other data in api
          key={i}
          onClick={() => onSuggestHandler(suggestion.username)}
          >
            {suggestion.username}
            </div>
      )}
    </div>
  )
}

export default Form