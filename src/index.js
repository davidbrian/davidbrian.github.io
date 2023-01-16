import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const animateBackdrop = async () => {
  const backdrop = document.getElementById("backdrop");
  const img = document.getElementById("backdrop-img");

  // Add "loaded" class
  img.classList.add("loaded");

  // Wait for 500ms
  await delay(500);

  // Fade out backdrop
  backdrop.style.opacity = "0";

  // Render App component
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  // Wait for 250ms
  await delay(250);

  // Remove backdrop
  backdrop.remove();
};

// Wait for 1s before starting animation
delay(1000).then(animateBackdrop);


// If you want to start measuring performance in your app, pass a functions
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();