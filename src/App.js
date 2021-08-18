import './style/Theme.css'
import './style/fontface.css'
import { Home, News } from './page'
import ContextProvider from './context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HeaderHome from './components/Header/HeaderHome';

function App() {
  return (

    <ContextProvider>

      <Router>

      <HeaderHome/>


        <Switch>
          
          <Route 
            exact 
            path='/'
            component={Home}
          />

          <Route 
            path='/:lang(ch|th|vn)' 
            component={Home}
          />

          <Route 
            path='/news' 
            component={News}
          />

          <Route 
            path='/news/:lang(ch|th|vn)' 
            component={News}
          />

        </Switch>
      
      </Router>
      
    </ContextProvider>
  );
}

export default App;