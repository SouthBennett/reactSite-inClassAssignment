import '../components/Hero.css'

export default function Hero(){
    return(
        <section className="hero" id="hero">
            <div className="hero-text">
                <h1>Welcome to Middle-Earth</h1>
                <p>
                    In a world of magic, war, and destiny, the people of Middle-Earth rise to confront the darkness. Explore their stories, strengths, and the paths they walked in the fight against Sauron.
                </p>
            </div>
            <img src="img/one-ring.jpg" alt="middle-earth-map" className="hero-img"/>
        </section>
    );
}