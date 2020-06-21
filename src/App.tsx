import React from 'react';
import logo from './logo.svg';
import styles from './styles/App.module.css';

function App() {
  console.log(styles)
  const {App, AppLogo, AppHeader, AppLink} = styles;

  return (
    <div className={App}>
      <header className={AppHeader}>
        <img src={logo} className={AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
