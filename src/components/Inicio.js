import React, { Component } from 'react';
import { Form,Layout } from 'antd';
import { Redirect } from "react-router";
import {Route, Switch} from "react-router-dom";

//Subcomponents
import routes from "../configuration/routes";


import Menu from "./Menu";
import registro from "./Registro";
import listado from "./Listado";
import def from "./Default"

import '../styles/login.css';



const {Sider} = Layout;

const menuWall = Form.create()(Menu);
const RegistroWall = Form.create()(registro);
const ListadoWall = Form.create()(listado);
const DefaultWall = Form.create()(def);

class Inicio extends Component {



  render() {

  return (
    
    <Layout>

            <Sider width={400} style={{backgroundColor: "#fff"}}>
  
                <Menu/>
              
            </Sider>
            <Layout className={"background-sider"}>

            <Switch>      
                  <Route path={routes.menu} component={menuWall} />   
                  <Route path={routes.registro} component={RegistroWall} />
                  <Route path={routes.listado} component={ListadoWall } />
                  <Route path={routes.default} component={DefaultWall } />
                  <Route render = {()=><Redirect to={routes.default}/>}/>
                </Switch>

            </Layout>
            </Layout>
  );
}
}


export default (Inicio);


