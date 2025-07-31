import React, { useState, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import useCryptoData from '../hooks/useCryptoData';
import useFavorites from '../hooks/useFavorites';
import { useTheme } from '../context/ThemeContext';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';
import useDebounce from '../hooks/useDebounce';
import {
  StyledContainer,
  StyledHeader,
  StyledTitleSection,
  StyledTitle,
  StyledSubtitle,
  StyledRefreshButton,
  StyledTableWrapper,
  StyledTable,
  StyledTableHead,
  StyledTableHeader,
  StyledSortableHeader,
  StyledSortHeaderContent,
  StyledSortArrows,
  StyledSortArrow,
  StyledTableBody,
  StyledTableCell,
  StyledRankContainer,
  StyledRankNumber,
  StyledRankIndicator,
  StyledCryptoNameContainer,
  StyledCryptoLogo,
  StyledCryptoNameInfo,
  StyledCryptoName,
  StyledCryptoSymbol,
  StyledPriceText,
  StyledChangeContainer,
  StyledChangeText,
  StyledTrendIcon,
  StyledMarketCapText,
  StyledSortIndicator,
  StyledResetButton
} from '../styles/CryptoTable.styled';

import {
  StyledSearchContainer,
  StyledSearchWrapper,
  StyledSearchInput,
  StyledSearchIcon,
  StyledClearButton,
  StyledSearchResults
} from '../styles/SearchFilter.styled';

import {
  StyledFavoritesControls,
  StyledFavoritesCounter,
  StyledFavoritesToggle,
  StyledStarButton,
  StyledStarIcon,
  StyledFavoritesBadge
} from '../styles/Favorites.styled';

const CryptoTable = () => {
  const { t } = useTranslation();
  const { cryptos, loading, error, refreshData } = useCryptoData();
  const { isDarkMode } = useTheme();
  const { 
    favorites, 
    isFavorite, 
    toggleFavorite, 
    favoritesCount 
  } = useFavorites();
  
  const [sortConfig, setSortConfig] = useState({ 
    key: 'market_cap_rank', 
    direction: 'asc' 
  });

  const [searchTerm, setSearchTerm] = useState('');
  
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  const toggleFavoritesView = useCallback(() => {
    setShowOnlyFavorites(prev => !prev);
  }, []);

  const filterCryptos = useCallback((cryptos, searchTerm) => {
    if (!searchTerm.trim()) return cryptos;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    return cryptos.filter(crypto => 
      crypto.name.toLowerCase().includes(normalizedSearch) ||
      crypto.symbol.toLowerCase().includes(normalizedSearch) ||
      crypto.id.toLowerCase().includes(normalizedSearch)
    );
  }, []);

  const processedCryptos = useMemo(() => {
    let result = [...cryptos];
    
    result = filterCryptos(result, debouncedSearchTerm);
    
    if (showOnlyFavorites) {
      result = result.filter(crypto => isFavorite(crypto.id));
    }
    
    result = result.sort((a, b) => {
      const aIsFav = isFavorite(a.id);
      const bIsFav = isFavorite(b.id);
      
      if (aIsFav && !bIsFav) return -1;
      if (!aIsFav && bIsFav) return 1;
      if (sortConfig.key) {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
      }
      return 0;
    });
    
    return result;
  }, [cryptos, debouncedSearchTerm, showOnlyFavorites, sortConfig, isFavorite, filterCryptos]);

  const SortableHeaderComponent = ({ children, sortKey }) => {
    const isActive = sortConfig.key === sortKey;
    const isAsc = isActive && sortConfig.direction === 'asc';
    const isDesc = isActive && sortConfig.direction === 'desc';

    return (
      <StyledSortableHeader $isDark={isDarkMode} onClick={() => handleSort(sortKey)}>
        <StyledSortHeaderContent>
          <span>{children}</span>
          <StyledSortArrows>
            <StyledSortArrow 
              $active={isAsc}
              $isDark={isDarkMode}
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 4.586l3.293 2.707a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" clipRule="evenodd" />
            </StyledSortArrow>
            <StyledSortArrow 
              $active={isDesc}
              $isDark={isDarkMode}
              fill="currentColor" 
              viewBox="0 0 20 20"
              style={{ marginTop: '-0.25rem' }}
            >
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" transform="rotate(180 10 10)" />
            </StyledSortArrow>
          </StyledSortArrows>
        </StyledSortHeaderContent>
      </StyledSortableHeader>
    );
  };

  const StarButton = ({ cryptoId, className = '' }) => {
    const isStarred = isFavorite(cryptoId);
    
    return (
      <StyledStarButton
        $isDark={isDarkMode}
        $isFavorite={isStarred}
        onClick={() => toggleFavorite(cryptoId)}
        title={isStarred ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        className={className}
      >
        <StyledStarIcon
          $isFavorite={isStarred}
          $isDark={isDarkMode}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          {isStarred ? (
            //FULL STAR
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          ) : (
            //EMPTY STAR
            <path fillRule="evenodd" d="M10 2l1.09 3.26L14 5.09l-2.36 2.36.59 3.27L10 9.54l-2.23 1.18.59-3.27L6 5.09l2.91.17L10 2zm0 2.24l-.62 1.85-2.07-.12 1.69 1.69-.42 2.34L10 9.46l1.42.54-.42-2.34 1.69-1.69-2.07.12L10 4.24z" clipRule="evenodd" />
          )}
        </StyledStarIcon>
      </StyledStarButton>
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  };

  const formatPercentage = (percentage) => {
    if (percentage === null || percentage === undefined) return 'N/A';
    return `${percentage >= 0 ? '+' : ''}${percentage.toFixed(2)}%`;
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) {
      return `${(marketCap / 1e12).toFixed(2)}T`;
    } else if (marketCap >= 1e9) {
      return `${(marketCap / 1e9).toFixed(2)}B`;
    } else if (marketCap >= 1e6) {
      return `${(marketCap / 1e6).toFixed(2)}M`;
    }
    return `${marketCap?.toLocaleString()}`;
  };

  if (loading) {
    return <LoadingSpinner type="spinner" showSkeleton={true} />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={refreshData} />;
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitleSection>
          <StyledTitle $isDark={isDarkMode}>
            {t('cryptoTable')}
          </StyledTitle>
          <StyledSubtitle $isDark={isDarkMode}>
            {t('clickToSort') || 'Haz clic en las columnas para ordenar'}
          </StyledSubtitle>
        </StyledTitleSection>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <StyledFavoritesControls $isDark={isDarkMode}>
            <StyledFavoritesCounter $isDark={isDarkMode}>
              <span>⭐ {favoritesCount}</span>
            </StyledFavoritesCounter>
            <StyledFavoritesToggle
              $isDark={isDarkMode}
              $active={showOnlyFavorites}
              onClick={toggleFavoritesView}
              title={showOnlyFavorites ? 'Mostrar todos' : 'Mostrar solo favoritos'}
            >
              {showOnlyFavorites ? (
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
              <span>{showOnlyFavorites ? 'Mostrar todos' : 'Solo favoritos'}</span>
            </StyledFavoritesToggle>
          </StyledFavoritesControls>
          <StyledRefreshButton onClick={refreshData}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
              />
            </svg>
            <span>{t('refresh')}</span>
          </StyledRefreshButton>
        </div>
      </StyledHeader>
      <StyledSearchContainer $isDark={isDarkMode}>
        <StyledSearchWrapper $isDark={isDarkMode}>
          <StyledSearchIcon $isDark={isDarkMode}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </StyledSearchIcon>
          <StyledSearchInput
            $isDark={isDarkMode}
            type="text"
            placeholder={t('searchPlaceholder') || 'Buscar por nombre o símbolo...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <StyledClearButton 
              $isDark={isDarkMode}
              onClick={clearSearch}
              title={t('clearSearch') || 'Limpiar búsqueda'}
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </StyledClearButton>
          )}
        </StyledSearchWrapper>
        {(debouncedSearchTerm || showOnlyFavorites) && (
          <StyledSearchResults $isDark={isDarkMode}>
            {processedCryptos.length > 0 ? (
              <span>
                {processedCryptos.length} {t('searchResults') || 'resultados encontrados'}
                {showOnlyFavorites && (
                  <StyledFavoritesBadge $isDark={isDarkMode}>
                    ⭐ Solo favoritos
                  </StyledFavoritesBadge>
                )}
              </span>
            ) : (
              <span className="text-orange-600 dark:text-orange-400">
                {showOnlyFavorites 
                  ? 'No tienes favoritos aún'
                  : (t('noResults') || 'No se encontraron resultados')
                }
              </span>
            )}
          </StyledSearchResults>
        )}
      </StyledSearchContainer>
      <StyledTableWrapper $isDark={isDarkMode}>
        <StyledTable>
          <StyledTableHead $isDark={isDarkMode}>
            <tr>
              <SortableHeaderComponent sortKey="market_cap_rank">
                {t('rank')}
              </SortableHeaderComponent>
              <StyledTableHeader $isDark={isDarkMode}>
                {t('name')}
              </StyledTableHeader>
              <SortableHeaderComponent sortKey="current_price">
                {t('price')}
              </SortableHeaderComponent>
              <SortableHeaderComponent sortKey="price_change_percentage_24h">
                {t('change24h')}
              </SortableHeaderComponent>
              <SortableHeaderComponent sortKey="market_cap">
                {t('marketCap')}
              </SortableHeaderComponent>
              <StyledTableHeader $isDark={isDarkMode}>
                {t('favorites') || 'Favoritos'}
              </StyledTableHeader>
            </tr>
          </StyledTableHead>
          <StyledTableBody $isDark={isDarkMode}>
            {processedCryptos.map((crypto, index) => (
              <tr
                key={crypto.id}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <StyledTableCell $isDark={isDarkMode}>
                  <StyledRankContainer>
                    <StyledRankNumber>{crypto.market_cap_rank}</StyledRankNumber>
                    {isFavorite(crypto.id) && (
                      <StyledFavoritesBadge $isDark={isDarkMode} style={{ marginLeft: '0.5rem' }}>
                        ⭐
                      </StyledFavoritesBadge>
                    )}
                    {sortConfig.key === 'market_cap_rank' && <StyledRankIndicator />}
                  </StyledRankContainer>
                </StyledTableCell>
                <StyledTableCell $isDark={isDarkMode}>
                  <StyledCryptoNameContainer>
                    <StyledCryptoLogo
                      src={crypto.image}
                      alt={crypto.name}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZwogICB3aWR0aD0iMzIiCiAgIGhlaWdodD0iMzIiCiAgIHZpZXdCb3g9IjAgMCAzMiAzMiIKICAgZmlsbD0ibm9uZSIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iI0U1RTdFQiIvPgogIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjgiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                      }}
                    />
                    <StyledCryptoNameInfo>
                      <StyledCryptoName $isDark={isDarkMode}>{crypto.name}</StyledCryptoName>
                      <StyledCryptoSymbol $isDark={isDarkMode}>{crypto.symbol}</StyledCryptoSymbol>
                    </StyledCryptoNameInfo>
                  </StyledCryptoNameContainer>
                </StyledTableCell>
                <StyledTableCell $isDark={isDarkMode}>
                  <StyledPriceText>{formatPrice(crypto.current_price)}</StyledPriceText>
                </StyledTableCell>
                <StyledTableCell $isDark={isDarkMode}>
                  <StyledChangeContainer>
                    <StyledChangeText 
                      $positive={crypto.price_change_percentage_24h >= 0}
                      $isDark={isDarkMode}
                    >
                      {formatPercentage(crypto.price_change_percentage_24h)}
                    </StyledChangeText>
                    <StyledTrendIcon 
                      $positive={crypto.price_change_percentage_24h >= 0}
                      $isDark={isDarkMode}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 4.586l3.293 2.707a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 000 1.414z" clipRule="evenodd" />
                    </StyledTrendIcon>
                  </StyledChangeContainer>
                </StyledTableCell>
                <StyledTableCell $isDark={isDarkMode}>
                  <StyledMarketCapText>{formatMarketCap(crypto.market_cap)}</StyledMarketCapText>
                </StyledTableCell>
                <StyledTableCell $isDark={isDarkMode}>
                  <StarButton cryptoId={crypto.id} />
                </StyledTableCell>
              </tr>
            ))}
          </StyledTableBody>
        </StyledTable>
      </StyledTableWrapper>
      {sortConfig.key && (
        <StyledSortIndicator $isDark={isDarkMode}>
          <span>
            {t('sortedBy') || 'Ordenado por'}: <strong>{t(sortConfig.key) || sortConfig.key}</strong> 
            ({sortConfig.direction === 'asc' ? '↑' : '↓'})
            {favoritesCount > 0 && (
              <span style={{ marginLeft: '1rem', opacity: 0.7 }}>
                • Favoritos primero
              </span>
            )}
          </span>
          <StyledResetButton
            $isDark={isDarkMode}
            onClick={() => setSortConfig({ key: 'market_cap_rank', direction: 'asc' })}
          >
            {t('resetSort') || 'Restablecer'}
          </StyledResetButton>
        </StyledSortIndicator>
      )}
    </StyledContainer>
  );
};

export default CryptoTable;