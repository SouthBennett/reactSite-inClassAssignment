// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import Header from './components/Header'
import './App.css'
import Card from './components/Card';
import { characters } from './data/character';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <div >
          {characters.map((char, index) =>(
            <Card key={index} character={char}/>
          ))}
      </div>
    </main>
  )
}

export default App
