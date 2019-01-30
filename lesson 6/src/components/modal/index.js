import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalWindows extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {onDelete, toggle, modal} = this.props;    
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle} className={this.props.className}>
          <ModalHeader toggle={toggle}>Удаление</ModalHeader>
          <ModalBody>
            Вы точно собираетесь удалить запись?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onDelete}>Да</Button>
            <Button color="secondary" onClick={toggle}>Нет</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}