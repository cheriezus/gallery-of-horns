import React from 'react';
import './SelectedBeast.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {


  render() {
    return (
      <Modal
        size="md"
        show={this.props.isModalDisplaying}
        onHide={this.props.closeModalControl}>
        <Modal.Header>
          <Modal.Title>
            {this.props.modalName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.modalImg}
            alt={this.props.modalDesc}
            title={this.props.modalName}
          />
          <Modal.Body>
            {this.props.modalDesc}
          </Modal.Body>

        </Modal.Body>
        <Modal.Footer>
          <Button className='div-button' onClick={this.props.closeModalControl}> <span class="front">
            Close
          </span> </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;