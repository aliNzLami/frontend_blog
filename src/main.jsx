import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import RoutesListProvider from './assets/context/RoutesList.jsx';
import {HashRouter} from "react-router-dom"

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <RoutesListProvider>
        <App />
      </RoutesListProvider>,
    </HashRouter>
)
