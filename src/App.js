import './style/App.css';
import './style/Theme.css'
import './style/fontface.css'
import { Home, News } from './page'
import NavMenu from './components/Navmenu';
import ContextProvider from './context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const baseUrl = '/:locale(th|ch|vn)' ?? '/';

function App() {
  return (

    <ContextProvider>

      <Router>
        
        <NavMenu/>

        <Switch>
          
          <Route 
            exact 
            path={'/'}
            component={Home}
          />

          <Route 
            path='/news' 
            component={News}
          />

          {/* <Route 
            exact 
            path='/:lang' 
            component={Home}
          /> */}

        
        </Switch>
      
      </Router>
      
    </ContextProvider>
  );
}

export default App;