import { useState } from 'react';
import { searchMovies } from '../services/movies.service';


export const useSearch = (onSearchComplete) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e?.preventDefault();
    
    if (!searchQuery.trim()) {
      onSearchComplete?.(null, 'Please enter a search term');
      return;
    }
    
    setIsSearching(true);
    
    try {
      const data = await searchMovies(searchQuery);
      
      if (data && Array.isArray(data.results)) {
        console.log(`Found ${data.results.length} movies for "${searchQuery}"`);
        
        if (data.results.length === 0) {
          onSearchComplete?.([], `No movies found for "${searchQuery}"`);
        } else {
          onSearchComplete?.(data.results, null);
        }
        
        return data.results;
      } else {
        throw new Error('Invalid data structure received from API');
      }
    } catch (error) {
      console.error('Error searching movies:', error);
      const errorMessage = `Search failed: ${error.message}`;
      onSearchComplete?.(null, errorMessage);
      return null;
    } finally {
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return {
    searchQuery,
    setSearchQuery,
    isSearching,
    handleSearch,
    clearSearch
  };
};