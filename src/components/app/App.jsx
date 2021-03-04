import './app.css';
import { Switch, Route } from 'react-router-dom';

import ShopHeader from '../shop-header'
import { HomePage, CartPage} from '../pages';

const App = () => {
  return (
    <main role="main" className="container" >
      <ShopHeader numItems={5} total={215} />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  )
};

export default App;
