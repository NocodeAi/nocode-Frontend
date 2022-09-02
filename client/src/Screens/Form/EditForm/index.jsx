import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header";
import FormBuilder from '../../../Components/Form'
// import Footer from "../Footer";
import {
  GET_FORM
} from '../../../Utils/apis'
import { useLocation } from "react-router-dom";
import axios from "axios";
import handleElements from '../../../Components/Form/FunctionalData/setElementsObject'

export default () => {
  const [elements, setElements] = useState({ formName: "Form Name", nodes: [] })

  const location = useLocation()

  const getData = async () => {
    let result = await axios.get(`${GET_FORM}?formId=${location.state.form_id}`)
    let data = result?.data?.forms[0]
    let nodes = JSON.parse(data?.properties)
    let updatedNodes = []

    nodes?.map((n) => {
      updatedNodes.push(handleElements(n.type, n))
      console.log(handleElements(n.type, n), "Data Got With Component")
    })

    let formData = {
      formName: data?.name,
      nodes: updatedNodes
    }

    setElements(formData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Header />
      <FormBuilder setElements={setElements} elements={elements} />
      {/* <Footer /> */}
    </>
  );
}
