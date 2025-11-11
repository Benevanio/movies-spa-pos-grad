import { useNavigate, useParams } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import { useMovieDetail, useMovieUtils } from '../hooks';
import './MovieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movie, loading, error } = useMovieDetail(id);
  const { formatRuntime, formatBudget, getImageUrl } = useMovieUtils();

  if (loading) {
    return (
      <div className="movie-detail-container">
        <LoadingSpinner message="Loading movie details..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-detail-container">
        <ErrorMessage message={error} />
        <button className="back-button" onClick={() => navigate('/movies')}>
          ← Back to Movies
        </button>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="movie-detail-container">
        <div className="error-message">
          Movie not found
        </div>
        <button className="back-button" onClick={() => navigate('/movies')}>
          ← Back to Movies
        </button>
      </div>
    );
  }



  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate('/movies')}>
        ← Back to Movies
      </button>

      <div className="movie-detail-content">
        <div className="movie-poster">
          {movie.poster_path ? (
            <img 
              src={getImageUrl(movie.poster_path, 'w500')}
              alt={movie.title}
              className="poster-image"
            />
          ) : (
            <div className="poster-placeholder">
              🎬
            </div>
          )}
        </div>

        <div className="movie-info">
          <h1 className="movie-detail-title">{movie.title}</h1>
          
          {movie.tagline && (
            <p className="movie-tagline">"{movie.tagline}"</p>
          )}

          <div className="movie-meta">
            <div className="meta-item">
              <span className="meta-label">Rating:</span>
              <span className="meta-value">⭐ {movie.vote_average?.toFixed(1)} ({movie.vote_count} votes)</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Release Date:</span>
              <span className="meta-value">📅 {movie.release_date}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Runtime:</span>
              <span className="meta-value">⏱️ {formatRuntime(movie.runtime)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Budget:</span>
              <span className="meta-value">💰 {formatBudget(movie.budget)}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Revenue:</span>
              <span className="meta-value">💵 {formatBudget(movie.revenue)}</span>
            </div>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="movie-genres">
              <h3>Genres:</h3>
              <div className="genres-list">
                {movie.genres.map((genre) => (
                  <span key={genre.id} className="genre-tag">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="movie-overview-section">
            <h3>Overview:</h3>
            <p className="movie-overview-full">
              {movie.overview || 'No overview available.'}
            </p>
          </div>

          {movie.production_companies && movie.production_companies.length > 0 && (
            <div className="production-companies">
              <h3>Production Companies:</h3>
              <div className="companies-list">
                {movie.production_companies.map((company) => (
                  <span key={company.id} className="company-tag">
                    {company.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}