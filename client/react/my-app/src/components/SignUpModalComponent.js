import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class SignUpModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        {/* <Button onClick={this.toggle}>Sign-up</Button> */}
        <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
          <ModalHeader toggle={this.toggle}>
            <strong>Sign-up</strong>
          </ModalHeader>

          <ModalBody>
            <form>
              <label htmlFor="FirstName" className="grey-text">First name</label>
              <input type="text" id="FirstName" className="form-control"/>
              <br/>
              <label htmlFor="LastName" className="grey-text">Last name</label>
              <input type="text" id="LastName" className="form-control"/>
              <br/>
              <label htmlFor="Email" className="grey-text">Email</label>
              <input type="email" id="Email" className="form-control"/>
              <br/>
              <label htmlFor="Password" className="grey-text">Password</label>
              <input type="password" id="Password" className="form-control"/>
              <br/>
              <label htmlFor="ConfirmPassword" className="grey-text">Confirm password</label>
              <input type="password" id="ConfirmPassword" className="form-control"/>
              <br/>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
            <Button color="primary">Sign-up</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

SignUpModalComponent.propTypes = {
  show: PropTypes.bool
};

export default SignUpModalComponent;