import '../components/Map.css'

export default function Map(){
    return(
        <section className="map-section">
            <h2 className="map-title">The Journey of the Fellowship</h2>
            <div className="map-container">
                <img src="/img/fellowship-path.png" alt="middle-earth-map" className="map-img"/>
            </div>

            <ul className="map-facts">
                <li>
                    <strong>The Shire:</strong> Frodo begins his journey, leaving behind
                    a peaceful life in Hobbiton with Sam.
                </li>

                <li>
                    <strong>Bree:</strong> The Hobbits meet Aragorn (Strider), who becomes
                    their guide and protector.
                </li>

                <li>
                    <strong>Rivendell:</strong> The Fellowship is formed, uniting members
                    of different races to destroy the One Ring.
                </li>

                <li>
                    <strong>Moria:</strong> The Fellowship travels through the mines where
                    Gandalf falls battling the Balrog.
                </li>

                <li>
                    <strong>Lothlórien:</strong> Galadriel gifts the Fellowship items that
                    aid them on their journey.
                </li>

                <li>
                    <strong>Amon Hen:</strong> Boromir tries to take the Ring, causing the
                    Fellowship to break apart.
                </li>

                <li>
                    <strong>Rohan / Helm’s Deep:</strong> Aragorn, Legolas, and Gimli help
                    defend Rohan against Saruman’s army.
                </li>

                <li>
                    <strong>Gondor / Minas Tirith:</strong> Gandalf leads the defense of
                    Gondor against Sauron’s forces.
                </li>

                <li>
                    <strong>Paths of the Dead:</strong> Aragorn summons the Army of the Dead
                    to fulfill an ancient oath.
                </li>

                <li>
                    <strong>Dead Marshes:</strong> Frodo and Sam travel through a haunted
                    battlefield filled with fallen warriors.
                </li>

                <li>
                    <strong>Cirith Ungol:</strong> Frodo is captured by Orcs, and Sam must
                    rescue him.
                </li>

                <li>
                    <strong>Mount Doom:</strong> The Ring is ultimately destroyed when
                    Gollum falls into the lava with it.
                </li>
            </ul>
            
        </section>
    );
}