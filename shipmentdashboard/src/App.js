import React, { Component } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "./Assets/logo.svg";
import profilepic from "./Assets/profile.svg";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "inherit"
          }}
          position="static"
        >
          <Toolbar justify="end">
            <img style={{ width: 50, height: 50 }} src={logo} />
            <Typography
              style={{
                color: "black",
                fontWeight: "600",
                margin: "10px",
                fontSize: "15px"
              }}
            >
              Intugine
            </Typography>
          </Toolbar>

          <Toolbar
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <div
              style={{
                color: "black",
                fontWeight: "600",
                padding: "0.8em",
                fontSize: "15px",
                background: "#F7F8FE"
              }}
            >
              <p>Home</p>
            </div>
            <Typography
              style={{
                color: "black",
                fontWeight: "600",
                margin: "10px",
                fontSize: "15px"
              }}
            >
              Brands
            </Typography>
            <Typography
              style={{
                color: "black",
                fontWeight: "600",
                margin: "10px",
                fontSize: "15px"
              }}
            >
              Transporters
            </Typography>
            <Typography
              style={{ color: "black", fontWeight: "600", fontSize: "15px" }}
            >
              <img
                style={{
                  width: 20,
                  height: 20,
                  background: "#BFC2C9",
                  borderRadius: "18px",
                  padding: "11px"
                }}
                src={profilepic}
              />
            </Typography>
            <Typography
              style={{
                color: "black",
                fontWeight: "600",
                margin: "10px",
                fontSize: "15px"
              }}
            >
              <ExpandMoreTwoToneIcon
                style={{ color: "black", width: 25, height: 25 }}
              />
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
