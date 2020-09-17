import React from "react";
import Header from "../components/Header/Header";
import GlobalStyle from "../theme/GlobalStyle/GlobalStyle";
import ContentLayout from "../components/ContentLayout/ContentLayout";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentLayout>
        <div>Hi world!</div>
      </ContentLayout>
    </>
  );
}
