import React from "react";
import { Container } from "reactstrap";
import LYCEE from "../Images/lyceeLogo.png";
import ENSA from "../Images/ensaLogo.png"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const FormationTimeline = () => {
  const formationItems = [
    {
      title: "Ecole Nationale des Sciences Appliquées - FES",
      date: "2018-2021",
      description: `Génie des Systèmes Embarqués`,
      img: `${ENSA}`,
    },
    {
      title: "Ecole Nationale des Sciences Appliquées - FES",
      date: "2016-2018",
      description: "Cycle préparatoire intégré",
      img: `${ENSA}`,
    },
    {
      title: "Bac - Mention Très Bien",
      date: "2016",
      description: "Sciences Physique et Chimie",
      img: `${LYCEE}`,
    },
  ];

  return (
    <Container>
      <div data-aos="zoom-in">
        <h2 className="section-titles">Formation</h2>
      </div>

      <VerticalTimeline>
        {formationItems.map((e) => (
          <VerticalTimelineElement
            date={e.date}
            iconStyle={{
              backgroundImage: `url(${e.img})`,
              backgroundColor: "#fff",
              color: "#666666",
              backgroundSize: "cover",
            }}
          >
            <h3>{e.title}</h3>
            <p>
              <em>{e.description}</em>
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};

export default FormationTimeline;
