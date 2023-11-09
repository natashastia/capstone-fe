import React from "react";

import Navbar from "../components/navbar.jsx";
import InfoHeader from "../components/infoheader.jsx";
import Article from "../components/article.jsx";
import Featured from "../components/featured.jsx";
import Footer from "../components/footer.jsx";

const Information = () => {
  return (
    <div>
      <Navbar />
      <InfoHeader />
      <Article />
      <Footer />
    </div>
  );
};

export default Information;
