import { Link } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import { useMovieCategories, useMovies, useSearch } from '../hooks';
import './movies.css';

export default function Movies() {
  const { movies, loading, error, executeApiCall, setMovies, setError } = useMovies();
  const { activeCategory, setActiveCategory, getCategoryTitle, getCategoryApiFunction } = useMovieCategories();
  
  const { searchQuery, setSearchQuery, isSearching, handleSearch } = useSearch(
    (results, searchError) => {
      setActiveCategory('search');
      if (searchError) {
        setError(searchError);
        setMovies([]);
      } else {
        setMovies(results || []);
        setError(null);
      }
    }
  );

  const handleCategoryClick = async (categoryKey) => {
    const apiFunction = getCategoryApiFunction(categoryKey);
    if (apiFunction) {
      setActiveCategory(categoryKey);
      await executeApiCall(apiFunction, 'Failed to load movies');
    }
  };

  return (
    <div className="movies-container">
      <h1 className="movies-title">{getCategoryTitle(searchQuery)}</h1>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            disabled={loading || isSearching}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={loading || isSearching || !searchQuery.trim()}
          >
            {isSearching ? '🔄' : '🔍'}
          </button>
        </div>
      </form>
      
      <div className="movies-controls">
        <button 
          className={`category-button ${activeCategory === 'popular' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('popular')} 
          disabled={loading || isSearching}
        >
          {loading && activeCategory === 'popular' ? '🔄 Loading...' : '🔥 Popular'}
        </button>
        
        <button 
          className={`category-button ${activeCategory === 'top_rated' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('top_rated')} 
          disabled={loading || isSearching}
        >
          {loading && activeCategory === 'top_rated' ? '🔄 Loading...' : '⭐ Top Rated'}
        </button>
        
        <button 
          className={`category-button ${activeCategory === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleCategoryClick('upcoming')} 
          disabled={loading || isSearching}
        >
          {loading && activeCategory === 'upcoming' ? '🔄 Loading...' : '🎬 Upcoming'}
        </button>
      </div>
      
      {error && (
        <ErrorMessage message={error} />
      )}
      
      {Array.isArray(movies) && movies.length > 0 ? (
        <ul className="movies-grid">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-card">
              <Link to={`/movies/${movie.id}`} className="movie-card-link">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-overview">
                  {movie.overview || 'No description available.'}
                </p>
                <div className="movie-details">
                  <span className="movie-rating">
                    ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
                  </span>
                  <span className="movie-date">
                    📅 {movie.release_date || 'Unknown'}
                  </span>
                </div>
                <div className="movie-card-footer">
                  <span className="view-details">👁️ View Details</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        !(loading || isSearching) && (
          <div className="empty-state">
            {activeCategory === 'search' && searchQuery 
              ? `🎥 No movies found for "${searchQuery}". Try a different search term!`
              : '🎥 No movies loaded yet. Choose a category above to browse movies!'
            }
          </div>
        )
      )}
    </div>
  );
}
