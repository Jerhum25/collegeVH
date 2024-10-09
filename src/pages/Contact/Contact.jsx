import React from "react";
import "./contact.scss";
function Contact(props) {
  return (
    <div className="contactContainer">
      <h2>Contactez-nous</h2>
      <h3>Vous pouvez joindre notre secrétariat du lundi au vendredi de 7h30 à 17h30<br/><br/>
      <a href="tel:0381811856">Tél : 03 81 81 18 56</a></h3>
      <div className="links">
        <div className="adresse">
          <a
            href="https://maps.app.goo.gl/h5Fsw4sFsjF5Wisa6"
            target="_blank"
            rel="noreferrer"
          >
            Collège Victor Hugo
            <br />8 rue du Lycée
            <br />
            25000 BESANCON
          </a>
          <p>
            {/* <i class="fa-solid fa-hand-pointer"></i> */}Cliquez sur l'adresse pour
            nous localiser
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
