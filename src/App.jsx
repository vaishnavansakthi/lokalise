import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Add these imports:
import { useTranslation } from 'react-i18next'

function App() {
  const [count, setCount] = useState(0)
  // Add translation hook:
  const { t, i18n } = useTranslation()

  // Language toggle handler
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* Use translation key */}
      <h1>{t('welcome_message')}</h1>
      <button onClick={toggleLanguage}>
        {i18n.language === 'en' ? 'Français' : 'English'}
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t('count_is', { count })}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App