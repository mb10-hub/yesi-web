import React, { Component } from "react";
import { Tabs, Tab, Grid } from "@material-ui/core";
import About from "./aboutme";
import App from "../App";
import "./App.css";
import HomeContent from "./home-content";

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
        <Tab label="Categories" />
        <Tab label="About Me" />
      </Tabs>
      {/* click on a nav option */}
      {selectedTab === 1 && <About />}

      <Grid container direction="column">
        <Grid item container className="header-color">
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            {showHomeContent(selectedTab)}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
