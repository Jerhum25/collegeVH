import React, { useEffect, useState } from "react";
import { eleves } from "../../data/eleves";
import "./eleves.scss";

function Eleves(props) {
  const [elevesAZ, setElevesAZ] = useState([]);
  const [classesAZ, setClassesAZ] = useState([]);
  const [numberClasse, setNumberClasse] = useState(601);

  useEffect(() => {
    const lis = document.querySelectorAll(".menu li");
    lis.forEach((li) => li.addEventListener("click", handleClick));
  }, []);

  function handleClick(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    setNumberClasse(e.target.textContent);
  }

  function triEleves(e) {
    e.preventDefault();
    setElevesAZ([
      eleves.sort(function compare(a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      }),
    ]);
  }
  function triClasses(e) {
    e.preventDefault();
    setClassesAZ([
      eleves.sort(function compare(a, b) {
        if (a.numeroClasse < b.numeroClasse) return -1;
        if (a.numeroClasse > b.numeroClasse) return 1;
        return 0;
      }),
    ]);
  }

  return (
    <div className="classesContainer">
      <h2>classes</h2>
      <div className="liste">
        <div className="menu">
          <ul>
            <ul>
              Classes de 6ème
              <li>601</li>
              <li>602</li>
              <li>603</li>
              <li>604</li>
              <li>605</li>
            </ul>
            <ul>
              Classes de 5ème
              <li>501</li>
              <li>502</li>
              <li>503</li>
              <li>504</li>
              <li>505</li>
            </ul>
            <ul>
              Classes de 4ème
              <li>401</li>
              <li>402</li>
              <li>403</li>
              <li>404</li>
              <li>405</li>
              <li>406</li>
            </ul>
            <ul>
              Classes de 3ème
              <li>301</li>
              <li>302</li>
              <li>303</li>
              <li>304</li>
              <li>305</li>
              <li>306</li>
            </ul>
          </ul>
        </div>
        <div className="resultats">
          <table>
            <thead>
              <tr>
                <th onClick={triEleves}>nom</th>
                <th>prénom</th>
                <th onClick={triClasses}>classe</th>
              </tr>
            </thead>
            <tbody>
              {eleves.map((item, index) =>
                item.numeroClasse == numberClasse ? (
                  <tr key={index}>
                    <td>
                      <h4>{item.nom}</h4>
                    </td>
                    <td>
                      <h4>{item.prenom}</h4>
                    </td>
                    <td>
                      <p>{item.numeroClasse}</p>
                    </td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Eleves;
