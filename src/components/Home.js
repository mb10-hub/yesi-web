import React, { Component } from "react";
import { Tabs, Tab, Grid } from "@material-ui/core";
import About from "./aboutme";
import App from "../App";
import "./App.css";
import HomeContent from "./home-content";
import SideMenu from "./side-menu";
//for the flex grid
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Home = (props) => {
  // get the id of the home page
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  console.log(page);

  const tabNameToIndex = {
    0: "main",
    1: "about",
  };

  const indexToTabName = {
    main: 0,
    about: 1,
  };

  // call for flex grid css styles
  const classes = useStyles();

  // indexToTabName is the reverse name on the url search
  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    // click nav bar and the url name is conistant
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const showHomeContent = (selectedTabState) => {
    if (selectedTabState === 1) {
      return <About />;
    } else {
      return <HomeContent />;
    }
  };

  const showSideBar = (selectedTab) => {
    if (selectedTab === 0) {
      return <SideMenu />;
    }
  };

  return (
    <>
      <Tabs
        className="header-color"
        value={selectedTab}
        onChange={handleChange}
        aria-label="simple tabs example"
        centered
        textColor="primary"
      >
        <Tab label="Products" />
        <Tab label="About Me" />
      </Tabs>

      {/* click on a nav option */}
      {/* {selectedTab === 1 && <About />} */}
      {selectedTab === 1}

      <div className={classes.root}>
        <Grid container spacing={0} className="header-color">
          <Grid item xs>
            {showSideBar(selectedTab)}
          </Grid>
          <Grid item xs={8}>
            {showHomeContent(selectedTab)}
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
