import React from 'react';
import {Button, Header, Modal, Form} from 'semantic-ui-react';

const modalLogin = ({modal, onChange, loginName, toggle}) => {
return(
  <Modal open = {modal}>
<Modal.Content>
  <Modal.Description>
    <Header>Chat</Header>
    <p>Введіть своє ім'я для входу в чат</p>
  </Modal.Description>
</Modal.Content>
<Form.Input fluid label = {loginName} onChange={onChange} placeholder = "Enter name"/>
<Button fluid onClock = {toggle}>Submit</Button>
  </Modal>
)
};

export default modalLogin;