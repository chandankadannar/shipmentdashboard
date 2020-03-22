import React, { Component } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./Assets/logo.svg";
import profilepic from "./Assets/profile.svg";
import warehousepic from "./Assets/warehouse.svg";
import destination from "./Assets/destination.svg";
import Paper from "@material-ui/core/Paper";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import { typography } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
        <Grid style={{ marginTop: "1em" }} container item={true} xs={12}>
          <Grid container item={true} xs={3} />
          <Grid container item={true} xs={6} justify="center">
            <Grid container item={true} xs={12} justify="center">
              <Grid container item={true} xs={2}>
                <Card style={{ background: "#388FF4" }} variant="outlined">
                  <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: "0em",
                        fontSize: "0.8em",
                        color: "white"
                      }}
                    >
                      DEL{" "}
                    </p>
                    <p
                      style={{
                        marginTop: "0.2em",
                        marginBottom: "0.2em",
                        fontSize: "2em",
                        color: "white"
                      }}
                    >
                      916
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container item={true} xs={2}>
                <Card style={{ background: "#D5DEFF" }} variant="outlined">
                  <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: "0.1em",
                        fontSize: "0.8em",
                        color: "#388FF4"
                      }}
                    >
                      INT
                    </p>
                    <p
                      style={{
                        marginTop: "0.2em",
                        marginBottom: "0.2em",
                        fontSize: "2em",
                        color: "#388FF4"
                      }}
                    >
                      916
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container item={true} xs={2}>
                <Card style={{ background: "#D5DEFF" }} variant="outlined">
                  <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: "0.1em",
                        fontSize: "0.8em",
                        color: "#388FF4"
                      }}
                    >
                      OOD
                    </p>
                    <p
                      style={{
                        marginTop: "0.2em",
                        marginBottom: "0.2em",
                        fontSize: "2em",
                        color: "#388FF4"
                      }}
                    >
                      916
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container item={true} xs={2}>
                <Card style={{ background: "#D5DEFF" }} variant="outlined">
                  <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: "0.1em",
                        fontSize: "0.8em",
                        color: "#388FF4"
                      }}
                    >
                      DEX
                    </p>
                    <p
                      style={{
                        marginTop: "0.2em",
                        marginBottom: "0.2em",
                        fontSize: "2em",
                        color: "#388FF4"
                      }}
                    >
                      916
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container item={true} xs={2}>
                <Card style={{ background: "#D5DEFF" }} variant="outlined">
                  <CardContent style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <p
                      style={{
                        textAlign: "left",
                        paddingLeft: "0.1em",
                        fontSize: "0.8em",
                        color: "#388FF4"
                      }}
                    >
                      NFI
                    </p>
                    <p
                      style={{
                        marginTop: "0.2em",
                        marginBottom: "0.2em",
                        fontSize: "2em",
                        color: "#388FF4"
                      }}
                    >
                      916
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item={true} xs={3} />
        </Grid>

        <Grid style={{ marginTop: "1em" }} container item={true} xs={12}>
          <Grid
            style={{ border: "2px solid red", margin: "1em" }}
            container
            item={true}
            xs={4}
          >
            <Grid container item={true} xs={12}>
              <typography style={{ margin: "0.5em", marginBottom: "0px" }}>
                <img src={warehousepic} />
              </typography>
            </Grid>
            <Grid container item={true} xs={12}>
              <Toolbar style={{ paddingRight: "0.5em", paddingLeft: "0.8em" }}>
                <Typography
                  type="title"
                  color="inherit"
                  style={{
                    borderRight: "0.1em dashed black",
                    height: "100%",
                    marginLeft: "0.2em"
                  }}
                ></Typography>
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "red ",
                    borderRadius: "90%",
                    display: "inline-block",
                    position: "absolute"
                  }}
                ></span>
                <Typography
                  type="title"
                  color="inherit"
                  style={{ padding: "0.3em" }}
                >
                  <Divider
                    style={{ border: "0.5px solid blue", width: "50px" }}
                  />
                </Typography>

                <div style={{ width: "100%" }}>
                  <Box
                    component="span"
                    display="block"
                    style={{ border: "1px solid red", margin: 0 }}
                    p={1}
                    m={1}
                    bgcolor="background.paper"
                  >
                    Delivered
                  </Box>
                </div>
              </Toolbar>
            </Grid>
            <Grid container item={true} xs={12}>
              <Toolbar style={{ paddingRight: "0.5em", paddingLeft: "0.8em" }}>
                <Typography
                  type="title"
                  color="inherit"
                  style={{
                    borderRight: "0.1em dashed black",
                    height: "100%",
                    marginLeft: "0.2em"
                  }}
                ></Typography>
                <span
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: "red ",
                    borderRadius: "90%",
                    display: "inline-block",
                    position: "absolute"
                  }}
                ></span>
                <Typography
                  type="title"
                  color="inherit"
                  style={{ padding: "0.3em" }}
                >
                  <Divider
                    style={{ border: "0.5px solid blue", width: "50px" }}
                  />
                </Typography>

                <div style={{ width: "100%" }}>
                  <Box
                    component="span"
                    display="block"
                    style={{ border: "1px solid red", margin: 0 }}
                    p={1}
                    m={1}
                    bgcolor="background.paper"
                  >
                    Delivered
                  </Box>
                </div>
              </Toolbar>
            </Grid>
            <Grid container item={true} xs={12}>
              <typography style={{ marginRight: "0.5em", marginLeft: "0.5em" }}>
                <img src={destination} />
              </typography>
            </Grid>
          </Grid>
          <Grid
            style={{ border: "1px solid blue" }}
            container
            item={true}
            xs={7}
          >
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      sdds
                    </TableCell>
                    <TableCell align="right">dd</TableCell>
                    <TableCell align="right">cc</TableCell>
                    <TableCell align="right">cccc</TableCell>
                    <TableCell align="right">dddd</TableCell>
                  </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
