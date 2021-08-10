import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";

import GAME from "../Images/Project/game.png";
import IDDEVICE from "../Images/Project/iddevice.png";
import SMARTLIB from "../Images/Project/smartlib.png";
import MINISHOP from "../Images/Project/minishop.png";
import ITSOLUTION from "../Images/Project/itsolution.png";
import MASK from "../Images/Project/mask.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const pStyle = {
  color: "#DAA520",
};

const Projets = () => {
  const [isMobile, setIsMobile] = useState(null)
  useEffect(() => {

    if (window.matchMedia("(max-width: 600px)").matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);




  const projectsElements = [
    {
      name: "ID-Device",
      date: "Mars - Août 2021",
      img: `${IDDEVICE}`,
      links: ["https://github.com/tahajadid/ID-Device"],
      linksDescriptions: ["Voir sur Github"],
      description:
        "Création d'une application android native qui permet aux employées de réserver les machines et réaliser plusieurs tâches",
      details: [
        "Modélisation et conception de l'application",
        "Choix des technologies",
        "Création des différentes interfaces existent dans l'application",
        "Réalisation des tests unitaires",
        "Stack : Android SDK, Kotlin, Firebase, JUnit, NodeJS, Adobe XD",
      ],
    },
    {
      name: "Site web",
      date: "Séptembre - Décembre 2020",
      img: `${ITSOLUTION}`,
      links: ["https://itsolutionren.com"],
      linksDescriptions: ["Voir le site"],
      description:
        "Refonte du site et de l'application de l'entreprise IT-Solution R.EN, start-up spécialiser dans les projets SAP",
      details: [
        "Conception, scénarisation et modélisation",
        "Développement front-end et back-end",
        "Mise en place d'une base de données",
        "Création des différentes interfaces existent dans l'application",
        "Stack : HTML5 - CSS3 - Bootstrap - Php - MySQL - Adobe Photoshop & XD",
      ],
    },
    {
      name: "SMART LIB",
      date: "Séptembre 2019",
      img: `${SMARTLIB}`,
      links: [
        "https://github.com/tahajadid/SmartLib ",
      ],
      linksDescriptions: ["Voir sur Github"],
      description: "Site web présentatif d'un projet d'une bibliothèque intelligente",
      details: [
        "Conception et modélisation",
        "Développement front-end",
        "Création des différentes interfaces existent dans l'application",
        "Stack : HTML5 - CSS3 - Bootstrap - Adobe Photoshop & XD",
      ],
    },
    {
      name: "Mini SHOP",
      date: "Janvier 2020",
      img: `${MINISHOP}`,
      description:
        "(Projet Académique) Site web e-commerce présentatiive des produit, avec une fonctionnalité en IA",
      details: [
        "Conception et scénarisation",
        "L'appel d'API en JS pour détecter l'age et le genre du client, afin de vouloir bien guider à réaliser des achats",
        "Développement front-end",
        "Création des différentes interfaces existent dans l'application",
        "Stack : HTML5 - CSS3 - Bootstrap - JS - API",
      ],
    },
    {
      name: "XO Game",
      date: "Février 2018",
      img: `${GAME}`,
      links: [
        "https://github.com/tahajadid/XO-Game",
      ],
      linksDescriptions: ["Voir sur Github"],
      description:
        "Travaux de recherche sur le mouvement open data en France et ses enjeux pour le journalisme",
      details: [
        "Conception et scénarisation",
        "Développemnt des différents mode du jeu",
        "Réalisation du design du jeu",
        "Stack : JAVA - SWING - MySQL",
      ],
    },
    {
      name: "Masque détection",
      date: "Avril 2020",
      img: `${MASK}`,
      links: [
        "https://www.youtube.com/watch?v=3QPOokDPNdc",
        "https://github.com/tahajadid/AI_COVID-19",
      ],
      linksDescriptions: ["Voir DEMO sur Youtube", "Voir sur Github"],
      description:
        "Travail personnel pour détecter la porte du masque, dans la période de la pandémie COVID-19",
      details: [
        "Idée originale en Mars 2020",
        "l'untisation d'un modèle Face-Mark-Detection",
        "Réalisation d'un script qui détecte l'existance du masque sur le visage en temps réel",
        "Stack : Python - OpenCV - Jupyter - AI",
      ],
    }
  ];


 
  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Projets</h2>
      </div>

      <Row className="justify-content-center">
        {projectsElements.map((e, i) => (
          <Col
            xs="12"
            md="6"
            xl="4"
            className="my-2"
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-delay={(isMobile ? 0 : i % 3) * 100}
          >
            <Card body inverse className="projectCard">
              <a  style={pStyle} href={e.links[0]} target="_blank" rel="noopener noreferrer">
                <CardImg top width="100%" src={e.img} alt={e.name} />
              </a>
              <CardBody className="p-0">
                <CardTitle
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h5>{e.name}</h5>
                  <h6>{e.date}</h6>
                </CardTitle>
                <CardText>
                  <p>
                    <em>{e.description}</em>
                  </p>
                  <ul>
                    {e.details.map((d) => (
                      <li>{d}</li>
                    ))}
                  </ul>
                  <p >
                    {e.links.map((l, i) => (
                      <div className="linkSection">
                        <a  href={l} target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLink} />
                          &nbsp; &nbsp; &nbsp;{e.linksDescriptions[i]}
                        </a>
                        <br />
                      </div>
                    ))}
                  </p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projets;
