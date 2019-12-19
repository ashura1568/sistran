//Libraries
import React, { Component } from 'react';
import { Form} from 'antd';
import { connect } from 'react-redux';
import {List} from 'antd';
import Contacto from "./Contacto";
import EditComponent from './editarContacto';



//Styles
import '../styles/listado.css';


class  Listado extends Component {

 

  render(){
    

    return (

      <div className="Fondo3">
      <div className={"approve-request-state-div"}>

          {this.props.contactos.map((contacto) => (
                  <div key={contacto.id}>
                   {contacto.editing ? <EditComponent contacto={contacto} key={contacto.id} /> : <Contacto contacto={contacto}
                   key={contacto.id} />}
                 </div>
                ))}
         <List
            renderItem={(item, k) => (
              <List.Item className={"request-state-list-item"}>       
              </List.Item>
            )}
          />
    </div>
        </div>
    );
  };
}


const mapStateToProps = (state) => {
  return {
      contactos: state
  }
}


export default connect(mapStateToProps)(Form.create()(Listado));

