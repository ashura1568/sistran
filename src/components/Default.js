import React, { Component } from 'react';
import {Form,message} from 'antd';


import { connect } from 'react-redux';

import '../styles/login.css';

class Default extends Component {

  render() {
  return (
  <div className="Fondodf">
    <h1>Hola</h1>
  </div>

  );
  }
  }
export default connect()(Form.create()(Default));
