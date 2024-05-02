import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ClerkProvider} from '@clerk/clerk-react'
const PUBLISH_ABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if(!PUBLISH_ABLE_KEY){
  throw new Error('CLERK_PUBLISHABLE_KEY is not defined')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISH_ABLE_KEY}>
      <App />
    </ClerkProvider>
  </React.StrictMode>,
)
