import '../components/Card.css'

export default function Card ({ character }){
    return(
        <div className="card">
            <h1 className='title'>Heros</h1>

            <h2 className='name'>{character.name}</h2>

            <img className='character-img' src={character.image} alt={character.name} />
            <p className='region'>{character.region}</p>

            <p className='stats'>{character.stats}</p>

            <ul className='details'>
                {character.details.map((item) =>(
                    <li>{item}</li>
                ))}
            </ul>

            <img className="map" src={character.map} alt="Character Maps" />

            <ul className='facts'>
                {character.facts.map((fact)=>(
                    <li>{fact}</li>
                ))}
            </ul>

        </div>
    )
}