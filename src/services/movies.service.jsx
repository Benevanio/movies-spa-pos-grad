const API_BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = process.env.REACT_APP_MOVIES_API_BEARER_TOKEN;

const defaultHeaders = {
    'accept': 'application/json',
    'Authorization': `Bearer ${BEARER_TOKEN}`,
};

async function apiRequest(url) {
    if (!BEARER_TOKEN) {
        throw new Error('API Bearer Token not configured');
    }

    const response = await fetch(url, {
        method: 'GET',
        headers: defaultHeaders,
    });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    return response.json();
}

export async function getPopularMovies(page = 1) {
    return apiRequest(`${API_BASE_URL}/movie/popular?language=en-US&page=${page}`);
}

export async function getMovieDetails(movieId) {
    return apiRequest(`${API_BASE_URL}/movie/${movieId}?language=en-US`);
}

export async function searchMovies(query, page = 1) {
    if (!query || query.trim() === '') {
        throw new Error('Search query cannot be empty');
    }
    
    const encodedQuery = encodeURIComponent(query.trim());
    return apiRequest(`${API_BASE_URL}/search/movie?query=${encodedQuery}&language=en-US&page=${page}`);
}

export async function getTopRatedMovies(page = 1) {
    return apiRequest(`${API_BASE_URL}/movie/top_rated?language=en-US&page=${page}`);
}

export async function getUpcomingMovies(page = 1) {
    return apiRequest(`${API_BASE_URL}/movie/upcoming?language=en-US&page=${page}`);
}