import React from "react";
import HomepageButton from "../../components/homepage-button/homepage-button.component";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="home-page">
    <h1 className="title">Home Page</h1>
    <div className="items">
      <HomepageButton linkTo={"/new-tourney"}>New Tournament</HomepageButton>
      <HomepageButton linkTo={"/"}>Continue Tournament</HomepageButton>
      <HomepageButton linkTo={"/"}>
        View Prior Tournament History
      </HomepageButton>
    </div>
  </div>
);

export default HomePage;
