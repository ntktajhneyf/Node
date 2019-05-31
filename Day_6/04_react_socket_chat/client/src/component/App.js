import React, {Component} from 'react';
import Modal from './Modal/Modal';
import Chat from './Chat/Chat';
import './App.css';



export default class App extends Component{
state = {
  loginName:"",
  modal:false
}

handleChange = e =>{
  e.preventDefault();
  let name = e.target.value;
  this.setState({
    loginName: name
  })
};

toggleModal = () =>{
  this.setState(prevState=>({modal: !prevState.modal}));
}


render (){
  const {modal, loginName} = this.state;
  return(
    <>
    {modal?<Modal modal={modal} onChange = {this.handleChange} loginName = {loginName}
toggle = {this.toggleModal}/>:<Chat login ={loginName}/>}
</>
  );
}
}
