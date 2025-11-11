import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🎬 Movies SPA</h1>   
        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
