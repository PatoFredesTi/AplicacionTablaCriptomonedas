import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            limit: 10,
            sparkline: false,
            price_change_percentage: '24h',
            market_cap: true,
            market_volume: true,
            market_dominance: true,
            market_cap_rank: true,
            market_cap_change_percentage_24h: true,
            market_cap_change_24h: true,
            market_volume_24h: true,
            volume_change_percentage_24h: true,
            region: 'es',
            ids: 'bitcoin,ethereum,dogecoin,litecoin',
          },
        });
        setCryptos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the cryptos", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <tr key={crypto.id}>
              <td className="py-2 px-4">{crypto.name}</td>
              <td className="py-2 px-4">${crypto.current_price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;