import App from './App.jsx'
import './index.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ChakraProvider>
      <App />
    </ChakraProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)

