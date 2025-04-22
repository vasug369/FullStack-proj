import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StateProvider } from "./context/StateProvider";
import reducer,{initialState} from './context/Reducer';

createRoot(document.getElementById('root')).render(
  
      <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
 
  
)
