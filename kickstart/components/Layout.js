import React from "react";
import { Container } from "semantic-ui-react";
// move link tag directly to the head of the html page
import Head from "next/head";
import Header from "./Header";

// 158=159
// header and footer
// child system (Campaign list child of layout)
export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
      <h1>im a footer</h1>
    </Container>
  );
};
