import React from 'react';
import App from './App';
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router} from 'react-router';

const root = createRoot(document.getElementById('root'))
root.render(<Router>
    <App/>
</Router>)