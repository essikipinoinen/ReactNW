import './App.css'
import Laskuri from './laskuri'
import Viesti from './viesti'
import React, { useState } from 'react'
import Posts from './Posts'
import CustomerList from './CustomerList'
import Message from './Message'


const App = () => {

  const [showLaskuri, setShowLaskuri] = useState(false)

  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  const [isPositive, setIsPositive] = useState(false)


  const huomio = () => {
    alert("Huomio!")
  }

  return (
    <div className="App">
      <h1>Heippa Reactista!</h1>

      {showMessage && <Message message={message} isPositive={isPositive} />}

      <CustomerList setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage} />

      <Posts />

      {showLaskuri && <Laskuri huomio={huomio} />}
      {!showLaskuri && <button className='nappi' onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}
      {showLaskuri && <button className='nappi' onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      <Viesti teksti="Tervehdys App -komponentista!" />

    </div>
  )
}

export default App
