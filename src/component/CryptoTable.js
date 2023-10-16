import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { theadStyles } from '../styles/styles.thead';
import { thStyles } from '../styles/styles.th';
import { tdStyles } from '../styles/styles.td';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ScrollToTopButton from './ScrollToTopButton';


function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const { t, i18n } = useTranslation();
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (field) => {
    let sortedData;
    if (sortDirection === "asc") {
      sortedData = [...cryptos].sort((a, b) => a[field] > b[field] ? 1 : -1);
      setSortDirection("desc");
    } else {
      sortedData = [...cryptos].sort((a, b) => a[field] < b[field] ? 1 : -1);
      setSortDirection("asc");
    }
    setCryptos(sortedData);
};

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
            ids: 'bitcoin,ethereum,binancecoin,cardano,xrp,polkadot,uniswap,chainlink,litecoin,bitcoincash,stellar,usd-coin,wrapped-bitcoin,dogecoin,terra,aave,cosmos,monero,eos,neo,tezos,iota,maker,nem,compound,vechain,ftx-token,yearn-finance,algorand,huobi-token,uma,dash,elrond,zcash,decred,ren,sushiswap,theta-token,icon,enjincoin,qtum,bancor,loopring,zilliqa,kyber-network,ontology,reserve-rights,0x,curve-dao-token,horizen,revain,waves,omg-network'
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

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    
    window.addEventListener("scroll", checkScroll);
    
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  if (loading) return <div>Loading...</div>;

  function handleToggleChange () {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className={`flex justify-center ${theme === 'light' ? 'bg-gray-200' : 'bg-black'}`}>
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-black text-white'} p-5 mb-5 w-full max-w-6xl`}>
      <div className="flex items-center justify-between p-5">
        <img src="/logo.png" alt="Logo" className="h-20 w-auto"/>
        <div className="flex items-center space-x-3">
            <LanguageSwitcher />
        </div>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input 
                type="checkbox" 
                id="toggle" 
                role="switch"
                className="toggle-input mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]" 
                onChange={handleToggleChange}
                checked={theme === "dark"}
            />
            <label htmlFor="toggle" className="toggle-label">
              {(t('Cambiar Tema'))}
            </label>
        </div>
        {showScrollButton && <ScrollToTopButton/>}
      </div>
      
      <table className={`min-w-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
        <thead>
          <tr className={theadStyles(theme)}>
            <th className={thStyles(theme)} onClick={() => handleSort("market_cap_rank")}>#</th>
            <th className={thStyles(theme)} onClick={() => handleSort("name")}> {(t('Nombre'))} </th>
            <th className={thStyles(theme)} onClick={() => handleSort("current_price")}>{(t('Precio'))}</th>
            <th className={thStyles(theme)}  onClick={() => handleSort("price_change_percentage_24h")}>{(t('Cambio 24H'))}</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default CryptoTable;
