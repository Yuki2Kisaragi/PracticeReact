import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/PraUseState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
// React.StrictMode: アプリケーションの潜在的な問題点を洗い出すためのツール
  <React.StrictMode>
    <Counter initialValue={0}/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
