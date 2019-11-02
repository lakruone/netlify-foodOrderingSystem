import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Footerpage from './components/Footerpage';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

import Image from './components/Admin/Image'

//Admin

import AdminHome from './components/Admin/AdminHome';
import AddProduct from './components/Admin/AddProduct';
import Yourprofile from './components/Admin/Yourprofile';
import Editprofile from './components/Admin/Editprofile';
import EditProduct from './components/Admin/EditProduct';
import DairyProduct from './components/Admin/DairyProduct';
import CusFeedback from './components/Admin/CusFeedback';

//Customer
import CustomerHome from './components/Customer/CustomerHome';
import CustomerPro from './components/Customer/CustomerPro';
import Cart from './components/Customer/Cart';
import AddCart from './components/Customer/AddCart';
import Feedback from './components/Customer/Feedback';
import Payment from './components/Customer/Payment';
import CustomerProfile from './components/Customer/CustomerProfile';
import CustomerEditProfile from './components/Customer/CustomerEditProfile';


import './App.css';

class App extends Component {
  render() {


    return (

    <div className="App">
        <div>
          <Router>
            <div>
              {/* <SideNavPage />  */}
                  <Route exact path="/" component={ Home } />
                <div className="container">

                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/register" component={ Register } />

                  <Route exact path="/ChangeImage/:id" component={ Image } />

                  {/* Admin */}
                  <Route exact path="/adminhome" component={ AdminHome } />
                  <Route exact path="/yourprofile" component={ Yourprofile } />
                  <Route exact path="/editprofile" component={ Editprofile } />
                  <Route exact path="/dairyProduct/:id" component={ DairyProduct } />
                  <Route exact path="/editProduct/:id" component={ EditProduct } />
                  <Route exact path="/addProduct/:id" component={ AddProduct } />
                  <Route exact path="/cusfeedback/:id" component={ CusFeedback } />

                  {/* Customer */}
                  <Route exact path="/customerhome" component={ CustomerHome } />
                  <Route exact path="/CustomerPro/:id" component={ CustomerPro } />
                  <Route exact path="/cart" component={ Cart } />
                  <Route exact path="/addCart/:id" component={ AddCart } />

                  <Route exact path="/feedback/:id" component={ Feedback } />
                  <Route exact path="/payment/:id" component={ Payment } />
                 <Route exact path="/CustomerProfile" component={ CustomerProfile } />
                  <Route exact path="/CustomerEditProfile" component={ CustomerEditProfile } />



                </div>
                <br/><br/>
                <Footerpage/>
            </div>
          </Router>
        </div>

    </div>



    );
  }
}

export default App;
