import axios from 'axios'
import './App.css'
import { useState } from 'react'

function App() {

  const getInfo = () => {
    const uri = 'http://localhost:2000/test'
    axios.get (uri)
      .then (res => {
        console.log (res.data)
      })
      .catch (err => {
        console.log (err)
      })
  }



  // const [ , set ] = useState('')
  // const [ , set ] = useState('')
  // const [ , set ] = useState('')

  return (
    <>
    <button onClick={getInfo}>get info </button>
    {/* <input type="text" placeholder='Name' />
    <input type="email" placeholder='Email Address'/>
    <input type="password" placeholder='Password'/>
    <button type='submit'>submit</button> */}
    </>
  )
}

export default App
