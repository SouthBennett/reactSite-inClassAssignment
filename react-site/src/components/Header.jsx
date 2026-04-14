import "../components/Header.css"

export default function Header() {
  return (
    <header className="header">
      <img src="/img/lort.jpg" alt="lotr-logo" className="nav-logo"/>
      <h1 className="title">The Free Peoples of Middle-Earth</h1>
      
      <nav>
        <a href="#" className="nav-link">Card</a>
        <a href="#" className="nav-link">Hero</a>
      </nav>
    </header>
  );
}