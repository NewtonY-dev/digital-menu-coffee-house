import { useState } from 'react'
import './App.css'
import Header from './header'
import Menu from './menu'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="App">
      <Header language={language} onLanguageChange={setLanguage} />
      <main className="page-main">
        <div className="page-inner">
          <Menu language={language} />
        </div>
      </main>
    </div>
  )
}

export default App
