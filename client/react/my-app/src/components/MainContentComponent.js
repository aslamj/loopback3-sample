import React from "react";
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';

import SignUpModalComponent from './SignUpModalComponent';

class MainContentComponent extends React.Component {
  render() {
    const marginTop64 = {marginTop: '64px'};

    return (
      <div style={marginTop64}>
        <h2 className="display-4">
          Main Content goes here...
        </h2>

        {/* <SignUpModalComponent show={true}/> */}

        <Switch>
          <Route path="/signup" component={SignUpModalComponent} />
          {/* <Route path="/login" component={LoginModalComponent} /> */}
        </Switch>
      </div>
    );
  }
}

export default MainContentComponent;