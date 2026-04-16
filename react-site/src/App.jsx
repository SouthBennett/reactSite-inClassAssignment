// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Header from './components/Header'
// import './App.css'
import GoodGuys from './components/GoodGuys';
import { characters } from './data/character';
import Hero from './components/Hero'
import Map from './components/Map';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Hero />
      <Map />
      <div >
        <h1>Heros of Lord of The Rings</h1>
          {characters.map((char, index) =>(
            <GoodGuys key={index} character={char}/>
          ))}
      </div>
    </main>
  )
}

export default App
