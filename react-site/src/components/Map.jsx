import '../components/Map.css'

export default function Map(){
    return(
        <section className="map-section">
            <div className="map-container">
                <h1 className="map-title" >This is a Section to show the map of the travels of the Fellowship with some travel facts under it</h1>
                <img src="/img/fellowship-path.png" alt="middle-earth-map" className="map-img"/>
            </div>
            
        </section>
    );
}