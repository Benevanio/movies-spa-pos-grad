import { useState } from 'react';
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies.service';

export const useMovieCategories = () => {
  const [activeCategory, setActiveCategory] = useState('popular');

  const categories = {
    popular: {
      key: 'popular',
      title: '🔥 Popular Movies',
      buttonText: '🔥 Popular',
      apiFunction: getPopularMovies
    },
    top_rated: {
      key: 'top_rated',
      title: '⭐ Top Rated Movies',
      buttonText: '⭐ Top Rated',
      apiFunction: getTopRatedMovies
    },
    upcoming: {
      key: 'upcoming',
      title: '🎬 Upcoming Movies',
      buttonText: '🎬 Upcoming',
      apiFunction: getUpcomingMovies
    },
    search: {
      key: 'search',
      title: '🔍 Search Results',
      buttonText: '🔍 Search',
      apiFunction: null
    }
  };

  const getCategoryTitle = (searchQuery = '') => {
    const category = categories[activeCategory];
    if (activeCategory === 'search' && searchQuery) {
      return `${category.title} for "${searchQuery}"`;
    }
    return category?.title || '🎭 Movies';
  };

  const getCategoryApiFunction = (categoryKey) => {
    return categories[categoryKey]?.apiFunction;
  };

  const getAllCategories = () => {
    return Object.values(categories).filter(cat => cat.key !== 'search');
  };

  return {
    activeCategory,
    setActiveCategory,
    categories,
    getCategoryTitle,
    getCategoryApiFunction,
    getAllCategories
  };
};