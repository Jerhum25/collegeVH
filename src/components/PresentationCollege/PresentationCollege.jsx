import React from "react";
import "./presentationCollege.scss";
function PresentationCollege(props) {
  return (
    <div className="presentationCollegeContainer">
      <h2>Présentation du collège</h2>
      <div>
        <p className="historiqueCollege">
          Le collège Victor Hugo, situé à Besançon, a une histoire riche et
          étroitement liée au développement de l'éducation en France. Fondé dans
          les années 1960, il porte le nom de l'écrivain et poète Victor Hugo,
          natif de Besançon, né en 1802. Le choix de ce nom témoigne de
          l'importance accordée à la figure littéraire et républicaine qu'il
          représentait.
          <br />
          <br />
          Le collège a été construit durant une période de croissance
          démographique en France, marquée par l'essor de l'enseignement
          secondaire pour tous, conformément aux réformes éducatives de
          l'après-guerre. Il fait partie des établissements construits sous
          l'égide de la politique éducative de la Quatrième puis de la Cinquième
          République, visant à améliorer l'accès à l'éducation pour les jeunes
          Français.
          <br />
          <br />
          Le collège Victor Hugo est situé dans le centre-ville, près de la Boucle, au cœur historique de la ville. Il se trouve non loin des principales institutions culturelles et patrimoniales de Besançon, ce qui renforce son ancrage dans le riche tissu historique de la ville. Le collège profite ainsi d’une proximité avec des lieux emblématiques et d’autres monuments historiques.
          <br />
          <br />
          Au fil des décennies, le collège a évolué pour répondre aux besoins
          éducatifs contemporains, en intégrant des innovations pédagogiques,
          des options linguistiques et artistiques, tout en continuant de
          valoriser l'héritage humaniste de Victor Hugo. De nos jours, il reste
          un pilier de la communauté éducative bisontine, jouant un rôle central
          dans la formation des jeunes de la région.
        </p>
        <div className="principalCollege">
          <img src="./images/JJFito.jpg" alt="Jean Jacques FITO" />
          <p>Jean-Jacques Fito, principal du collège</p>
        </div>
      </div>
    </div>
  );
}

export default PresentationCollege;
