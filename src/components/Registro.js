//Libraries
import React, { Component } from 'react';
import {message, Form, Typography } from 'antd';

import { connect } from 'react-redux';
import nextId from "react-id-generator";
//Styles
import '../styles/registro.css';
import '../styles/login.css';


class Registro extends Component {


  handleSubmit = (e) => {


    e.preventDefault( 
    );
     const nombre = this.getNombre.value;
     const numero = this.getNumero.value;
      var a=nextId()
      var b=a.split("id",2)
     const data = {
      id: b,
      nombre,
      numero,
      editing: false
     }

     if(data=="null"){

     }else{
      message.info('Contacto creado',3);
     }

     this.props.dispatch({
      type: 'ADD_CON',
      data  
      })

     this.getNombre.value = '';
     this.getNumero.value = '';
    }

  render(){

 

    return (

  <div className={"Fondo"}>

  <div className="div-meeting" >

  <Form className='home-form'> 
    <Typography >
    <Typography.Title level={3} className={"request-form-title"}>
     Formulario de registro
    </Typography.Title>       
    </Typography>


    <form  className="form" onSubmit={this.handleSubmit} >

    <input  className={"form-select-content"} required type="text" ref={(input) => this.getNombre = input}
    placeholder="Nombre del contacto" /><br /><br />


      <input  className={"form-select-content"} required type="number" ref={(input) => this.getNumero = input}
    placeholder="Numero del contacto" /><br /><br />

    <button className={"register-button"}   onSubmit={this.handleSubmit} 
    icon="user-add" >Guardar</button>
    </form>
    </Form> 

    </div> 

    </div>
      
    );
    
  
  };
  
}

export default connect()(Form.create()(Registro));
