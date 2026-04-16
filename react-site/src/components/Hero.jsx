import '../components/Hero.css'

export default function Hero(){
    return(
        <section className='hero'>
            <div className="hero-text">
                <h1>Welcome to Middle-Earth</h1>
                <p>
                    Explore the heroes of Middle-Earth, their origins, strengths, and the legends that shaped the War of the Ring.
                </p>
            </div>
            <img src="img/one-ring.jpg" alt="middle-earth-map" className="hero-img"/>
        </section>
    );
}