import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "Nombre": "Name",
            "Precio": "Price", 
            "Cambio 24H": "Change 24H",
            "Cambiar Tema": "Change Theme",
            "loading": "Loading",
            "error": "Error",
            "retry": "Retry", 
            "refresh": "Refresh",
            "cryptoTable": "Cryptocurrency Table",
            "rank": "Rank",
            "name": "Name",
            "price": "Price",
            "change24h": "24h Change",
            "marketCap": "Market Cap",
            "symbol": "Symbol",
            "volume": "Volume",
            "supply": "Supply",
            "noData": "No data available",
            "searchPlaceholder": "Search cryptocurrencies...",
            "favorites": "Favorites",
            "addToFavorites": "Add to Favorites",
            "removeFromFavorites": "Remove from Favorites",
            "showFavorites": "Show Favorites",
            "showAll": "Show All",
            "clickToSort": "Click columns to sort",
            "sortedBy": "Sorted by",
            "resetSort": "Reset",
            "searchPlaceholder": "Buscar por nombre o símbolo...",
            "clearSearch": "Limpiar búsqueda",
            "searchResults": "resultados encontrados",
            "of": "de",
            "noResults": "No se encontraron resultados",
            "favorites": "Favoritos",
            "addToFavorites": "Agregar a favoritos",
            "removeFromFavorites": "Quitar de favoritos",
            "showAll": "Mostrar todos",
            "showOnlyFavorites": "Mostrar solo favoritos",
            "onlyFavorites": "Solo favoritos",
            "favoritesOnly": "Solo favoritos",
            "noFavorites": "No tienes favoritos aún",
            "favoritesFirst": "Favoritos primero",
            "favoritesCount": "favoritos"            
        }
    },
    es: {
        translation: {
            "Nombre": "Nombre",
            "Precio": "Precio",
            "Cambio 24H": "Cambio 24H",
            "Cambiar Tema": "Cambiar Tema",
            "loading": "Cargando",
            "error": "Error",
            "retry": "Reintentar", 
            "refresh": "Actualizar",
            "cryptoTable": "Tabla de Criptomonedas",
            "rank": "Ranking",
            "name": "Nombre",
            "price": "Precio",
            "change24h": "Cambio 24h",
            "marketCap": "Cap. Mercado",
            "symbol": "Símbolo",
            "volume": "Volumen",
            "supply": "Suministro",
            "noData": "No hay datos disponibles",
            "searchPlaceholder": "Buscar criptomonedas...",
            "favorites": "Favoritos",
            "addToFavorites": "Agregar a Favoritos",
            "removeFromFavorites": "Quitar de Favoritos",
            "showFavorites": "Mostrar Favoritos",
            "showAll": "Mostrar Todas",
            "clickToSort": "Haz clic en las columnas para ordenar",
            "sortedBy": "Ordenado por",
            "resetSort": "Restablecer",
            "searchPlaceholder": "Search by name or symbol...",
            "clearSearch": "Clear search",
            "searchResults": "results found",
            "of": "of",
            "noResults": "No results found",
            "favorites": "Favorites",
            "addToFavorites": "Add to favorites",
            "removeFromFavorites": "Remove from favorites",
            "showAll": "Show all",
            "showOnlyFavorites": "Show only favorites",
            "onlyFavorites": "Only favorites",
            "favoritesOnly": "Favorites only",
            "noFavorites": "You don't have any favorites yet",
            "favoritesFirst": "Favorites first",
            "favoritesCount": "favorites"
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            checkWhitelist: true
        },
        
        interpolation: {
            escapeValue: false
        },
        
        debug: false,
        
        whitelist: ['en', 'es'],
        
        react: {
            useSuspense: false
        }
    });

export default i18n;