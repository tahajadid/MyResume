import React from "react";
import { Container } from "reactstrap";
import IDEMIA from "../Images/idemiaLogo.png"
import SIGER from "../Images/sigerLogo.png"
import TCREATIVE from "../Images/tcreativeLogo.png"
import ITSOLUTION from "../Images/itsolutionLogo.png"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import "react-vertical-timeline-component/style.min.css";

const pStyle = {
  color: "#DAA520",
};

const Experience = () => {
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles"> Expérience</h2>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          date="Mars - Juillet, 2021"
          iconStyle={{
            backgroundImage: `url(${IDEMIA})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Stage PFE au sein d’lDEMIA - Casablanca</h3>
          <p>
            <em>
            Conception et la réalisation d’une application mobile pour la gestion 
            d’un ensemble de machines au sein de l’entreprise
            </em>
          </p>
          <br />
          <ul>
            <li>
              L'étude et développement d'une application mobile conviviale et moderne qui propose plusieurs fonctionnalités,
              dont la principale est d’effectuer des réservations sur l’ensemble des appareils au sein de l’entreprise
            </li>
            <li>
              Gestion des différentes interfaces selon les rôles au sein de l'entreprise
            </li>
            <li>
              Gestion efficiente en utilisant un système de notification
            </li>
            <li>
            L'agilité au niveau des nouvelles fonctionnalités
            </li>
            <li>
              <b> Stack : </b> Android SDK / Node.js / Firebase / REST / KOTLIN / JIRA / Git
            </li>
          </ul>

          <p> 
            <a style={pStyle} href="https://github.com/tahajadid/ID-Device"> 
              <FontAwesomeIcon
                icon={faLink}
                style={{ fontSize: "1em" }}
              />
              &nbsp;Voir sur Github 
            </a>
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Septembre - Décembre, 2020"
          iconStyle={{
            backgroundImage: `url(${ITSOLUTION})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Développeur Freelance au sein d'IT-Solution R.EN - Casablanca</h3>

          <p>
            <em>
              Développement du site web officiel de l'entreprise IT-Solution R.EN
            </em>
          </p>
          <br />
          <ul>
            <li> Etude des besoins </li>
            <li>
              Rédaction du Product Backlog
            </li>
            <li>
              Réalisation d'un site web présentatif responsive et dynamique
            </li>
            <li>
              <b> Stack : </b> HTML / CSS / JS / Bootstrap / PHP / MySQL / Adobe Photoshop / Adobe XD
            </li>
          </ul>
          <p> 
            <a style={pStyle} href="https://itsolutionren.com"> 
              <FontAwesomeIcon
                icon={faLink}
                style={{ fontSize: "1em" }}
              />
              &nbsp;Voir le Site
            </a>
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Juillet - Août, 2020"
          iconStyle={{
            backgroundImage: `url(${SIGER})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Stage d’application au sein du laboratoire SIGER - Fès.</h3>

          <p>
            <em>
            Génération d’un modèle de détection de la toux contre COVID-19 à 
            base d’une caméra thermique en utilisant l’intelligence artificielle
            </em>
          </p>
          <br />

          <ul>
            <li>
              La détection des personnes depuis la camera de notre système en utilisant l’intelligence artificielle. qui retourne la position de cette personne afin de valider ce résultat en consultant les résultats de notre réseau des microphones.
            </li>
            <li>
              L'etude de la position de la personne détectée afin de valider ce résultat en consultant les résultats de notre réseau des microphones
            </li>
            <li>
              Traitement du signal et d'image réaliser par la carte principale du projet (Raspberry Pi3)
            </li>
            <li>
              <b> Stack : </b> Python / Jupyter / OpenCV / AI / SQLITE
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Juillet, 2019"
          iconStyle={{
            backgroundImage: `url(${TCREATIVE})`,
            backgroundColor: "#fff",
            color: "#666666",
            backgroundSize: "cover",
          }}
        >
          <h3>Stage d’initiation au sein du centre TCreative - Fès</h3>
          <p>
            <em>
              Application Web qui permet d'assurer le suivi des niveaux des produits, commandes, ventes et livraisons
            </em>
          </p>
          <br />
          <ul>
            <li>
              Etude des besoins
            </li>
            <li>
              Modélisation du projey UML ( diagramme de cas d’utilisation - diagramme de classes )
            </li>
            <li>
              Développement de la partie Front-End
            </li>
            <li>Hébergement au niveau des serveurs de l'entreprise</li>
            <li>
              <b> Stack : </b> HTML / CSS / ReactJS / REDUX / UML / Photoshop
            </li>
          </ul>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
