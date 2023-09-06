import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello'
import Name from './components/Name';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
// React.StrictMode: アプリケーションの潜在的な問題点を洗い出すためのツール
  <React.StrictMode>
    <Name/>
    {/* App Component*/}
    <Hello />
    <App />
  </React.StrictMode>
);

reportWebVitals();
