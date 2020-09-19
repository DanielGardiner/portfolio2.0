import React from "react";
import Header from "../components/Header/Header";
import GlobalStyle from "../theme/GlobalStyle/GlobalStyle";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import LandingPanel from "../components/LandingPanel/LandingPanel";
import Helmet from "../components/Helmet/Helmet";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Helmet />
      {/* <Header />
      <ContentLayout>
        <div>Hi world!</div>
      </ContentLayout> */}
      <LandingPanel />
      <ContentLayout>
        <div>Hi world!</div>
      </ContentLayout>
    </>
  );
}
