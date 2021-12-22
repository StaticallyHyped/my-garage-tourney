import React from "react";
import { HomePageContainer } from "./homepage.styles";
import Directory from "../../components/directory/directory.component";
import { useParams } from "react-router-dom";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
