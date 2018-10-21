import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import UserService from '../services/UserService';

class SignUpModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      form: {
        firstName: 'Aslam',
        lastName: 'Test',
        email: 'jaslam.test@gmail.com',
        password: 'Password123',
      },
    };

    // this.onFirstNameChange = this.onFirstNameChange.bind(this);
    // this.onLastNameChange = this.onLastNameChange.bind(this);
    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.onSignupClick = this.onSignupClick.bind(this);
  };

  componentDidMount() {
    // this.toggle();
  }

  componentWillUnmount() {
    // this.setState({ modal: false });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onFirstNameChange = (event) => {
    this.setState({ form: { ...this.state.form, firstName: event.target.value } });
  }

  onLastNameChange = (event) => {
    this.setState({ form: { ...this.state.form, lastName: event.target.value } });
  }

  onEmailChange = (event) => {
    this.setState({ form: { ...this.state.form, email: event.target.value } });
  }

  onPasswordChange = (event) => {
    this.setState({ form: { ...this.state.form, password: event.target.value } });
  }

  onSignupClick = () => {
    let response = (new UserService()).signup(
      this.state.form.firstName,
      this.state.form.lastName,
      this.state.form.email,
      this.state.form.password,
    );
    
    response.then((user) => {
      console.log('user: ' + JSON.stringify(user));
      this.toggle();
    }).catch((error) => {
      console.log('error: ' + JSON.stringify(error));
    });
  };

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
              <input type="text" id="FirstName" className="form-control" value={this.state.form.firstName} onChange={ this.onFirstNameChange } />
              <br/>
              <label htmlFor="LastName" className="grey-text">Last name</label>
              <input type="text" id="LastName" className="form-control" value={this.state.form.lastName} onChange={ this.onLastNameChange } />
              <br/>
              <label htmlFor="Email" className="grey-text">Email</label>
              <input type="email" id="Email" className="form-control" value={this.state.form.email} onChange={ this.onEmailChange } />
              <br/>
              <label htmlFor="Password" className="grey-text">Password</label>
              <input type="password" id="Password" className="form-control" value={this.state.form.password} onChange={ this.onPasswordChange } />
              <br/>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.onSignupClick}>Sign-up</Button>
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