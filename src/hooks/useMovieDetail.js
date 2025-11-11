import { useEffect, useState } from 'react';
import { getMovieDetails } from '../services/movies.service';

export const useMovieDetail = (movieId) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) {
        setError('Movie ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setError(`Failed to load movie details: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return {
    movie,
    loading,
    error,
    refetch: () => {
      if (movieId) {
        setLoading(true);
        setError(null);
      }
    }
  };
};