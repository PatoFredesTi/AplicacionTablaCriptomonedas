import { useState, useEffect, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'crypto-table-favorites';
const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);
        if (Array.isArray(parsedFavorites)) {
          setFavorites(parsedFavorites);
        }
      }
    } catch (error) {
      console.warn('Error loading favorites from localStorage:', error);
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.warn('Error saving favorites to localStorage:', error);
    }
  }, [favorites]);
  const isFavorite = useCallback((cryptoId) => {
    return favorites.includes(cryptoId);
  }, [favorites]);

  const toggleFavorite = useCallback((cryptoId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(cryptoId)) {
        return prevFavorites.filter(id => id !== cryptoId);
      } else {
        return [...prevFavorites, cryptoId];
      }
    });
  }, []);

  const addToFavorites = useCallback((cryptoId) => {
    setFavorites(prevFavorites => {
      if (!prevFavorites.includes(cryptoId)) {
        return [...prevFavorites, cryptoId];
      }
      return prevFavorites;
    });
  }, []);

  const removeFromFavorites = useCallback((cryptoId) => {
    setFavorites(prevFavorites => 
      prevFavorites.filter(id => id !== cryptoId)
    );
  }, []);

  const clearAllFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const getFavoriteIds = useCallback(() => {
    return [...favorites];
  }, [favorites]);

  const favoritesCount = favorites.length;

  const hasFavorites = favoritesCount > 0;

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    addToFavorites,
    removeFromFavorites,
    clearAllFavorites,
    getFavoriteIds,
    favoritesCount,
    hasFavorites
  };
};

export default useFavorites;