import React from "react";

import { Page } from "react-onsenui";

import NavBar from "../components/NavBar";

type HomePageProps = {
  navigator: any;
};

const MainPage: React.FC<HomePageProps> = ({ navigator }) => (
  <Page
    renderToolbar={() => <NavBar title="Onsen Weather" navigator={navigator} />}
  ></Page>
);

export default MainPage;
