import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isImgDisplayed: false,
      beastImg: ''
    }
  }



  displayModalImg = (img_Url, name) => {
    this.setState({
      isImgDisplayed: true,
      beastImg: img_Url,
      beastName: name
    });
  };

  closeImgModal = () => {
    this.setState({
      isImgDisplayed: false
    });
  };

  render() {
    return (
      <>
        <Modal show={this.state.isModalDisplaying} onHide={this.closeModalHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      </>
      
    );
  }
}

export default SelectedBeast;