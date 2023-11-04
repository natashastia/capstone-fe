import React from "react";

import Navbar from "../components/navbar.jsx";
import InfoHeader from "../components/infoheader.jsx";
import Article from "../components/article.jsx";
import Featured from "../components/featured.jsx";

const Information = () => {
  return (
    <div>
      <Navbar />
      <InfoHeader />
      <Featured />
      <Article />
    </div>
  );
};

export default Information;
