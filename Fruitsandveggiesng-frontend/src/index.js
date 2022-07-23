import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { extendTheme } from '@chakra-ui/react'
ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </Provider>,
    // </React.StrictMode>,
    document.getElementById('root')
);