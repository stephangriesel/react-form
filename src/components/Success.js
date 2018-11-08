import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // SEND DATA TO BACKEND 
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values: { firstName, lastName, email, occupation , city, bio } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar title="Success" />
            <h1>Thank you!</h1>
            <p>Email confirmation on it's way!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
    button: {
        margin:15
    }
}

export default Success;
