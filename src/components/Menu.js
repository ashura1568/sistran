import React, { Component } from 'react';
import { Form, Button,Layout,Typography } from 'antd';

import {Link} from "react-router-dom";

import { connect } from 'react-redux';

//Subcomponents
import routes from "../configuration/routes";


import logo from '../assets/react.png';

import '../styles/login.css';


const FormItem = Form.Item;



class Menu extends Component {

  render() {

  return (
    <div>
    <div className="div-logo">
    <Typography >
        <Typography.Title level={3} className={"request-form-title"}>
           Bienvenido a la aplicación de contacto
        </Typography.Title>       
    </Typography>
    <img className='logo' alt='background' src={logo} />
    </div>
    <div className={"login-card"}>
      <div className="login-form">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div>
            <FormItem className={"submit"}>
            <div className={"for-links"}>
                <Link to={routes.registro}>
                  <p className={"url-form"}>Crear Contacto</p>
                </Link>
              </div>

              <Button type="primary" htmlType="submit" className="login-form-button" >
                <Link to={routes.listado}>
                <p className={"login-button-text"}>Lista de contactos</p>
                </Link>
              </Button>
    
            </FormItem>
          </div>
        </Form>
        
      </div>
    </div>
    <div className={"bottom-title"}>

    </div>
  </div>
  
  );
}
}

export default connect()(Form.create()(Menu));



