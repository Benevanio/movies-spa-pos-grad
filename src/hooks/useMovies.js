import { useState } from 'react';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeApiCall = async (apiFunction, errorMessage = 'Failed to fetch data') => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await apiFunction();
      
      if (data && Array.isArray(data.results)) {
        setMovies(data.results);
        console.log(`Loaded ${data.results.length} movies`);
        
        if (data.results.length === 0) {
          setError('No movies found');
        }
        
        return data.results;
      } else {
        throw new Error('Invalid data structure received from API');
      }
    } catch (error) {
      console.error('API Error:', error);
      setError(`${errorMessage}: ${error.message}`);
      setMovies([]);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => setError(null);
  
  const resetMovies = () => {
    setMovies([]);
    setError(null);
    setLoading(false);
  };

  return {
    movies,
    loading,
    error,
    executeApiCall,
    clearError,
    resetMovies,
    setMovies,
    setError
  };
};