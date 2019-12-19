import React, { Component } from 'react';
import {Form,message} from 'antd';


import { connect } from 'react-redux';

import '../styles/registro.css';

class editarContacto extends Component {

  handleEdit = (e) => {
    e.preventDefault();
    const newNombre = this.getNombre.value;
    const newNumero = this.getNumero.value;
    const data = {
      newNombre,
      newNumero
    }
    if(data=="null"){

    }else{
     message.info('Contacto editado',3);
    }

    this.props.dispatch({ type: 'UPDATE', id: this.props.contacto.id, data: data })
  }
  render() {
  return (
    <div>
      <div className='sign-in-background-crop' >
           
           </div> 

           <div className="Fondo">
           <Form className='home-form-edit'>
            <div className='title'>       
            <h1>Formulario de actualizacion</h1>
          </div>
          <form  className="form" onSubmit={this.handleEdit} >

           <input  required type="text" ref={(input) => this.getNombre = input}
            defaultValue={this.props.contacto.nombre} placeholder="Nombre del contacto" /><br /><br />


           <input  required type="number" ref={(input) => this.getNumero = input}
           defaultValue={this.props.contacto.numero} placeholder="Numero del contacto" /><br /><br />

           <button className={"register-button"}
                  icon="user-add" >Editar</button>
            </form>

          </Form> 

          </div>
    </div> 

  );
  }
  }
export default connect()(Form.create()(editarContacto));
