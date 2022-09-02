import React, { useState } from "react";
import Header from "../../../Components/Header";
import Builder from '../../../Components/Form'
// import Footer from "../Footer";

const initialElements = {
  formName: "Form Name",
  nodes: []
}

export default () => {
  
  const [elements, setElements] = useState(initialElements)
  
  return (
    <>
      <Header />
      <Builder setElements={setElements} elements={elements} />
      {/* <Footer /> */}
    </>
  );
}
