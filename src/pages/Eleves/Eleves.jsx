import React, { useEffect, useState } from "react";
import { eleves } from "../../data/eleves";
import "./eleves.scss";

function Eleves(props) {
  const [elevesAZ, setElevesAZ] = useState([]);
  const [classesZA, setClassesZA] = useState([]);
  const [numberClasse, setNumberClasse] = useState("Toutes les classes");

  useEffect(() => {
    const lis = document.querySelectorAll(".menu li");
    lis.forEach((li) => li.addEventListener("click", handleClick));
  }, []);

  function handleClick(e) {
    e.preventDefault();
    setNumberClasse(e.target.textContent);
  }

  function triEleves(e) {
    e.preventDefault();
    setElevesAZ([
      eleves.sort(function compare(a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        if (a.prenom < b.prenom) return -1;
        if (a.prenom > b.prenom) return 1;
        return 0;
      }),
    ]);
  }
  function triClasses(e) {
    e.preventDefault();
    setClassesZA([
      eleves.sort(function compare(a, b) {
        if (a.numeroClasse > b.numeroClasse) return -1;
        if (a.numeroClasse < b.numeroClasse) return 1;
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
              <li>
                <p>
                  <strong>Toutes les classes</strong>
                </p>
              </li>
            </ul>
            <ul>
              <p>
                <strong>Classes de 6ème</strong>
              </p>
              <li>601</li>
              <li>602</li>
              <li>603</li>
              <li>604</li>
              <li>605</li>
            </ul>
            <ul>
              <p>
                <strong>Classes de 5ème</strong>
              </p>
              <li>501</li>
              <li>502</li>
              <li>503</li>
              <li>504</li>
              <li>505</li>
            </ul>
            <ul>
              <p>
                <strong>Classes de 4ème</strong>
              </p>
              <li>401</li>
              <li>402</li>
              <li>403</li>
              <li>404</li>
              <li>405</li>
              <li>406</li>
            </ul>
            <ul>
              <p>
                <strong>Classes de 3ème</strong>
              </p>
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
              {numberClasse === "Toutes les classes"
                ? eleves.map((item, index) => (
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
                  ))
                : eleves.map((item, index) =>
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
