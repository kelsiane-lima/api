import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import EditStock from './pages/EditStock';
import Report from './pages/Report';
import NewProduct from './pages/NewProduct';
import NewFornecedor from './pages/NewFornecedor';
import NewCategoria from './pages/NewCategoria';
import NewFabricante from './pages/NewFabricante';
import NewUsuario from './pages/NewUsuario';
import Home from './pages/Home';
export default function Routes(){
 
    
    return(
        <BrowserRouter>
            <Switch>
        
                 <Route path="/" exact component={Home}/>
                 <Route path="/login" exact component={Login}/>
                <Route path="/profile"  component={Profile} exact/>
                <Route path="/product/new"  component={NewProduct}/>
                <Route path="/product/edit"  component={EditStock}/>
                <Route path="/report"  component={Report}/>
                <Route path="/fornecedor/new" component={NewFornecedor}/>
                <Route path="/categoria/new" component={NewCategoria}/>
                <Route path="/fabricante/new" component={NewFabricante}/>
                <Route path="/usuario/new" component={NewUsuario}/>
                
                <Route component={()=>(<h1>404</h1>)}></Route>
            </Switch>
        </BrowserRouter>
    );
}