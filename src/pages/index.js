import React from "react";
import Header from "../components/Header/Header";
import GlobalStyle from "../theme/GlobalStyle/GlobalStyle";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import LandingPanel from "../panels/LandingPanel/LandingPanel";
import Helmet from "../components/Helmet/Helmet";
import ProjectPanel from "../panels/ProjectPanel/ProjectPanel";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Helmet />
      <LandingPanel />
      <ContentLayout>
        <ProjectPanel />
      </ContentLayout>
    </>
  );
}
