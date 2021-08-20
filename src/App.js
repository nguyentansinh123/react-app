import Nav from './components/Nav';
import {BrowserRouter as Router , Switch, Route,}from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import RegisterAndLoginPage from './components/RegisterAndLogin/RegisterAndLoginPage';
import Login from './components/RegisterAndLogin/Login';
import Product from './components/ProductPage/Product';
import Carts from './components/Cart/Carts';

function App() {
  return (
    <>
    <Router>
     <Nav/>

     <Switch>

       <Route exact path='/'>
         <Home/>
       </Route>

       <Route exact path='/About'>
        <About/>
       </Route>

       <Route exact path='/RegisterAndLoginPage'>
         <RegisterAndLoginPage/>
       </Route>

       <Route exact path='/Login'>
         <Login/>
       </Route>

       <Route exact path='/Product'>
        <Product/>
       </Route>

       <Route exact path='/Cart'>
        <Carts/>
       </Route>
       
       </Switch>
    </Router>
    </>
  );
}

export default App;

