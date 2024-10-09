import React from "react";
import "./accueil.scss";
import Banner from "../../components/Banner/Banner";
import PresentationCollege from "../../components/PresentationCollege/PresentationCollege";
function Accueil(props) {
  return (
    <div className="accueilContainer">
        <Banner/>
        <PresentationCollege/>
    </div>
  );
}

export default Accueil;
