import React, { useState } from "react";
import { profs } from "../../data/profs";
import "./professeurs.scss";

// profs.sort(profs.nom);
// console.log(profs);
profs.sort(function compare(a, b) {
  if (a.nom < b.nom) return -1;
  if (a.nom > b.nom) return 1;
  return 0;
});
function Professeurs(props) {
  const [matieresAZ, setMatieresAZ] = useState([]);
  const [profsAZ, setProfsAZ] = useState([]);

  function triProfs(e) {
    e.preventDefault();
    setProfsAZ([
      profs.sort(function compare(a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        if (a.prenom < b.prenom) return -1;
        if (a.prenom > b.prenom) return 1;
        return 0;
      }),
    ]);
  }

  function triMatieres(e) {
    e.preventDefault();
    setMatieresAZ([
      profs.sort(function compare(a, b) {
        if (a.matiere < b.matiere) return -1;
        if (a.matiere > b.matiere) return 1;
        return 0;
      }),
    ]);
  }

  return (
    <div className="professeursContainer">
      <h2>professeurs</h2>
      <table>
        <thead className="entete">
          <tr>
            <th onClick={triProfs}>nom prénom</th>
            <th onClick={triMatieres}>matière</th>
          </tr>
        </thead>
        <tbody>
          {profs.map((item) => (
            <tr key={item.nom}>
              <td>
                <h4>
                  <span>{item.nom}</span> {item.prenom}
                </h4>
              </td>
              <td>
                <p>{item.matiere}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Professeurs;
