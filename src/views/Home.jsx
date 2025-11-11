
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="home-hero">
        <h1 className="home-title">Welcome to Movies SPA</h1>
        <p className="home-subtitle">
          Discover the latest and most popular movies from around the world. 
          Browse through our extensive collection and find your next favorite film.
        </p>
        <Link to="/movies" className="home-cta">
          🎬 Explore Movies
        </Link>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🔥</span>
          <h3 className="feature-title">Popular Movies</h3>
          <p className="feature-description">
            Browse the most popular movies trending right now, updated daily from 
            The Movie Database (TMDB).
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">⭐</span>
          <h3 className="feature-title">Ratings & Reviews</h3>
          <p className="feature-description">
            See movie ratings and detailed information to help you decide what 
            to watch next.
          </p>
        </div>

        <div className="feature-card">
          <span className="feature-icon">📱</span>
          <h3 className="feature-title">Responsive Design</h3>
          <p className="feature-description">
            Enjoy a seamless experience across all your devices with our 
            fully responsive design.
          </p>
        </div>
      </section>
    </div>
  )
}
