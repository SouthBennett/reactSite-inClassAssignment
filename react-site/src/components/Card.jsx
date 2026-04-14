import '../components/Card.css'

export default function Card (){
    return(
        <div class="card">
            <h1 >
                This is the card function
            </h1>
            <h2>Charactor Name</h2>
            <img src="/Hero-placholder.png" alt="Character Image Place holder" />
            <p>Region</p>
            <p>stats</p>
            <li>
                <ul>
                    Average age
                </ul>
                <ul>
                    Strength
                </ul>
                <ul>
                    Faction
                </ul>
            </li>
            <p>Map to show where they come from</p>
            <li> Facts
                <ul>
                    Random facts
                </ul>
                <ul>
                    Random facts
                </ul>
                <ul>
                    Random facts
                </ul>
                <ul>
                    Random facts
                </ul>
            </li>
        </div>
    )
}