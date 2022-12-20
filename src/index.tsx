import React from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles'

import theme from './theme/index';
import App from './components/App';

const container = document.getElementById('root')!
const root = createRoot(container);
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);