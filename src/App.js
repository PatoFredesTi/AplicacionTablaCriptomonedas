import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CryptoTable from '../src/component/CryptoTable';
import ScrollToTopButton from '../src/component/ScrollToTopButton';
import ThemeToggle from '../src/component/ThemeToggle';
import LanguageSelector from '../src/component/LanguageSelector';
import '../src/i18n/i18n';
import './styles/animations.css';

function App() {
  console.log("Thank you for Watching");
  console.log("This is a reworked version of a project from 2022, updated in 2025")
  console.log("You can see the prev version under the 'original' tag")
  console.log("Wanna know more? Check out my Github or Portfolio")

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg">₿</span>
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 blur transition-all duration-300"></div>
                </div>
                
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
                    CryptoTable
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Real-time cryptocurrency data
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="hidden lg:flex items-center space-x-6 px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Market</div>
                    <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                      🟢 Active
                    </div>
                  </div>
                  <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Update</div>
                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Live
                    </div>
                  </div>
                </div>
                <LanguageSelector />
                <ThemeToggle />
                
              </div>
            </div>
          </div>
        </header>
        <section className="py-8 px-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-b border-gray-200 dark:border-gray-600">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Top 100</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Cryptocurrencies</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Updates</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Real-time</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">🔄</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Refresh</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">60s Auto</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 dark:text-orange-400 font-bold">🌍</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Source</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">CoinGecko</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <main className="flex-1 py-8">
          <CryptoTable />
        </main>
        <footer className="bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
              
              <div className="flex items-center space-x-4 ">
                <div >
                  <span>© 2025 Patricio Fredes</span>
                  <div>
                  <a href="https://github.com/PatoFredesTi" target="_blank">GitHub</a> | 
                  <a href="https://www.linkedin.com/in/patriciofredesti/" target="_blank">LinkedIn</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-xs text-gray-500 dark:text-gray-400">
                
              </div>

            </div>
          </div>
        </footer>

        <ScrollToTopButton />
        
      </div>
    </ThemeProvider>
  );
}

export default App;