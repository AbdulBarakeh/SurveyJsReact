import React, { StrictMode } from "react";
// import ReactDOM from "react-dom";
import App from "./App.jsx";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
