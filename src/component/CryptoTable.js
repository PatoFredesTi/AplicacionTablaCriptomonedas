import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line } from 'recharts';
import { theadStyles } from '../styles/styles.thead';
import { toggleLabelStyles } from '../styles/styles.toggle';
import { thStyles } from '../styles/styles.th';
import { tdStyles } from '../styles/styles.td';

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            limit: 10,
            sparkline: true,
            price_change_percentage: '24h',
            region: 'es',
            ids: 'bitcoin,ethereum,tether,BNB,xrp,usdc,solana,cardano,dogecoin',
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

  function handleToggleChange () {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={`h-screen flex flex-col ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-black text-white'}`}>
      <div className="flex items-center justify-between p-5">
        <p>{theme === 'light' ? 'Tema Claro' : 'Tema Oscuro'}</p>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input 
                type="checkbox" 
                id="toggle" 
                className="toggle-input" 
                onChange={handleToggleChange}
                checked={theme === "dark"}
            />
            <label htmlFor="toggle" className="toggle-label"></label>
        </div>
      </div>
      
      <table className={`min-w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
        <thead>
          <tr className={theadStyles(theme)}>
            <th className={thStyles(theme)}>#</th>
            <th className={thStyles(theme)}>Nombre</th>
            <th className={thStyles(theme)}>Precio</th>
            <th className={thStyles(theme)}>Cambio 24H</th>
            <th className={thStyles(theme)}></th>

          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id} className={theadStyles(theme)}>
                <td className={tdStyles(theme)}>{index + 1}</td>
                <td className={tdStyles(theme)}>
                    <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-2" />
                  {crypto.name}
                </td>
                <td className={tdStyles(theme)}>${crypto.current_price.toFixed(2)}</td>
                <td className={tdStyles(theme)}>{crypto.price_change_percentage_24h.toFixed(2)}%</td>
                <td className={tdStyles(theme)}>
                <div className="flex items-center">

        
        <div className="ml-4">
            <LineChart width={100} height={20} data={crypto.sparkline_in_7d.price.map(price => ({ price }))}>
                <Line type="monotone" dataKey="price" dot={false} stroke={theme === 'light' ? 'red' : 'white'} strokeWidth={2} />
            </LineChart>
        </div>
    </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
