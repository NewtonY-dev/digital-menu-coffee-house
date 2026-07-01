import logo from './assets/img/logo.png'

const Header = ({ language, onLanguageChange }) => {
  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'am' : 'en')
  }

  return (
    <header className="top-header">
      <div className="brand-row">
        <div className="brand-identity">
          <img src={logo} alt="Zoe Coffee House logo" className="brand-logo" />
          <p className="brand-name">Zoe Coffee House</p>
        </div>
        <button
          className="language-toggle"
          type="button"
          onClick={toggleLanguage}
          aria-label="Toggle language"
        >
          {language === 'en' ? 'EN' : 'AM'}
        </button>
      </div>
    </header>
  )
}

export default Header
