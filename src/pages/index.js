import React from "react"
import ScrollToTop from "react-scroll-to-top"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Footer from "../components/Footer"


const IndexPage = () => (
  <Layout>
    <SEO title="Raphael Ako-Mensah" />
    <Header></Header>
    <About></About>
    <Work></Work>
    <Footer></Footer>
    <ScrollToTop 
      top = "800"
      smooth
    />
  </Layout>
)

export default IndexPage
