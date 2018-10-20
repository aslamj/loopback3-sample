import React from "react";
import { Container, Footer } from "mdbreact";

class FooterComponent extends React.Component {
  render() {
    return (
      <Footer color="grey" className="font-small pt-4 mt-4 position-absolute w-100">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://github.com/aslamj"> aslamj </a>
          </Container>
        </div>
      </Footer>
    );
  }
}

export default FooterComponent;