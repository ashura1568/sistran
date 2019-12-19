//Libraries
import React, {Component} from 'react';
import {Col, Row, Tooltip, Icon, Badge,Form} from 'antd';
import { connect } from 'react-redux';
//Styles
import '../styles/contacto.css';




class Contacto extends Component {
 
  render(){


    let contacto = this.props.contacto;
    return (
      <div>
     

      <Badge>
          <div key={contacto.key} className={"request-state-item-requested"}>
            <Row>
              
              <Col xxl={6} className="request-item-initial-col">
                <b>Contacto #</b><br></br><br></br>
                {contacto.id} 
              </Col >
              <Col  xxl={6} className="request-item-initial-col" >
                  <b>Nombre del contacto</b>  <br></br><br></br>
                  {contacto.nombre}
              </Col>
              <Col    xxl={6} className="request-item-initial-col">
                  <b>Numero del contacto</b>  <br></br><br></br>
                  {contacto.numero}
              </Col>
              
              <Col  xxl={2} >
                <Tooltip title="Editar Contacto">
                  <Icon type={"check-circle"} className={"request-item-icon-approve"} onClick={() => this.props.dispatch({ type: 'EDIT_CON', id: this.props.contacto.id })
                 }/> 
                </Tooltip>
              </Col>
              <Col xxl={2} >
                <Tooltip title="Eliminar Contacto">
                  <Icon type={"close-circle"} className={"request-item-icon-reject"} onClick={() => this.props.dispatch({ type: 'DELETE_CON', id: this.props.contacto.id })}/> 
                </Tooltip>
              </Col> 
            </Row>

        </div>

     
      </Badge>

      </div>

    );
  };

}

export default connect()(Form.create()(Contacto));
