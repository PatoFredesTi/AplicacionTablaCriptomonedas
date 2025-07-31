import { useState, useEffect } from 'react';

const useCryptoData = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h'
      );
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      setCryptos(data);
    } catch (err) {
      console.error('Error fetching crypto data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para refrescar datos
  const refreshData = () => {
    fetchCryptoData();
  };

  useEffect(() => {
    fetchCryptoData();
    
    // Opcional: Auto-refresh cada 60 segundos
    const interval = setInterval(fetchCryptoData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return {
    cryptos,
    loading,
    error,
    refreshData
  };
};

export default useCryptoData;