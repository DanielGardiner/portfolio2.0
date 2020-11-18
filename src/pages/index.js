import React from "react";
import Header from "../components/Header/Header";
import GlobalStyle from "../theme/GlobalStyle/GlobalStyle";
import ContentLayout from "../components/ContentLayout/ContentLayout";
import LandingPanel from "../panels/LandingPanel/LandingPanel";
import Helmet from "../components/Helmet/Helmet";
import ProjectPanel from "../panels/ProjectPanel/ProjectPanel";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SectionLeadText from "../components/SectionLeadText/SectionLeadText";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Helmet />
      <LandingPanel />
      <ContentLayout>
        <SectionHeading title={"REACT NEW BUILDS"} />
        <SectionLeadText
          text={
            "Here are two applications I have built using React whilst working as a web developer at Nudge Digital"
          }
        />
        <ProjectPanel />
      </ContentLayout>
    </>
  );
}
